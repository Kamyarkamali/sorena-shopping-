import { articles } from "@/data/Localdata";
import Image from "next/image";
import { FC } from "react";

const Articles: FC = () => {
  return (
    <div className="max-w-[1400px] mx-auto mt-[3rem]">
      <p className="mb-4 text-xl border-b-[1px] border-gray-600 inline-block">
        خواندنی ها
      </p>
      <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1">
        {articles.map((items) => (
          <div
            key={items.id}
            className="border-[1px] border-gray-300 rounded-lg mr-3 mt-4 xl:mt-0"
          >
            <Image
              className="xl:h-[200px] xl:w-[400px] lg:w-[600px] lg:h-[300px] md:h-[200px] sm:h-[300px] w-[800px] rounded-lg"
              src={items.image}
              alt={items.name}
              width={340}
              height={340}
            />
            <div className="p-5">
              <h2 className="text-[18px]">{items.desc}</h2>
              <div className="flex items-center justify-between">
                <p className="opacity-50 text-sm">25 فررودین 1403</p>
                <button className="bg-blue-500 w-[100px] p-1 rounded-lg text-white">
                  خواندن
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;
