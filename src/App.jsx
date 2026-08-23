import AnimatedBackground from "./components/AnimatedBackground";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import GreetingCard from "./components/GreetingCard";
import DestinationCard from "./components/DestinationCard";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import RSVPCard from "./components/RSVPCard";
import ParticipantsView from "./components/ParticipantsView";
import { useRef, useState } from "react";
import ItineraryCard from "./components/ItenaryCard";


function App() {
  const swiperRef = useRef(null);
  const TOTAL_SLIDES = 4;
  const RSVP_INDEX = TOTAL_SLIDES - 1;
  const goRsvp = () => swiperRef.current?.slideTo(RSVP_INDEX);

  // Once someone submits the RSVP form, we stop showing the swipeable
  // cards entirely and just show the participants list instead.
  const [submitted, setSubmitted] = useState(false);
  const [emailFailed, setEmailFailed] = useState(false);
  const [participants, setParticipants] = useState([]);

  const handleRsvpDone = (updatedList, emailOk) => {
    setParticipants(updatedList);
    setEmailFailed(!emailOk);
    setSubmitted(true);
  };

  return (
    <div className="relative h-dvh w-full overflow-hidden bg-forest-900">
      <AnimatedBackground />
      <div className="relative z-10 flex h-full w-full items-center justify-center p-4">
        <div className="aspect-square w-full max-h-[85vh] sm:h-[85vh] sm:w-auto sm:max-w-[92vw]">
          {submitted ? (
            <ParticipantsView participants={participants} emailFailed={emailFailed} />
          ) : (
            <Swiper className="aspect-square h-full w-full"
              pagination={{
                dynamicBullets: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              spaceBetween={100}
              slidesPerView={1}
              onSwiper={(s) => (swiperRef.current = s)}
              speed={500}
            >
              <SwiperSlide>
                <GreetingCard onRsvp={goRsvp}/>
              </SwiperSlide>
              <SwiperSlide>
                <DestinationCard onRsvp={goRsvp}/>
              </SwiperSlide>
              <SwiperSlide>
                <ItineraryCard onRsvp={goRsvp}/>
              </SwiperSlide>
              <SwiperSlide>
                <RSVPCard onDone={handleRsvpDone} />
              </SwiperSlide>
            </Swiper>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
