import DefaultCard from "./DefaultCard";
import tripData from "../data/tripData";

export default function DestinationCard({ onPrev, onNext, onRsvp, isFirst, isLast }) {
  const { destination } = tripData;

  return (
    <DefaultCard onPrev={onPrev} onNext={onNext} onRsvp={onRsvp} isFirst={isFirst} isLast={isLast}>
      <div className="relative h-full w-full flex flex-col gap-5 px-6 pb-16">
        <p className="text-3xl sm:text-4xl font-bold text-cream-50 drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)] pt-5 align-left">
            Where To Go?
        </p>
        <p className="text-2xl sm:text-3xl font-bold text-cream-50 drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]align-left">
          {destination.name}
        </p>
        <p className="text-xl sm:text-2xl font-bold text-cream-50 drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]align-left">
          {destination.location}
        </p>
      </div>
    </DefaultCard>
  );
}