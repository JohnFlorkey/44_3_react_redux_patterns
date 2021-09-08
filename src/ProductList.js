import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product";
import CartSummary from "./CartSummary";
import { getProductList } from "./helpers/utilities";

function ProductList() {
  const { products } = useSelector((store) => store);
  const list = getProductList(products);

  return (
    <div>
      <CartSummary />
      {list.map((p) => (
        <Product
          key={p.productKey}
          productKey={p.productKey}
          name={p.productObj.name}
          price={p.productObj.price}
        />
      ))}
    </div>
  );
}

export default ProductList;
