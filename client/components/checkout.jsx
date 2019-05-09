import React, { Component } from "react";
import { connect } from "react-redux";
import { navigate } from "../actions/index";

class Checkout extends Component {
  constructor(props) {
    super(props);
  }

  goHome = () => {
    this.props.returnToListing();
  };

  confirmOrder = () => {
    console.log("order confirmed");
  };

  render() {
    return (
      <div>
        <p>Welcome to the Checkout Page</p>
        <ul>
          {this.props.cart.map(cartItem => {
            return (
              <li>
                Item: {cartItem.name} Quantity: {cartItem.quantity}
              </li>
            );
          })}
        </ul>
        <button onClick={this.confirmOrder} className="button-primary">
          Confirm Order
        </button>
        <br />
        <button onClick={this.goHome} className="button-secondary">
          Go Home
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    returnToListing: () => {
      dispatch(navigate("showListing"));
    }
  };
};

function mapStateToProps(state) {
  return {
    cart: state.cart
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Checkout);
