import { FC } from "react";

import { Localcomments } from "@/data/Localdata";
import { Icooments } from "@/types/interface";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { MdOutlineStar } from "react-icons/md";

const Comments: FC<Icooments> = ({ category, star }) => {
  const fildtered = Localcomments.filter((item) => item.category === category);

  return (
    <div className="flex flex-col xl:flex-row items-center justify-between mt-8">
      <div className="lg:w-[500px]">
        <div className="flex text-gray-500 justify-center w-[200px] mb-4">
          <p className="border-b-[1px] border-green-400">دیدگاه ها</p>
        </div>

        <div className="flex items-center text-gray-500 justify-center w-[200px] mb-4">
          <p>{star}</p>
          <MdOutlineStar color="orange" />
        </div>
        <form className="flex flex-col items-center">
          <p className="text-right w-[300px] text-blue-500">
            شماهم دیدگاه خود را بنویسید
          </p>
          <input
            type="text"
            placeholder="عنوان دیدگاه"
            className="border-[1px] border-blue-400 outline-none w-[300px] mt-3 p-1 rounded-lg"
          />
          <div className="flex items-center gap-4 mt-5 mb-4">
            <button className="flex w-[140px] border-blue-400 text-green-500 justify-center rounded-lg hover:bg-green-600 hover:text-white duration-300 items-center border-[1px] p-2">
              <AiOutlineLike size={20} />
              پیشنهاد میکنم
            </button>
            <button className="flex w-[140px] border-red-600 text-red-500 hover:bg-red-400 hover:text-white duration-300 justify-center rounded-lg items-center border-[1px] p-2">
              <AiOutlineDislike size={20} />
              پیشنهاد نمیکنم
            </button>
          </div>
          <div className="flex justify-start border-[1px] rounded-lg overflow-hidden border-blue-400 border-dashed">
            <textarea
              placeholder="متن دیدگاه"
              style={{ resize: "none" }}
              className="w-[300px] h-[200px] outline-none"
            />
          </div>
          <div>
            <button className="bg-blue-500 w-[300px] mt-3 p-2 rounded-lg text-white">
              ارسال
            </button>
          </div>
        </form>
      </div>

      <div>
        {fildtered.map((item) => (
          <div className="border-b-[1px] lg:w-[1000px] p-3">
            <p className="opacity-60">{item.title}</p>
            <div className="flex items-center mt-4 gap-4">
              <p className="text-[12px] opacity-60">11 بهمن 1403</p>
              <p className="opacity-60">{item.name}</p>
              <span className="bg-green-400 text-white rounded-full p-[3px] text-sm">
                خریدار
              </span>
            </div>

            <div className="mt-5 text-sm flex justify-between items-center">
              {item.like ? (
                <span className="text-green-500 flex items-center gap-2">
                  <AiOutlineLike />
                  خرید این محصول را پیشنهاد میکنم
                </span>
              ) : (
                <span className="text-red-500 flex items-center gap-2">
                  <AiOutlineDislike />
                  خرید این محصول را پیشنهاد نمیکنم
                </span>
              )}
              <div className="lg:flex items-center gap-5 hidden">
                <p className="opacity-60">آیا این دیدگاه برایتان مفید بود؟</p>
                <button className="border-[1px] hover:bg-green-500 hover:text-white duration-300 p-2 border-gray-300 text-green-500 rounded-md">
                  <AiOutlineLike size={20} />
                </button>
                <button className="border-[1px] p-2 border-gray-300 text-red-500 hover:bg-red-500 hover:text-white duration-300 rounded-md">
                  <AiOutlineDislike size={20} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* <div>left</div> */}
    </div>
  );
};

export default Comments;
