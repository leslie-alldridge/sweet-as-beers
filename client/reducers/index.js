import { combineReducers } from "redux";
import navReducer from "./reduce_nav";
import cart from "./cart_reducer";
import orders from "./orders_reducer";

export default combineReducers({
  navReducer,
  cart,
  orders
});
