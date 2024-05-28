import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";
import { products } from "@/data/Localdata";
import Image from "next/image";

export default function App() {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {products.map((item) => (
          <SwiperSlide>
            <Image src={item.image2} alt="/" width={200} height={200} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
