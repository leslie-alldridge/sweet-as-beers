import React from "react";
import { connect } from "react-redux";
import { Listing, Header, Checkout, Cart, Orders } from "./Index";

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
