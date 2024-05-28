import { Ichildren } from "@/types/interface";
import { FC } from "react";

//component-layout
import Header from "./Header";
import Footer from "./Footer";

const Layout: FC<Ichildren> = ({ children }) => {
  return (
    <div>
      <header>
        <Header />
      </header>

      <main className="h-[6000px]">{children}</main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
