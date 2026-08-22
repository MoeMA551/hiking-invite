import DefaultCard from "./DefaultCard";
import { useState } from "react";
import { addGuestToList, getGuestList } from "../utils/guestList";
import { sendRsvpEmail } from "../utils/email";

export default function RSVPCard({onRsvp})  {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("idle");
    const [participants, setParticipants] = useState(() => getGuestList());

    const handleSubmit = async () => {
        if (!name.trim() || !email.trim()) return;
        setStatus("sending");

        const updated = addGuestToList({
            name: name.trim(),
            email: email.trim(),
            message: message.trim(),
        });
        setParticipants(updated);

        try {
            await sendRsvpEmail({ name: name.trim(), email: email.trim(), message: message.trim() });
            setStatus("done");
            } catch (err) {
            console.error("RSVP email failed to send:", err);
            setStatus("error"); // still on the list — just flag the email problem
            }
    };

    if (status === "done" || status === "error") {
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

    return(
        <DefaultCard 
        onRsvp={handleSubmit}
        rsvpLabel={status === "sending" ? "Submitting…" : "Submit"}
        rsvpDisabled={status === "sending"} 
        RsvpLabel="Submit">
            <div className="flex h-full w-full flex-col items-center gap-10 sm:gap-20 px-6 pb-5 text-center">
                <h2 className="text-2xl sm:text-3xl font-bold text-cream-50 drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)] mt-3 sm:mt-10">
                Are you In?
                </h2>

                <div className="flex w-full max-w-xs sm:max-w-lg flex-col gap-5 items-center justify-center mt-3 sm:mt-5 mx-3 px-5 sm:px-10">
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your name"
                        className="w-full text-md sm:text-3xl rounded-xl bg-white/15 px-4 py-3 text-cream-50 placeholder-cream-100/60 outline-none transition focus:bg-white/25"
                    />
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your email"
                        className="w-full text-md sm:text-3xl rounded-xl bg-white/15 px-4 py-3 text-cream-50 placeholder-cream-100/60 outline-none transition focus:bg-white/25"
                    />
                    <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Message For Me"
                        className="w-full text-md sm:text-3xl rounded-xl bg-white/15 px-4 py-3 text-cream-50 placeholder-cream-100/60 outline-none transition focus:bg-white/25"
                    />
                </div>
            </div>
        </DefaultCard>

    );    

}