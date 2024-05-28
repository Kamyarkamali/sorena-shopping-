import { CartItem, Iopen } from "@/types/interface";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useSelector } from "react-redux";

const Shoping: FC<Iopen> = ({ open, setOpen }) => {
  const [local, setLocal] = useState<CartItem[]>([]);

  const state = useSelector((state) => state.counter.cartItems);

  console.log(state);

  return (
    <div className="bg-white overflow-y-scroll border-[1px] rounded-lg shadow-lg border-blue-300 text-sm w-[300px] h-[300px]">
      <IoMdClose
        onClick={() => setOpen(false)}
        size={22}
        className="cursor-pointer"
      />
      <div className="flex flex-col items-center justify-between">
        {state.map((item) => (
          <div className="flex flex-col items-center border-b-[1px] p-2 w-full">
            <Image src={item.image} alt="/" width={70} height={70} />
            <p>{item.name}</p>
            <div className="flex items-center gap-4">
              <button className="w-[100px] p-[1px] rounded-lg shadow-lg shadow-gray-400 text-white text-xl bg-blue-500">
                -
              </button>
              <span className="text-xl font-bold">{item.quantity}</span>
              <button className="w-[100px] p-[1px] rounded-lg shadow-lg shadow-gray-400 text-white text-xl bg-blue-500">
                +
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shoping;
