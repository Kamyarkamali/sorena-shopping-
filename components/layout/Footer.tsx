import Image from "next/image";
import { FC } from "react";

//icons
import { TiArrowUp } from "react-icons/ti";
import { IoLocationOutline } from "react-icons/io5";
import { MdAlternateEmail } from "react-icons/md";
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";

//image
import image1 from "../../public/images/footer1.png";
import image2 from "../../public/images/footer2.png";

const Footer: FC = () => {
  const tomMenu = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="max-w-[1360px] mx-auto mt-[3rem] border-t-[1px] p-3">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <Image width={100} height={100} src={"/images/logo.png"} alt="/" />
          <p className="opacity-75">021-44444444</p>
        </div>
        <div>
          <button
            onClick={tomMenu}
            className="border-[1px] flex items-center justify-center gap-1 hover:opacity-55 duration-300 w-[120px] p-1 rounded-lg border-gray-400"
          >
            برو به بالا
            <TiArrowUp />
          </button>
        </div>
      </div>

      <div className="flex justify-between max-w-[1300px]">
        <div>
          <h2 className="text-xl text-blue-500">دسترسی سریع</h2>
          <ul className="opacity-75 text-sm flex flex-col gap-2">
            <li>تعرفه ها</li>
            <li>سوالات متداول</li>
            <li>تماس با ما</li>
            <li>درباره ما</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl text-blue-500">ارتباط مستقیم</h2>
          <ul className="opacity-75 text-sm flex flex-col gap-2">
            <li className="flex items-center gap-1">
              <IoLocationOutline />
              تهران خیابان دماواند
            </li>

            <li className="flex items-center gap-1">
              <MdAlternateEmail />
              kamyarkamali021@gmail.com
            </li>
            <li className="flex items-center gap-1">
              <HiMiniDevicePhoneMobile />
              09190058102
            </li>
          </ul>
        </div>
        <div className="lg:flex flex-col gap-3 hidden">
          <h2 className="text-xl text-blue-500">مارا دنبال کنید</h2>
          <p className="opacity-70 mb-4 text-sm">
            برای دریافت آخرین اخبار و آفرها ایمیل خود را وارد کنید تا در خبرنامه
            عضو شوید
          </p>
          <div className="flex items-center gap-3">
            <input
              className="w-[200px] outline-none border-[1px] border-blue-400 p-1 rounded-lg"
              type="text"
              placeholder="لطفا ایممیل خود را وارد کنید"
            />
            <button className="bg-blue-500 w-[120px] p-1 rounded-lg text-white">
              ارسال
            </button>
          </div>
        </div>

        <div className="lg:flex items-center gap-3 hidden">
          <Image src={image1} alt="/" width={120} height={100} />
          <Image src={image2} alt="/" width={120} height={100} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
