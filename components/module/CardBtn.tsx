import { FC, useEffect, useState } from "react";

//icons
import { IoSearchOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { CiShoppingBasket } from "react-icons/ci";
import Shoping from "./Shoping";
import { useSelector } from "react-redux";
import SearchBar from "./SearchBar";

const CardBtn: FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [cartLength, setCartLength] = useState<number>(0);
  /* @ts-ignore */
  const state = useSelector((items) => items.counter.cartItems);

  const [searchBar, setSearchBar] = useState<boolean>(false);

  useEffect(() => {
    setCartLength(state.length);
  }, [state]);

  return (
    <div className="flex gap-3 ml-6">
      <div className="relative">
        <button className="bg-[#3B82F6] p-2 rounded-lg shadow-lg shadow-gray-400">
          <IoSearchOutline
            onClick={() => setSearchBar((prev) => !prev)}
            size={22}
            color="white"
          />
          {searchBar ? (
            <div
              className={`absolute  lg:right-[-16rem] right-[-17rem] transition-all duration-300 ease-in top-[3rem] z-30`}
            >
              <SearchBar />
            </div>
          ) : (
            <div
              className={`absolute  lg:right-[-16rem] right-[-17rem] transition-all duration-300 ease-in top-[-10rem] z-30`}
            >
              <SearchBar />
            </div>
          )}
        </button>
      </div>

      <div className="relative">
        <button className="bg-[#3B82F6] p-2 rounded-lg shadow-lg shadow-gray-400">
          <CiShoppingBasket
            onClick={() => setOpen(true)}
            size={24}
            color="white"
          />
        </button>
        <div className="absolute top-[-10px] bg-white p-[1px] rounded-full flex flex-col items-center justify-center text-blue-500 font-bold w-[20px] h-[20px] text-[20px]">
          {cartLength <= 0 ? <span>0</span> : <span>{cartLength}</span>}

          <div
            className={`absolute transition-all duration-300 ease-in  ${
              open ? "top-[3rem]" : "top-[-2000%]"
            }`}
          >
            <Shoping open={open} setOpen={setOpen} />
          </div>
        </div>
      </div>

      <button className="bg-[#3B82F6] lg:w-[130px] w-[40px] justify-center text-[13px] flex shadow-lg shadow-gray-400 items-center p-2 gap-2 rounded-lg text-white">
        <FaRegUser size={17} color="white" />
        <p className="lg:block hidden">حساب کاربری</p>
      </button>
    </div>
  );
};

export default CardBtn;
