import DefaultCard from "./DefaultCard";

// Edit this list to match your trip's actual costs.
const BUDGET_ITEMS = [
  { label: "Tanzawa-Oyama Free Pass", amount: 1560 },
  { label: "JFA Yura no Sato Onsen", amount: 1300 },
  { label: "Transportation to Onsen", amount: 600 },
  { label: "Food (lunch & dinner, estimated)", amount: 2000 },
];

const CURRENCY = "¥";

export default function BudgetCard({ onRsvp }) {
  const total = BUDGET_ITEMS.reduce((sum, item) => sum + item.amount, 0);

  return (
    <DefaultCard onRsvp={onRsvp}>
      <div className="flex h-full w-full flex-col items-center overflow-y-auto px-6 pb-32 text-center">
        <h2 className="text-2xl font-bold text-cream-50 drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)] sm:text-3xl">
          Budget
        </h2>

        <div className="mt-3 flex w-full flex-col gap-2">
          {BUDGET_ITEMS.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-between gap-3 rounded-xl bg-white/15 px-4 text-left"
            >
              <span className="text-md font-medium text-cream-50 sm:text-base">{item.label}</span>
              <span className="text-md font-semibold text-cream-50 sm:text-base">
                {CURRENCY}{item.amount.toLocaleString()}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-2 flex w-full items-center justify-between rounded-xl bg-forest-800/60 px-4 py-3">
          <span className="text-xs font-bold uppercase tracking-wide text-cream-50 sm:text-base">Total</span>
          <span className="text-md font-bold text-cream-50 sm:text-xl">
            Around {CURRENCY} 5,000
          </span>
        </div>
      </div>
    </DefaultCard>
  );
}