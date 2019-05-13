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
import { logoutUser } from "../actions/auth/logout";
import { navigate } from "../actions";

const App = props => {
  return (
    <div className="app">
      <Header />
      {props.auth.user && (
        <p id="link" onClick={() => props.logout()}>
          Logout
        </p>
      )}
      {props.showListing === "showListing" ||
      (props.showListing == "showLogin" && props.auth.user) ? (
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
    showListing: state.navReducer,
    auth: state.auth
  };
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => {
      dispatch(logoutUser());
      dispatch(navigate("showLogin"));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
