import Image from "next/image";
import { FC } from "react";

const Hero: FC = () => {
  return (
    <div className="mt-[-8rem] max-w-[1500px] mx-auto">
      <div className="flex lg:flex-row flex-col items-center justify-center gap-5 ">
        <Image
          className="rounded-lg lg:w-[490px] xl:w-[690px] sm:w-[600px] w-[450px] object-cover"
          src={"/images/hero.webp"}
          alt="/"
          width={690}
          height={700}
        />
        <Image
          className="rounded-lg lg:w-[490px] xl:w-[690px] w-[450px] sm:w-[600px] object-cover"
          src={"/images/hero2.webp"}
          alt="/"
          width={690}
          height={700}
        />
      </div>
    </div>
  );
};

export default Hero;
