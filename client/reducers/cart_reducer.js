export default function(state = [], action) {
  switch (action.type) {
    case "ADD_TO_CART":
      const index1 = state.findIndex(item => item.id === action.id);
      if (index1 > -1) {
        return state.map(item => {
          if (item.id === action.id) {
            item.quantity += 1;
          }
          return item;
        });
      } else {
        let cart = {
          id: action.id,
          name: action.name,
          quantity: action.quantity
        };
        return [...state, cart];
      }

    case "DELETE_FROM_CART":
      return state.filter(item => item.id !== action.id);

    case "UPDATE_CART":
      const index = state.findIndex(item => item.id === action.id);
      if (index > -1) {
        return state.map(item => {
          if (item.id === action.id) return action;
          return item;
        });
      }

    // case 'SAVE_CART':
    // return [...state, action]

    //in development
  }
  return state;
}

//state.slice(0, action.id).concat(state.slice(action.id +1));
