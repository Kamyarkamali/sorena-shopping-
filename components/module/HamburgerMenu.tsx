import { IsatateOpen } from "@/types/interface";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

//icons
import { IoCloseOutline } from "react-icons/io5";
import Cardhamburger from "./Cardhamburger";

const HamburgerMenu: FC<IsatateOpen> = ({ hamburger, setHamburger }) => {
  return (
    <div className="bg-[#ffff] w-[300px] rounded-lg border-2 h-[110vh]">
      <div className="flex items-center gap-10 justify-center mt-[1rem]">
        <Link href={"/"}>
          <Image src={"/images/logo.png"} alt="logo" width={140} height={130} />
        </Link>
        <IoCloseOutline
          onClick={(e) => {
            e.stopPropagation();
            setHamburger(!hamburger);
          }}
          size={22}
          color="blue"
          className="cursor-pointer"
        />
      </div>

      <div>
        <Cardhamburger />
      </div>
    </div>
  );
};

export default HamburgerMenu;
