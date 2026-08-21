import AnimatedBackground from "./components/AnimatedBackground";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import GreetingCard from "./components/GreetingCard";
import DestinationCard from "./components/DestinationCard";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import RSVPCard from "./components/RSVPCard";
import { useRef } from "react";


function App() {
  const swiperRef = useRef(null);
  const TOTAL_SLIDES = 3; // however many <SwiperSlide> you actually have
  const RSVP_INDEX = TOTAL_SLIDES - 1; // always "the last one", stays correct if you add/remove slides
  const goRsvp = () => swiperRef.current?.slideTo(RSVP_INDEX);

  return (
    <div className="relative h-dvh w-full overflow-hidden bg-forest-900">
      <AnimatedBackground />
      <div className="relative z-10 flex h-full w-full items-center justify-center p-4">
        <div className="aspect-square w-full max-h-[85vh] sm:h-[85vh] sm:w-auto sm:max-w-[92vw]">
          <Swiper className="aspect-square h-full w-full"
          pagination={{
            dynamicBullets: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          spaceBetween={100}
          slidesPerView={1}
          onSwiper={(s) => (swiperRef.current = s)}
          onSlideChange={(s) => setActiveIndex(s.activeIndex)}
          speed={500}
        >
            <SwiperSlide>
              <GreetingCard onRsvp={goRsvp}/>
            </SwiperSlide>
            <SwiperSlide>
              <DestinationCard onRsvp={goRsvp}/>
            </SwiperSlide>
            <SwiperSlide>
              <RSVPCard />
            </SwiperSlide>
          </Swiper>
          
        </div>
      </div>
    </div>
  )
}

export default App