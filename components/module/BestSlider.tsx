import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import star from "../../public/images/star.png";

// Import Swiper styles
import "swiper/css";
import Image from "next/image";

import { products } from "@/data/Localdata";

import { Autoplay } from "swiper/modules";
import { shortName } from "@/helpers/heleprFunc";

function BestSlider() {
  const filteredData = products.filter((item) => item.bestprice === true);

  return (
    <>
      <div className="flex justify-center mt-[4rem] relative">
        <h1 className="text-5xl text-blue-600 mb-9">آخرین پیشنهاد ها</h1>
        <div className="absolute top-[-1rem] xl:left-[33rem] lg:left-[23rem] lg:block hidden">
          <Image src={star} alt="/" width={40} height={10} />
        </div>
      </div>

      <div className="flex gap-3 items-center max-w-[1400px] mx-auto">
        <div className="bg-blue-600 hidden h-[340px] w-[1100px] rounded-lg lg:flex flex-col items-center justify-center">
          <h3 className="text-white text-2xl">شگفت انگیز های مختلف</h3>
          <Image
            src={"/images/hansslider.webp"}
            alt="/"
            width={1000}
            height={1000}
          />
        </div>
        <Swiper loop={true} autoplay={true} modules={[Autoplay]}>
          {filteredData.map((item) => (
            <SwiperSlide>
              <div
                key={item.id}
                className="flex p-5 lg:flex-row cursor-pointer lg:border-[1px] flex-col rounded-lg border-gray-400 justify-center gap-8 items-center"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={300}
                  height={300}
                />
                <div className="flex flex-col items-center gap-2">
                  <p className="text-3xl">{shortName(item.name)}</p>
                  <p className="opacity-85">ASUS a342 plus for work</p>
                  <div className="flex items-center justify-center mt-[3rem]">
                    <button className="bg-blue-600 w-[220px] rounded-lg shadow-lg shadow-gray-400 text-[20px] text-white p-3">
                      خرید محصول
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default BestSlider;
