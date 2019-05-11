import React, { Component } from "react";
import { connect } from "react-redux";
import { navigate } from "../actions/index";
import { BeerList } from "./Index";
import data from "../../data/beers";

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
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    showListing: () => {
      dispatch(navigate("showListing"));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Orders);
