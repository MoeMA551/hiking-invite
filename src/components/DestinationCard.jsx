import DefaultCard from "./DefaultCard";
import tripData from "../data/tripData";


export default function DestinationCard({onRsvp}) {
  const { destination } = tripData;
  const mapEmbedUrl = destination.mapEmbedSrc || "";
  return (
    <DefaultCard onRsvp={onRsvp}>
      <div className="relative h-full w-full flex flex-col gap-5 px-6 pb-10 items-center mt-2 sm:mt-7">
        <p className="text-3xl sm:text-4xl font-bold text-cream-50 drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)] pt-5 align-center">
            Where To Go?
        </p>
        <p className="text-xl sm:text-2xl font-bold text-cream-50 drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]align-center">
          {destination.name}
        </p>
        <p className="text-xl sm:text-2xl font-bold text-cream-50 drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]align-center">
          {destination.location}
        </p>
        {mapEmbedUrl && (
          <div className="mt-2 h-46 sm:h-84 w-80dvh sm:w-xl  shrink-0 overflow-hidden rounded-2xl border border-cream-50/20">
            <iframe
              src={mapEmbedUrl}
              title={`Map of ${destination.name}`}
              className="h-full w-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        )}
      </div>
    </DefaultCard>
  );
}