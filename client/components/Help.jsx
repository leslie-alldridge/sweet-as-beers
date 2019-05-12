import React, { Component } from "react";
import { connect } from "react-redux";
import { navigate } from "../actions/index";

class Help extends Component {
  constructor(props) {
    super(props);
  }

  goToHome = () => {
    this.props.showListing();
  };

  render() {
    return (
      <div>
        <h2>Welcome to the help page</h2>
        <span id="link" onClick={this.goToHome}>
          Back to home
        </span>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    showListing: () => {
      dispatch(navigate("showLogin"));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Help);
