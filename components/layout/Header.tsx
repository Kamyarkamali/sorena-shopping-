import { FC } from "react";

//component-module
import TopMenu from "../module/TopMenu";

const Header: FC = () => {
  return (
    <nav className="max-w-[1380px] mx-auto">
      <TopMenu />
    </nav>
  );
};

export default Header;
