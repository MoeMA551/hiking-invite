export default function DefaultCard({
  children,
  onRsvp,
  rsvpLabel = "Accept Invitation",
  rsvpDisabled = false,
  hideRsvpButton = false,
}) {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-[2rem] border border-cream-50/20 bg-forest-900/45 shadow-2xl backdrop-blur-sm">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/15 to-transparent" />

      <div className="h-full w-full p-5 sm:p-10">{children}</div>

      {!hideRsvpButton && (
        <div className="absolute inset-x-0 bottom-0 z-20 flex items-center justify-center px-4 pb-4">
          <button
            onClick={onRsvp}
            disabled={rsvpDisabled}
            className="rounded-full size-lg bg-forest-800 px-20 sm:px-30 py-20 sm:py-30 pt-2 sm:pt-7 pb-2 sm:pb-7 text-xl font-bold text-white shadow-lg transition disabled:opacity-50 mt-2 mb-2 sm:mb-10"
          >
            {rsvpLabel}
          </button>
        </div>
      )}
    </div>
  );
}