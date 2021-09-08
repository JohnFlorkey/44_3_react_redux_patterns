import React from "react";
import { useSelector } from "react-redux";
import { getCartSummary } from "./helpers/utilities";
import { displayCurrency } from "./helpers/utilities";

function CartSummary() {
  const { cart } = useSelector((store) => store);
  const cartSummary = getCartSummary(cart);

  return (
    <h3 className="mt-2 mb-4 text-center">
      {`Cart Summary: ${cartSummary.quantity} items for ${displayCurrency(
        cartSummary.cost
      )}`}
    </h3>
  );
}

export default CartSummary;
