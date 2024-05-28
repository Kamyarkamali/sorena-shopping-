import { topMenuTitle } from "@/data/Localdata";
import React, { FC } from "react";

const Cardhamburger: FC = () => {
  return (
    <div className="mt-[2rem]">
      <ul className="flex flex-col gap-5 mr-3 text-gray-600">
        {topMenuTitle.map((item) => (
          <div
            key={item.id}
            className="flex items-center p-3 rounded-lg duration-300 hover:text-gray-900 hover:bg-gray-200"
          >
            <li>{item.title}</li>
            <li>{item.icon2}</li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Cardhamburger;
