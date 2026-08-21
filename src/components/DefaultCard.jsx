export default function DefaultCard({ children, onPrev, onNext, onRsvp, isFirst, isLast }) {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-[2rem] border border-cream-50/20 bg-forest-900/45 shadow-2xl backdrop-blur-2xl">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/15 to-transparent" />

      {children}

      <div className="absolute inset-x-0 bottom-0 z-20 flex items-center justify-between px-4 pb-4">
        <button
          onClick={onPrev}
          disabled={isFirst}
          className="rounded-full bg-white/20 px-3 py-2 text-sm font-semibold text-white backdrop-blur-sm transition disabled:opacity-30"
        >
          ← Prev
        </button>

        <button
          onClick={onRsvp}
          disabled={isLast}
          className="rounded-full bg-bark-300 px-4 py-2 text-sm font-bold text-forest-900 shadow-lg transition disabled:opacity-50"
        >
          Get RSVP
        </button>

        <button
          onClick={onNext}
          disabled={isLast}
          className="rounded-full bg-white/20 px-3 py-2 text-sm font-semibold text-white backdrop-blur-sm transition disabled:opacity-30"
        >
          Next →
        </button>
      </div>
    </div>
  );
}