import DefaultCard from "./DefaultCard";

export default function ParticipantsView({ participants, emailFailed }) {
  return (
    <DefaultCard rsvpLabel="✓ RSVP Received" rsvpDisabled>
      <div className="flex h-full w-full flex-col items-center overflow-y-auto px-6 pt-12 pb-32 text-center">
        <h2 className="text-2xl font-bold text-cream-50 drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)] sm:text-3xl">
          You're in! 🎉
        </h2>

        {emailFailed && (
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
