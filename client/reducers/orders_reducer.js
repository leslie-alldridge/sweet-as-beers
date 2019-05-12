export default function(state = [], action) {
  switch (action.type) {
    case "SAVE_CART":
      return [...state, action.cart];
    case "ORDERS":
      return [...state, data];
  }
  return state;
}
