import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import Image from "next/image";

import { products } from "@/data/Localdata";

//icons
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { TiStar } from "react-icons/ti";
import Link from "next/link";
import { shortName } from "@/helpers/heleprFunc";

function BestPrice() {
  const filteredData = products.filter((item) => item.bestprice === true);

  return (
    <div className="mt-[2rem] max-w-[1380px] mx-auto">
      <div className="flex justify-between items-center">
        <p className="text-[24px] text-gray-600 mr-5 lg:mr-0">پرفروش ترین ها</p>
        <div className="flex items-center text-gray-600 ml-5 lg:ml-0">
          <a href="#">مشاهده همه</a>
          <MdOutlineKeyboardArrowLeft />
        </div>
      </div>
      <Swiper
        spaceBetween={50}
        slidesPerView={5}
        loop={true}
        breakpoints={{
          230: {
            slidesPerView: 1,
          },
          500: {
            slidesPerView: 2,
          },
          750: {
            slidesPerView: 3,
          },
          1023: {
            slidesPerView: 4,
          },
          1400: {
            slidesPerView: 5,
          },
        }}
      >
        <div>
          {filteredData?.map((items) => (
            <SwiperSlide className="border-[1px] relative rounded-lg shadow-sm shadow-gray-300 p-5 mt-7 border-gray-200">
              <div className="flex flex-col items-center justify-center  2xl:flex-row h-[400px]">
                <Link href={`/Discoutnt/${items.id}`}>
                  <Image
                    className="cursor-grab"
                    src={items.image}
                    alt={items.name}
                    width={200}
                    height={200}
                  />
                </Link>

                <div className="flex items-center justify-between gap-3">
                  <p>{shortName(items.name)}</p>
                  <p className="flex text-sm opacity-50 items-center">
                    {items.star}
                    <TiStar color="orange" />
                  </p>
                </div>

                <div>
                  <p className="text-[11px] mt-3 opacity-85 font-bold">
                    ASUS a342 plus for work
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <del className="opacity-65">{items.discountprice}</del>
                  <p>{items.price}تومان</p>
                </div>

                <div className="flex justify-center items-center mt-4">
                  <button className="bg-blue-500 w-[200px] p-2 rounded-lg text-white">
                    خرید محصول
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
}

export default BestPrice;
