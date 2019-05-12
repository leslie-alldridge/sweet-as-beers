import React, { Component } from "react";
import { connect } from "react-redux";
import { navigate, finalCart } from "../actions/index";

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: this.props.cart
    };
  }

  goHome = () => {
    this.props.returnToListing();
  };

  confirmOrder = () => {
    this.props.confirmOrder(this.state.cart);
  };

  render() {
    return (
      <div>
        <p>Welcome to the Checkout Page</p>
        <ul>
          {this.props.cart.map(cartItem => {
            return (
              <li key={cartItem.id}>
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
    },
    confirmOrder: cart => {
      dispatch(finalCart(cart));
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
