import { addToCart, removeFromCart } from "./actions";
import { ADD, REMOVE } from "./actionTypes";

const productKey = "keyA";
const price = 9.99;
const name = "product A";

describe("action creator tests", () => {
  it("addToCart action creator", () => {
    expect(addToCart(productKey, name, price)).toEqual({
      type: ADD,
      payload: { item: { productKey, name, price } },
    });
  });

  it("removeFromCart action creator", () => {
    expect(removeFromCart(productKey)).toEqual({
      type: REMOVE,
      payload: { productKey },
    });
  });
});
