import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product";

function Cart() {
  const { cart } = useSelector((store) => store);

  return cart.map((c) => (
    <Product
      productKey={c.productKey}
      name={c.name}
      price={c.price}
      quantity={c.quantity}
    />
  ));
}

export default Cart;
