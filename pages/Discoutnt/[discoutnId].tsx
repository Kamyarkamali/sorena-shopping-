import { useRouter } from "next/router";
import { products } from "@/data/Localdata";
import DiscountCard from "@/components/module/DiscountCard";

function ParentComponent() {
  const router = useRouter();
  const { discoutnId } = router.query;

  let newProduct = null;

  if (typeof discoutnId === "string") {
    const productIndex = parseInt(discoutnId, 10) - 1;

    if (
      !isNaN(productIndex) &&
      productIndex >= 0 &&
      productIndex < products.length
    ) {
      newProduct = products[productIndex];
    } else {
      console.error("Invalid discount ID");
    }
  } else {
    console.error("discountId is not a valid string");
  }

  if (!newProduct) {
    return <div>محصولی یافت نشد</div>;
  }

  return (
    <div>
      <DiscountCard {...newProduct} />
    </div>
  );
}

export default ParentComponent;
