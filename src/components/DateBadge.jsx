// Splits an ISO date string ("YYYY-MM-DD") into weekday / day / month / year
// and renders them as four labeled segments — a "beautiful UI" alternative
// to just printing the date as one line of text.
export default function DateBadge({ isoDate }) {
  // The "T00:00:00" keeps this in local time — without it, some browsers
  // parse "YYYY-MM-DD" as UTC midnight, which can roll back a day depending
  // on the visitor's timezone.
  const date = new Date(`${isoDate}T00:00:00`);

  const segments = [
    { label: "Weekday", value: date.toLocaleDateString("en-US", { weekday: "short" }) },
    { label: "Date", value: date.toLocaleDateString("en-US", { day: "2-digit" }) },
    { label: "Month", value: date.toLocaleDateString("en-US", { month: "short" }) },
    { label: "Year", value: date.toLocaleDateString("en-US", { year: "numeric" }) },
  ];

  return (
    <div className="mt-2 flex divide-x divide-cream-50/20 overflow-hidden rounded-2xl border border-cream-50/50 bg-forest-900/40 backdrop-blur-sm">
      {segments.map((seg) => (
        <div key={seg.label} className="flex flex-1 flex-col items-center gap-1 px-1 py-6 sm:px-3 sm:py-5">
          <span className="text-sm sm:text-lg font-semibold uppercase tracking-wide text-cream-100/60">
            {seg.label}
          </span>
          <span className="text-xl sm:text-2xl font-bold text-cream-50">{seg.value}</span>
        </div>
      ))}
    </div>
  );
}