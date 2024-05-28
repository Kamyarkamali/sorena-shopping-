import { CartItem, Iopen } from "@/types/interface";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import {
  setCartItems,
  increaseQuantity,
  decreaseQuantity,
} from "../Redux/CreateReducer/ActionReducer";

const Shoping: FC<Iopen> = ({ open, setOpen }) => {
  const [localCartItems, setLocalCartItems] = useState<CartItem[]>([]);
  const state = useSelector((state: RootState) => state.counter.cartItems);
  const dispatch = useDispatch();

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
  }, [state]);

  const handleIncreaseQuantity = (id: number) => {
    dispatch(increaseQuantity({ id }));
  };

  const handleDecreaseQuantity = (id: number) => {
    dispatch(decreaseQuantity({ id }));
  };

  return (
    <div className="bg-white overflow-y-scroll border-[1px] rounded-lg shadow-lg border-blue-300 text-sm w-[300px] h-[300px]">
      <IoMdClose
        onClick={() => setOpen(false)}
        size={22}
        className="cursor-pointer"
      />
      <div className="flex flex-col items-center justify-between">
        {localCartItems?.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center border-b-[1px] p-2 w-full"
          >
            <Image src={item.image} alt="/" width={70} height={70} />
            <p>{item.name}</p>
            <div className="flex items-center gap-4">
              <button
                className="w-[100px] p-[1px] rounded-lg shadow-lg shadow-gray-400 text-white text-xl bg-blue-500"
                onClick={() => handleDecreaseQuantity(item.id)}
              >
                -
              </button>
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
      </div>
    </div>
  );
};

export default Shoping;
