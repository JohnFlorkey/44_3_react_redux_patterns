import { ADD, REMOVE } from "../helpers/actionTypes";

const INITIAL_STATE = [];

function cartReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD:
      const { item } = action.payload;
      if (state.find((s) => s.productKey === item.productKey)) {
        return state.map((p) =>
          p.productKey === item.productKey
            ? { ...p, quantity: p.quantity + 1 }
            : { ...p }
        );
      } else {
        return [...state, { ...item, quantity: 1 }];
      }
    case REMOVE:
      return state
        .map((p) =>
          p.productKey === action.payload.productKey
            ? { ...p, quantity: p.quantity - 1 }
            : { ...p }
        )
        .filter((p) => p.quantity > 0);
    default:
      return state;
  }
}

export default cartReducer;
