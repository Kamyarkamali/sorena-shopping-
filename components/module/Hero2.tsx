import Image from "next/image";
import { FC } from "react";

const Hero2: FC = () => {
  return (
    <div className="max-w-[1400px] mx-auto mt-[3rem] hidden lg:block">
      <Image
        className="rounded-lg"
        src={"/images/11.jpg"}
        alt="/"
        width={2300}
        height={2000}
      />
    </div>
  );
};

export default Hero2;
