import AnimatedBackground from "./components/AnimatedBackground";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import GreetingCard from "./components/GreetingCard";

function App() {
  return (
    <div className="relative h-dvh w-full overflow-hidden bg-forest-900">
      <AnimatedBackground />
      <div className="relative z-10 flex h-full w-full items-center justify-center p-4">
        <div className="aspect-square w-full max-h-[85vh] sm:h-[85vh] sm:w-auto sm:max-w-[92vw]">
          <Swiper className="h-full w-full">
            <SwiperSlide>
              <GreetingCard />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default App