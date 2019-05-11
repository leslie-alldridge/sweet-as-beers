import React, { Component } from "react";
import { connect } from "react-redux";
import { navigate } from "../actions/index";

class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  goToHome = () => {
    this.props.showListing();
  };

  render() {
    return (
      <div>
        <p className="welcome">Orders are here</p>
        <button onClick={this.goToHome}>Home</button>
        {this.props.orders &&
          this.props.orders.map(orders => {
            console.log(orders.cart);
            return orders.cart.map(order => {
              return (
                <p key={order.id}>
                  Order ID: {order.id}, Name: {order.name}, Quantity:{" "}
                  {order.quantity}
                </p>
              );
            });
          })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    orders: state.orders
  };
}

const mapDispatchToProps = dispatch => {
  return {
    showListing: () => {
      dispatch(navigate("showListing"));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Orders);
