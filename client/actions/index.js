export const navigate = target => {
  return {
    type: "NAVIGATE",
    target
  };
};

export const finalCart = cart => {
  return {
    type: "SAVE_CART",
    cart
  };
};

export const addToCart = (id, name) => {
  return {
    type: "ADD_TO_CART",
    id: id,
    name: name,
    quantity: 1
  };
};

export const deleteItem = id => {
  return {
    type: "DELETE_FROM_CART",
    id: id
  };
};

export const updateItem = id => {
  return {
    type: "UPDATE_CART",
    id: id
  };
};
