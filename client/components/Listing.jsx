import React, { Component } from "react";
import { connect } from "react-redux";

import { navigate } from "../actions/index";
import { BeerList } from "./Index";

import data from "../../data/beers";

class Listing extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  goToOrders = () => {
    this.props.showOrders();
  };

  render() {
    return (
      <div>
        <p className="welcome">
          Welcome! Please select from our delicious selection and don't hesitate
          to let us know if we can answer any of your questions.
        </p>
        {this.props.auth.user.username == "admin" && (
          <button onClick={this.goToOrders}>Check orders</button>
        )}
        <BeerList beer={data.beers} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

const mapDispatchToProps = dispatch => {
  return {
    showOrders: () => {
      dispatch(navigate("showOrders"));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Listing);
