import request from "../utils/api";

export const navigate = target => {
  return {
    type: "NAVIGATE",
    target
  };
};

export const saveCart = cart => {
  return {
    type: "SAVE_CART",
    cart
  };
};

export function finalCart(cart) {
  return dispatch => {
    return request("post", "v1/cart/save", cart)
      .then(response => {
        dispatch(saveCart(cart));
        dispatch(navigate("showListing"));
      })
      .catch(err => {
        console.log("something broke!");
      });
  };
}

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

export const orders = data => {
  return {
    type: "ORDERS",
    data
  };
};

export function getOrders() {
  return dispatch => {
    return request("get", "v1/cart/orders")
      .then(response => {
        dispatch(orders(response.body));
      })
      .catch(err => {
        console.log("something broke!", err);
      });
  };
}
