import React from "react";
import { connect } from "react-redux";
import {
  Listing,
  Header,
  Checkout,
  Cart,
  Orders,
  Login,
  Register,
  Help
} from "./Index";

const App = props => {
  return (
    <div className="app">
      <Header />
      {props.showListing === "showListing" ? (
        <Listing />
      ) : props.showListing === "showCheckout" ? (
        <Checkout />
      ) : props.showListing === "showOrders" ? (
        <Orders />
      ) : props.showListing === "showLogin" ? (
        <Login />
      ) : props.showListing === "showRegister" ? (
        <Register />
      ) : props.showListing === "showHelp" ? (
        <Help />
      ) : (
        <Cart />
      )}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    showListing: state.navReducer
  };
}

export default connect(mapStateToProps)(App);
