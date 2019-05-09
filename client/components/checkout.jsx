import React, { Component } from "react";
import { connect } from "react-redux";
import { navigate } from "../actions/index";

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.goHome = this.goHome.bind(this);
  }

  goHome() {
    this.props.returnToListing();
  }

  render() {
    return (
      <div>
        <p>Welcome to the Checkout Page</p>
        <ul>
          {this.props.addCart.map(cartItem => {
            return (
              <li>
                Item: {cartItem.name} Quantity: {cartItem.quantity}
              </li>
            );
          })}
        </ul>
        <button onClick={this.goHome} className="button-primary">
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
    addCart: state.addCart
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Checkout);
