export default function(state = [], action) {
  switch (action.type) {
    case "ORDERS":
      return {
        ...state,
        orders: action.data
      };
  }
  return state;
}
