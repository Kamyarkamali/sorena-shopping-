import { CartItem, Iopen } from "@/types/interface";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { Rootstate } from "../Redux/stores/store";

import {
  setCartItems,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
} from "../Redux/CreateReducer/ActionReducer";
import { sp } from "@/replaceNumber";

const Shoping: FC<Iopen> = ({ open, setOpen }) => {
  const [localCartItems, setLocalCartItems] = useState<CartItem[]>([]);

  const [totla, settotal] = useState<number>(0);

  const state = useSelector((state: Rootstate) => state.counter.cartItems);
  const dispatch = useDispatch();

  const state2 = useSelector((item: Rootstate) => item.counter.totalPrice);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCart = localStorage.getItem("cartItems");
      if (storedCart) {
        const parsedCart = JSON.parse(storedCart);
        setLocalCartItems(parsedCart);
        dispatch(setCartItems(parsedCart));
      }
    }
  }, [dispatch]);

  useEffect(() => {
    setLocalCartItems(state);
    settotal(state2);
  }, [state, state2]);

  const handleIncreaseQuantity = (id: number) => {
    dispatch(increaseQuantity({ id }));
  };

  const handleDecreaseQuantity = (id: number) => {
    dispatch(decreaseQuantity({ id }));
  };

  const removeItems = (id: number) => {
    dispatch(removeItem({ id }));
  };

  return (
    <div className="bg-white overflow-y-scroll border-[1px] rounded-lg shadow-lg border-blue-300 text-sm w-[300px] h-[300px]">
      <IoMdClose
        onClick={() => setOpen(false)}
        size={22}
        className="cursor-pointer"
      />
      {localCartItems.length <= 0 ? (
        <div className="flex flex-col items-center justify-center h-[200px]">
          <span className="text-xl text-red-700 border-b-2 border-red-800">
            سبد خرید خالی است
          </span>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-between">
          {localCartItems?.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center border-b-[1px] p-2 w-full"
            >
              <Image src={item.image} alt="/" width={70} height={70} />
              <p>{item.name}</p>
              <div className="flex items-center gap-4">
                {item.quantity <= 1 ? (
                  <button
                    onClick={() => removeItems(item.id)}
                    className="w-[100px] p-[5px] rounded-lg shadow-lg shadow-gray-400 text-white text-sm bg-blue-500"
                  >
                    حذف کردن
                  </button>
                ) : (
                  <button
                    className="w-[100px] p-[1px] rounded-lg shadow-lg shadow-gray-400 text-white text-xl bg-blue-500"
                    onClick={() => handleDecreaseQuantity(item.id)}
                  >
                    -
                  </button>
                )}

                <span className="text-xl font-bold">{item.quantity}</span>
                <button
                  className="w-[100px] p-[1px] rounded-lg shadow-lg shadow-gray-400 text-white text-xl bg-blue-500"
                  onClick={() => handleIncreaseQuantity(item.id)}
                >
                  +
                </button>
              </div>
            </div>
          ))}
          <div className="flex flex-col border-[1px] p-1 text-orange-600 rounded-lg border-red-600 items-center">
            <p>مجموع قیمت ها</p>
            <span>{sp(totla ? totla : 0)}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shoping;
