import React, { Component } from "react";
import CartList from "./CartList";
import { connect } from "react-redux";
import { navigate, deleteItem, updateItem, finalCart } from "../actions/index";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: this.props.cart
    };
    this.updatesItem = this.updatesItem.bind(this);
    this.submitUpdate = this.submitUpdate.bind(this);
    this.goToCheckout = this.goToCheckout.bind(this);
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <p className="welcome">
          Thirsty? Sweet! You're one step closer to a quenching.
        </p>
        <CartList
          goToCheckout={this.goToCheckout}
          returnToListing={this.props.returnToListing}
          cart={this.props.cart}
          updatesItem={this.updatesItem}
          deleteItem={this.props.deleteItem}
          submitUpdate={this.submitUpdate}
        />
      </div>
    );
  }

  goToCheckout() {
    this.props.finalCart(this.state.cart);
  }

  updatesItem(id, quantity) {
    console.log(id);
    console.log(quantity);

    this.setState({
      cart: this.state.cart.map(item => {
        if (item.id === id) item.quantity = Number(quantity);
        return item;
      })
    });
  }

  submitUpdate() {
    console.log(this.state.cart);

    this.props.updateItem(this.state.cart);
  }
}

const mapDispatchToProps = dispatch => {
  return {
    returnToListing: () => {
      dispatch(navigate("showListing"));
    },
    deleteItem: id => {
      dispatch(deleteItem(id));
    },
    updateItem: cart => {
      console.log("hit");

      dispatch(updateItem(cart));
    },
    finalCart: cart => {
      dispatch(finalCart(cart));
      dispatch(navigate("showCheckout"));
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
)(Cart);
