import { shop } from "@/data/Localdata";
import { FC } from "react";

const Faiveritse: FC = () => {
  return (
    <div className="max-w-[1200px] mx-auto mt-[2rem]">
      <div className="flex justify-center">
        <img
          className="w-[50px] h-[50px] rounded-full object-cover"
          src="/images/gif.gif"
          alt=""
        />
      </div>

      <div className="mt-[2rem]">
        <h3 className="flex text-3xl justify-center">محبوبترین دسته ها</h3>
      </div>

      <div className="flex justify-center">
        <div className="grid lg:grid-cols-7 lg:gap-10 gap-5 md:grid-cols-6 sm:grid-cols-4 grid-cols-3 mt-[2rem]">
          {shop.map((item) => (
            <div
              key={item.id}
              className="flex flex-col text-gray-600 border-[1px]  hover:bg-blue-500 cursor-pointer duration-300 hover:text-white border-gray-400 h-[100px] w-[100px] justify-center gap-2 font-bold rounded-[100%] items-center"
            >
              <p>{item.icon}</p>
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faiveritse;
