import { Itopmenu } from "@/types/interface";
import { FC } from "react";

const CardtopMenu: FC<Itopmenu> = ({ id, paths, title, icon2, icon }) => {
  return (
    <div className="flex ml-8 items-center">
      <div className="flex items-center">
        <div className="flex items-center hover:bg-slate-200 duration-300 p-2 rounded-lg">
          <p>{icon}</p>
          <p className="text-[17px] hover:text-blue-400 duration-300 cursor-pointer text-gray-600">
            {title}
          </p>
          <p className="hover:rotate-180 duration-300 cursor-pointer text-gray-500">
            {icon2}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardtopMenu;
