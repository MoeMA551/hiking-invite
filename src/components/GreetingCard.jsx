import DefaultCard from "./DefaultCard";
import tripData from "../data/tripData";

export default function GreetingCard({ onPrev, onNext, onRsvp, isFirst, isLast }) {
  const { greeting } = tripData;

  return (
    <DefaultCard onPrev={onPrev} onNext={onNext} onRsvp={onRsvp} isFirst={isFirst} isLast={isLast}>
      <div className="relative h-full w-full flex flex-col items-center justify-center gap-10 px-6 pb-16 text-center">
        <p className="text-3xl sm:text-4xl font-bold text-cream-50 drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">
          {greeting.line1}
        </p>
        <p className="text-xl font-medium text-cream-50 drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">
          {greeting.line2}
        </p>
        <p className="mt-2 text-2xl sm:text-3xl font-bold text-cream-50 drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">
          {greeting.line3}
        </p>
      </div>
    </DefaultCard>
  );
}