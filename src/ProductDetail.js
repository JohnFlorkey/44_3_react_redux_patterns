import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button, Card } from "react-bootstrap";
import { displayCurrency } from "./helpers/utilities";
import { addToCart, removeFromCart } from "./helpers/actions";
import { useDispatch } from "react-redux";
import { CartPlus, CartDash } from "react-bootstrap-icons";
import "./ProductDetail.css";

function ProductDetail() {
  const { id } = useParams();
  const { products } = useSelector((store) => store);
  const product = products[id];
  const dispatch = useDispatch();
  const cartAdd = () => dispatch(addToCart(id, product.name, product.price));
  const cartRemove = () => dispatch(removeFromCart(id));

  return (
    <div>
      <Card className="ProductDetail-Card">
        <Card.Img src={product.image_url} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <span>{displayCurrency(product.price)}</span>
          <Button onClick={cartAdd} className="mx-2 btn btn-sm btn-primary">
            <CartPlus />
          </Button>
          <Button onClick={cartRemove} className="mx-2 btn btn-danger btn-sm">
            <CartDash />
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProductDetail;
