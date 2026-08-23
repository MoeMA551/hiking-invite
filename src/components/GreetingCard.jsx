import DefaultCard from "./DefaultCard";
import tripData from "../data/tripData";
import DateBadge from "./DateBadge"; // add this import

export default function GreetingCard({onRsvp}) {
  const { greeting } = tripData;

  return (
    <DefaultCard onRsvp={onRsvp}>
      <div className="relative h-full w-full flex flex-col items-center justify-center gap-3 px-6 pb-16 text-center">
        <p className="text-2xl sm:text-4xl font-bold text-cream-50 drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">
          {greeting.line1}
        </p>
        <p className="text-xl sm:text-2xl font-medium text-cream-50 drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">
          {greeting.line2}
        </p>
        <p className="mt-2 mx-5 text-2xl sm:text-4xl font-bold text-cream-50 drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">
          {greeting.line3}
        </p>
        <p className="mt-1 text-md font-medium text-cream-50 drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">
          <DateBadge isoDate={tripData.tripDate} />
        </p>
        
      </div>
    </DefaultCard>
  );
}