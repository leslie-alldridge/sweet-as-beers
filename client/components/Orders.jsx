import React, { Component } from "react";
import { connect } from "react-redux";

import { navigate, getOrders } from "../actions/index";

class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: this.props.orderArr
    };
  }

  componentWillMount() {
    this.props.orders();
  }

  goToHome = () => {
    this.props.showListing();
  };

  render() {
    return (
      <div>
        <p className="welcome">Orders are here</p>
        <button onClick={this.goToHome}>Home</button>
        {this.props.orderArr &&
          this.props.orderArr.map(order => {
            return <p key={order.id}>Order ID: {order.id}</p>;
          })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    orderArr: state.orders.orders
  };
}

const mapDispatchToProps = dispatch => {
  return {
    showListing: () => {
      dispatch(navigate("showListing"));
    },
    orders: () => {
      dispatch(getOrders());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Orders);
