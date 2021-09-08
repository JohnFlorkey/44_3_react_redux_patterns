import React from "react";
import { useSelector } from "react-redux";
import { Button, Col, Row } from "react-bootstrap";
import Product from "./Product";
import { getProductList } from "./helpers/utilities";
import { Link } from "react-router-dom";

function ProductList() {
  const { products } = useSelector((store) => store);
  const list = getProductList(products);

  return (
    <div>
      {list.map((p) => (
        <Product
          key={p.productKey}
          productKey={p.productKey}
          name={p.productObj.name}
          price={p.productObj.price}
        />
      ))}
      <Row>
        <Col>
          <Link to="/cart">
            <Button className="btn btn-success">Go To Cart</Button>
          </Link>
        </Col>
      </Row>
    </div>
  );
}

export default ProductList;
