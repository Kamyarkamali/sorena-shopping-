import { useRouter } from "next/router";
import { products } from "@/data/Localdata";
import DiscountCard from "@/components/module/DiscountCard";

function ParentComponent() {
  const {
    query: { discoutnId },
  } = useRouter();

  let newProducts = null;

  // Check if discoutnId is a string
  if (typeof discoutnId === "string") {
    const productIndex = parseInt(discoutnId, 10) - 1;

    // Check if productIndex is a valid number and within range
    if (
      !isNaN(productIndex) &&
      productIndex >= 0 &&
      productIndex < products.length
    ) {
      newProducts = products[productIndex];
    } else {
      console.error("Invalid discount ID");
    }
  } else {
    console.error("discountId is not a valid string");
  }

  return (
    <div>
      <DiscountCard {...newProducts} />
    </div>
  );
}

export default ParentComponent;
