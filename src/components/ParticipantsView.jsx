import DefaultCard from "./DefaultCard";

export default function ParticipantsView({ participants, emailFailed }) {
  return (
    <DefaultCard hideRsvpButton>
      <div className="flex h-full w-full flex-col items-center px-6 pt-12 pb-6 text-center">
        <h2 className="text-2xl font-bold text-cream-50 drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)] sm:text-3xl">
          You're in! 🎉
        </h2>

        {emailFailed && (
          <p className="mt-2 text-xs text-bark-300">
            (Saved to the list below, but the confirmation email couldn't send —
            EmailJS may not be configured yet.)
          </p>
        )}

        <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-cream-100/70">
          Participants ({participants.length})
        </p>

        <div className="mt-2 flex w-full min-h-0 flex-1 flex-col gap-2 overflow-y-auto text-left">
          {participants.map((p) => (
            <div
              key={p.id}
              className="flex shrink-0 items-center justify-between gap-3 rounded-xl bg-white/15 px-4 py-2 text-sm font-medium text-cream-50"
            >
              <span>{p.name}</span>
              {p.message && (
                <span className="truncate text-xs font-normal text-cream-100/70">{p.message}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </DefaultCard>
  );
}