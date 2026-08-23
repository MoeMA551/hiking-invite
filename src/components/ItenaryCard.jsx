import DefaultCard from "./DefaultCard";
import tripData from "../data/tripData";

export default function ItineraryCard({ onRsvp }) {
  const { itinerary } = tripData;

  return (
    <DefaultCard onRsvp={onRsvp}>
      <div className="flex h-full w-full flex-col items-center overflow-y-auto text-center">
        <h2 className="text-xl font-bold text-cream-50 drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)] sm:text-2xl">
          Itinerary
        </h2>

       <div className="mt-1 sm:mt-6 flex w-xs sm:w-md flex-col gap-2 sm:gap-3 px-5">
            {itinerary.map((step, i) => (
                <div
                key={step}
                className="flex shrink-0 items-center gap-3 rounded-2xl bg-white/15 px-4 py-3 sm:py-4 text-left"
                >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-bark-300 text-xs font-bold text-forest-900">
                    {i + 1}
                </span>
                <span className="text-xs sm:text-md font-medium text-cream-50">{step}</span>
                </div>
            ))}
            </div>
      </div>
    </DefaultCard>
  );
}