import React from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import Product from "./Product";
import { getProductList, getCartSummary } from "./helpers/utilities";

function ProductList() {
  const { products, cart } = useSelector((store) => store);
  const list = getProductList(products);
  const cartDisplay = getCartSummary(cart);

  return (
    <div>
      <h2 className="mt-2 mb-4">
        {`Cart Summary: $${cartDisplay.cost} for ${cartDisplay.quantity} items`}
      </h2>
      <Container>
        {list.map((p) => (
          <Product
            key={p.productKey}
            productKey={p.productKey}
            name={p.productObj.name}
            price={p.productObj.price}
          />
        ))}
      </Container>
    </div>
  );
}

export default ProductList;
