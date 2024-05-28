import { FC } from "react";
import Slider from "../module/Slider";
import Faiveritse from "../module/Faiveritse";
import DiscountSlider from "../module/DiscountSlider";
import Hero from "../module/Hero";
import BestPrice from "../module/BestPrice";
import BestSlider from "../module/BestSlider";
import Hero2 from "../module/Hero2";
import Articles from "../module/Articles";

const HomePage: FC = () => {
  return (
    <div>
      <Slider />
      <Faiveritse />
      <DiscountSlider />
      <Hero />
      <BestPrice />
      <BestSlider />
      <Hero2 />
      <Articles />
    </div>
  );
};

export default HomePage;
