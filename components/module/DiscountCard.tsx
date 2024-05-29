import { Iproducts } from "@/types/interface";
import Image from "next/image";
import { FC, useState } from "react";

import { IoMdStar } from "react-icons/io";
import { BiCommentDetail } from "react-icons/bi";

import { GoShieldCheck } from "react-icons/go";
import { FaCaravan } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { PiWarningCircle } from "react-icons/pi";
import Comments from "./Comments";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../Redux/CreateReducer/ActionReducer";

const DiscountCard: FC<Iproducts> = ({
  category,
  comments,
  discount2,
  id,
  image,
  like,
  name,
  price,
  star,
  bestprice,
  discount,
  discountprice,
  image2,
  image4,
  image5,
  image6,
  image7,
}) => {
  switch (category) {
    case "laptop":
      "مشخصات ندارد";
      break;

    default:
      name;
      break;
  }
  /* @ts-ignore */
  const state = useSelector((state) => state.counter.cartItems);
  console.log(state);

  const [stateLength, setstateLenght] = useState<number>(0);

  const dispatch = useDispatch();

  const addHandeler = (id: number, name: string, image: any) => {
    dispatch(addItem({ id, name, image }));
  };

  return (
    <div className="mt-[9rem] border-[1px] shadow-lg shadow-gray-300 rounded-lg p-3 max-w-[1400px] mx-auto">
      <div className="flex xl:flex-row flex-col justify-between items-center">
        <div>
          <Image src={image} width={300} height={300} alt="/" />
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-3xl">{name}</h1>
          <p className="opacity-70 text-sm">
            Asus Zenbook S 13 OLED UX5304VA-NQ003 13.3 Inch Laptop
          </p>
          <div className="flex gap-4">
            <p className="flex items-center text-sm">
              <IoMdStar color="orange" size={22} />
              (28) + {star}
            </p>
            <div className="flex items-center gap-1 cursor-pointer hover:text-blue-500 duration-300 opacity-70  text-sm">
              <BiCommentDetail />
              <p> {comments}دیدگاه</p>
            </div>
          </div>

          <div className="grid xl:grid-cols-3 grid-cols-2 gap-3  items-center text-sm">
            <div className="flex flex-col border-2 p-1 w-[150px] rounded-md bg-gray-200">
              <label>جنس بدنه:</label>
              {category === "laptop"
                ? "تیتانیوم"
                : category === "apple" || "projector" || "supplies"
                ? "شیشه"
                : category === "whatch"
                ? "ضده آب"
                : null}
            </div>

            <div className="flex flex-col border-2 p-1 w-[150px] rounded-md bg-gray-200">
              <label>مقدار حافظه RAM:</label>
              {category === "laptop"
                ? "12"
                : category === "apple" || "projector" || "supplies"
                ? "ذکر نشده است"
                : category === "whatch"
                ? "ضده آب"
                : null}
            </div>

            <div className="flex flex-col border-2 p-1 w-[150px] rounded-md bg-gray-200">
              <label>باتری</label>
              {category === "laptop"
                ? "لیتیوم"
                : category === "apple" || "projector" || "supplies"
                ? "ذکر نشده است"
                : category === "whatch"
                ? "ضده آب"
                : null}
            </div>

            <div className="flex flex-col border-2 p-1 w-[150px] rounded-md bg-gray-200">
              <label>مقدار حافظه RAM:</label>
              {category === "laptop"
                ? "لیتیوم"
                : category === "apple" || "projector" || "supplies"
                ? "ذکر نشده است"
                : category === "whatch"
                ? "ضده آب"
                : null}
            </div>

            <div className="flex flex-col border-2 p-1 w-[150px] rounded-md bg-gray-200">
              <label>باتری</label>
              <p>لیتیوم 6000 میلی</p>
            </div>

            <div className="flex flex-col border-2 p-1 w-[150px] rounded-md bg-gray-200">
              <label>جنس بدنه:</label>
              {category === "laptop"
                ? "لیتیوم"
                : category === "apple" || "projector" || "supplies"
                ? "ذکر نشده است"
                : category === "whatch"
                ? "ضده آب"
                : null}
            </div>
          </div>
        </div>

        <div className="lg:flex flex-col items-center hidden">
          <div className="flex gap-3">
            <p className="text-[13px]">رنگ ها:</p>
            <div className="flex gap-3 hover:border-blue-500 cursor-pointer duration-300 items-center justify-center border-[1px] w-[110px] p-2 rounded-xl">
              <p className="bg-gray-400 w-[30px] h-[30px] rounded-[100%]"></p>
              <p className="text-[13px]">خاکستری</p>
            </div>
            <div className="flex gap-3 hover:border-blue-500 cursor-pointer duration-300 items-center justify-center border-[1px] w-[110px] p-2 rounded-xl">
              <p className="bg-black w-[30px] h-[30px] rounded-[100%]"></p>
              <p className="text-[13px]">مشکی</p>
            </div>
            <div className="flex gap-3 hover:border-blue-500 cursor-pointer duration-300 items-center justify-center border-[1px] w-[110px] p-2 rounded-xl">
              <p className="bg-blue-500 w-[30px] h-[30px] rounded-[100%]"></p>
              <p className="text-[13px]">آبی</p>
            </div>
          </div>

          <div className="border-[1px] w-[300px] h-[340px] rounded-lg border-gray-300 mt-5 p-3">
            <div className="flex gap-2 mt-6 items-center border-b-[1px] w-full p-1">
              <GoShieldCheck size={20} />
              <p className="text-sm">گارانتی 18 ماهه</p>
            </div>

            <div className="flex gap-2 mt-6 items-center border-b-[1px] w-full p-1">
              <FaCaravan size={20} />
              <p className="text-sm">ارسال 2 روز کاری</p>
            </div>

            <div className="flex gap-2 mt-6 text-green-400 items-center border-b-[1px] w-full p-1">
              <AiOutlineLike size={20} />
              <p className="text-sm">میزان رضایت از این کالا 95%</p>
            </div>

            <div className="flex flex-col gap-2 mt-6 justify-end items-center border-b-[1px] w-full p-1">
              <p>{price}تومان</p>
              <p className="text-[12px] text-red-600">
                تنها 2 عدد در انبار باقی مانده است
              </p>
            </div>
            <div className="flex justify-center mt-7">
              <button
                onClick={() => addHandeler(id, name, image)}
                className="bg-blue-600 w-[260px] p-2 rounded-lg text-white"
              >
                افزودن به سبد خرید
              </button>
            </div>
          </div>
          <span className="text-[13 px] mt-3 gap-1 text-red-600 flex items-center w-[300px]">
            <PiWarningCircle size={20} />
            هزینه پست برای سبد خرید بالای 400 هزار تومان رایگان میباشد.
          </span>
        </div>
      </div>

      <div>
        <Comments category={category} star={star} />
      </div>
    </div>
  );
};

export default DiscountCard;
