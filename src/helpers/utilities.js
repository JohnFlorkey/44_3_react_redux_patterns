export function getProductList(products) {
  const list = [];
  Object.entries(products).map((p) => {
    const productKey = p[0];
    const productObj = p[1];
    return list.push({ productKey, productObj });
  });
  return list;
}

export function getCartSummary(cart) {
  if (cart.length) {
    return cart.reduce(
      (prev, curr) => ({
        quantity: prev.quantity + curr.quantity,
        cost: prev.cost + curr.quantity * curr.price,
      }),
      { quantity: 0, cost: 0 }
    );
  } else {
    return { quantity: 0, cost: 0 };
  }
}

export function displayCurrency(price) {
  return `$${(Math.round(price * 100) / 100).toFixed(2)}`;
}
