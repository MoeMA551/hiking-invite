import { useState } from "react";
import DefaultCard from "./DefaultCard";
import { addGuestToList } from "../utils/guestList";
import { sendRsvpEmail } from "../utils/email";

export default function RSVPCard({ onDone }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("idle"); // idle -> sending

  const handleSubmit = async () => {
    if (!name.trim() || !email.trim()) return;
    setStatus("sending");

    const rsvp = { name: name.trim(), email: email.trim(), message: message.trim() };

    let updated = [];
    let saveOk = true;
    try {
      updated = await addGuestToList(rsvp);
    } catch (err) {
      console.error("Could not save RSVP to the sheet:", err);
      saveOk = false;
    }

    let emailOk = true;
    try {
      await sendRsvpEmail(rsvp);
    } catch (err) {
      console.error("RSVP email failed to send:", err);
      emailOk = false;
    }

    onDone(updated, emailOk, saveOk);
  };

  return (
    <DefaultCard
      onRsvp={handleSubmit}
      rsvpLabel={status === "sending" ? "Submitting…" : "Submit"}
      rsvpDisabled={status === "sending"}
    >
      <div className="flex h-full w-full flex-col items-center justify-center gap-5 sm:gap-10 px-6 pb-16 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-cream-50 drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">
          Are you In?
        </h2>

        <div className="flex w-full max-w-md flex-col gap-3 sm:gap-7 sm:max-w-lg">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="w-full rounded-xl bg-white/15 px-4 py-3 text-cream-50 placeholder-cream-100/60 outline-none transition focus:bg-white/25"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            className="w-full rounded-xl bg-white/15 px-4 py-3 text-cream-50 placeholder-cream-100/60 outline-none transition focus:bg-white/25"
          />
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write a message!"
            className="w-full rounded-xl bg-white/15 px-4 py-3 text-cream-50 placeholder-cream-100/60 outline-none transition focus:bg-white/25"
          />
        </div>
      </div>
    </DefaultCard>
  );
}