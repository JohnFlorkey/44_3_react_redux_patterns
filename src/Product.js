import React from "react";
import { useDispatch } from "react-redux";
import { Button, Card, Col, Row } from "react-bootstrap";
import { CartPlus, CartDash } from "react-bootstrap-icons";
import { addToCart, removeFromCart } from "./helpers/actions";
import { Link } from "react-router-dom";
import { displayCurrency } from "./helpers/utilities";

function Product({ productKey, name, price }) {
  const dispatch = useDispatch();
  const cartAdd = () => dispatch(addToCart(productKey, name, price));
  const cartRemove = () => dispatch(removeFromCart(productKey));
  return (
    <Card>
      <Card.Body>
        <Row>
          <Col>
            <Link to={`/products/${productKey}`}>{name}</Link>
          </Col>
          <Col>{`${displayCurrency(price)}`}</Col>
          <Col>
            <Button onClick={cartAdd} className="mx-2 btn btn-sm btn-primary">
              <CartPlus />
            </Button>
            <Button onClick={cartRemove} className="mx-2 btn btn-danger btn-sm">
              <CartDash />
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default Product;
