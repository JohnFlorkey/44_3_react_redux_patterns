import cartReducer from "./cartReducer";
import { ADD, REMOVE } from "../helpers/actionTypes";

const INITIAL_STATE = [
  {
    productKey: "keyA",
    name: "product A",
    cost: 9.99,
    quantity: 1,
  },
  {
    productKey: "keyB",
    name: "product B",
    cost: 8.88,
    quantity: 2,
  },
];

const newProduct = {
  productKey: "keyC",
  name: "product C",
  cost: 7.77,
};

describe("cartReducer tests", () => {
  it("returns the initial state", () => {
    expect(cartReducer(INITIAL_STATE, {})).toEqual(INITIAL_STATE);
  });

  it("adds a product", () => {
    expect(
      cartReducer(INITIAL_STATE, {
        type: ADD,
        payload: {
          item: newProduct,
        },
      })
    ).toEqual([...INITIAL_STATE, { ...newProduct, quantity: 1 }]);
  });

  it("removes a product entirely when quantity is 1", () => {
    expect(
      cartReducer(INITIAL_STATE, {
        type: REMOVE,
        payload: { productKey: "keyA" },
      })
    ).toEqual([
      { productKey: "keyB", name: "product B", cost: 8.88, quantity: 2 },
    ]);
  });

  it("reduces the quantity when quantity is > 1", () => {
    expect(
      cartReducer(INITIAL_STATE, {
        type: REMOVE,
        payload: { productKey: "keyB" },
      })
    ).toEqual([
      {
        productKey: "keyA",
        name: "product A",
        cost: 9.99,
        quantity: 1,
      },
      {
        productKey: "keyB",
        name: "product B",
        cost: 8.88,
        quantity: 1,
      },
    ]);
  });
});
