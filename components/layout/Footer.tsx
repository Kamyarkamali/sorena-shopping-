import Image from "next/image";
import { FC } from "react";

//icons
import { TiArrowUp } from "react-icons/ti";

const Footer: FC = () => {
  const tomMenu = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="max-w-[1360px] mx-auto mt-[2rem]">
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

      <div>center</div>

      <div>left</div>
    </div>
  );
};

export default Footer;
