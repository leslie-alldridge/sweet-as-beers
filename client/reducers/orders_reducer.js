export default function(state = [], action) {
  switch (action.type) {
    case "ORDERS":
      return [...state, action.data];
  }
  return state;
}
