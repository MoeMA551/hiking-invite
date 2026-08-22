import { useEffect, useState } from "react";
import DefaultCard from "./DefaultCard";
import { addGuestToList, getGuestList } from "../utils/guestList";
import { sendRsvpEmail } from "../utils/email";

export default function RsvpCard() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("idle");
  const [participants, setParticipants] = useState([]);

  useEffect(() => {
    getGuestList()
      .then(setParticipants)
      .catch((err) => console.error("Could not load guest list:", err));
  }, []);

  const handleSubmit = async () => {
    if (!name.trim() || !email.trim()) return;
    setStatus("sending");

    const rsvp = { name: name.trim(), email: email.trim(), message: message.trim() };
    let saved = false;

    try {
      const updated = await addGuestToList(rsvp);
      setParticipants(updated);
      saved = true;
    } catch (err) {
      console.error("Could not save RSVP to the server:", err);
    }

    if (!saved) {
      try {
        await sendRsvpEmail(rsvp);
      } catch (err) {
        console.error("RSVP email failed to send:", err);
      }
      setStatus("saveError");
      return;
    }

    try {
      await sendRsvpEmail(rsvp);
      setStatus("done");
    } catch (err) {
      console.error("RSVP email failed to send:", err);
      setStatus("error");
    }
  };

  if (status === "done" || status === "error" || status === "saveError") {
    return (
      <DefaultCard rsvpLabel="✓ RSVP Received" rsvpDisabled>
        <div className="flex h-full w-full flex-col items-center overflow-y-auto px-6 pt-12 pb-32 text-center">
          <h2 className="text-2xl font-bold text-cream-50 drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)] sm:text-3xl">
            You're in! 🎉
          </h2>

          {status === "error" && (
            <p className="mt-2 text-xs text-bark-300">
              (Saved to the list below, but the confirmation email couldn't send —
              EmailJS may not be configured yet.)
            </p>
          )}

          {status === "saveError" && (
            <p className="mt-2 text-xs text-bark-300">
              (Couldn't reach the guest list server — make sure{" "}
              <code className="rounded bg-black/20 px-1">npm run server</code> is running
              alongside the app.)
            </p>
          )}

          <div className="mt-6 flex w-full flex-col gap-2 text-left">
            <p className="text-xs font-semibold uppercase tracking-wide text-cream-100/70">
              Participants ({participants.length})
            </p>
            {participants.map((p) => (
              <div
                key={p.id}
                className="rounded-xl bg-white/15 px-4 py-2 text-sm font-medium text-cream-50"
              >
                {p.name}
              </div>
            ))}
          </div>
        </div>
      </DefaultCard>
    );
  }

  return (
    <DefaultCard
      onRsvp={handleSubmit}
      rsvpLabel={status === "sending" ? "Submitting…" : "Submit"}
      rsvpDisabled={status === "sending"}
    >
      <div className="flex h-full w-full flex-col items-center justify-center gap-5 px-6 pb-16 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-cream-50 drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">
          Are you In?
        </h2>

        <div className="flex w-full max-w-md flex-col gap-3 sm:max-w-lg">
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
            placeholder="See you! (optional message)"
            className="w-full rounded-xl bg-white/15 px-4 py-3 text-cream-50 placeholder-cream-100/60 outline-none transition focus:bg-white/25"
          />
        </div>
      </div>
    </DefaultCard>
  );
}
