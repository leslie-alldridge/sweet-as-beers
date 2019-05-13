import React, { Component } from "react";
import { connect } from "react-redux";

import { navigate, getOrders } from "../actions/index";
import { Order } from "./Index";

class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: this.props.orderArr,
      show: false,
      id: null
    };
  }

  componentWillMount() {
    this.props.orders();
  }

  goToHome = () => {
    this.props.showListing();
  };

  showOrder = id => {
    console.log("hit", id);

    this.setState({
      id,
      show: !this.state.show
    });
  };

  render() {
    return (
      <div>
        <p className="welcome">Orders are here</p>
        <button onClick={this.goToHome}>Home</button>
        {this.props.orderArr &&
          this.props.orderArr.map(order => {
            return (
              <div>
                <p
                  id="link"
                  onClick={() => this.showOrder(order.id)}
                  key={order.id}
                >
                  Order ID: {order.id}
                </p>
                {this.state.show && this.state.id == order.id && (
                  <Order cart={JSON.parse(order.order)} order={order} />
                )}
              </div>
            );
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
