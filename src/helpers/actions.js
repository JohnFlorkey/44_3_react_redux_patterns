import { ADD, REMOVE } from "./actionTypes";

export function addToCart(productKey, name, price) {
  return { type: ADD, payload: { item: { productKey, name, price } } };
}

export function removeFromCart(productKey) {
  return { type: REMOVE, payload: { productKey } };
}
