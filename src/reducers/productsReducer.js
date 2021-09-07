import productsJSON from "../data.json";

const INITIAL_STATE = productsJSON.products;

function productsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default productsReducer;
