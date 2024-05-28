import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import Image from "next/image";

function Slider() {
  return (
    <div className="mt-[6rem] max-w-[3000px] mx-auto">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <Image
            className="rounded-lg 2xl:w-[3000px]"
            src={"/slider/1.webp"}
            alt="/"
            width={1440}
            height={1000}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="rounded-lg 2xl:w-[3000px]"
            src={"/slider/2.webp"}
            alt="/"
            width={1440}
            height={1000}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="rounded-lg 2xl:w-[3000px]"
            src={"/slider/3.webp"}
            alt="/"
            width={1440}
            height={1000}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="rounded-lg 2xl:w-[3000px]"
            src={"/slider/4.webp"}
            alt="/"
            width={1440}
            height={1000}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="rounded-lg 2xl:w-[3000px]"
            src={"/slider/5.webp"}
            alt="/"
            width={1440}
            height={1000}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider;
