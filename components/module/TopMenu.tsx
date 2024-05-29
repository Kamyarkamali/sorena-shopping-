import { topMenuTitle } from "@/data/Localdata";
import Image from "next/image";
import { FC, useState } from "react";
import CardtopMenu from "./CardtopMenu";
import CardBtn from "./CardBtn";

//icons
import { MdMenu } from "react-icons/md";
import HamburgerMenu from "./HamburgerMenu";
import Link from "next/link";

const TopMenu: FC = () => {
  const [hamburger, setHamburger] = useState<boolean>(false);

  return (
    <div
      className={`${
        hamburger ? "fixed w-[100%] h-[100%] backdrop-blur-sm z-50" : null
      }`}
    >
      <nav
        className={`flex shadow-md fixed bg-white left-0 right-[-18px] z-[10000] p-5 xl:top-[-0.3rem] lg:top-[-0.3rem] md:top-[-0.6rem] sm:top-[-0.3rem] top-[-0.3rem] ${
          hamburger && "top-[-5.3rem]"
        } justify-between items-center`}
      >
        <div className="mr-6 flex items-center gap-5">
          {/* icon hamburgeer menu */}
          <div className="md:hidden block cursor-pointer relative">
            <MdMenu
              onClick={(e) => setHamburger(true)}
              size={30}
              color="blue"
            />
            <div
              className={`absolute z-[14000] transition-all duration-300 ease-linear lg:hidden ${
                hamburger
                  ? "right-[-25px] top-[-2.3rem]"
                  : "right-[-1200%] top-[-2.3rem] "
              }`}
            >
              <HamburgerMenu
                hamburger={hamburger}
                setHamburger={setHamburger}
              />
            </div>
          </div>

          <div className="flex justify-center w-full">
            <Link href="/">
              <Image
                className="lg:w-[160px] w-[100px]"
                src={"/images/logo.png"}
                alt="logo"
                width={160}
                height={160}
              />
            </Link>
          </div>
        </div>

        <div className="xl:flex hidden">
          {topMenuTitle.map((item) => (
            <CardtopMenu key={item.id} {...item} />
          ))}
        </div>

        <div>
          <CardBtn />
        </div>
      </nav>
    </div>
  );
};

export default TopMenu;
