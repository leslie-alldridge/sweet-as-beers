import React, { Component } from "react";
import { CartList } from "./Index";
import { connect } from "react-redux";
import { navigate, deleteItem, updateItem, finalCart } from "../actions/index";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: this.props.cart
    };
  }

  goToCheckout = () => {
    this.props.finalCart();
  };

  updateItem = (id, quantity) => {
    this.setState({
      cart: this.state.cart.map(item => {
        if (item.id === id) item.quantity = Number(quantity);
        return item;
      })
    });
  };

  submitUpdate = () => {
    this.props.updateItem(this.state.cart);
  };

  render() {
    return (
      <div>
        <p className="welcome">
          Thirsty? Sweet! You're one step closer to a quenching.
        </p>
        <CartList
          goToCheckout={this.goToCheckout}
          returnToListing={this.props.returnToListing}
          cart={this.props.cart}
          updateItem={this.updateItem}
          deleteItem={this.props.deleteItem}
          submitUpdate={this.submitUpdate}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart
  };
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
    finalCart: () => {
      dispatch(navigate("showCheckout"));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
