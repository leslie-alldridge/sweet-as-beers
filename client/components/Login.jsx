import React, { Component } from "react";
import { connect } from "react-redux";

import { navigate } from "../actions/index";
import { loginUser } from "../actions/auth/login";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      username: ""
    };
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  loginUser = e => {
    e.preventDefault();
    this.props.loginUser(this.state);
  };

  render() {
    return (
      <div>
        <section className="hero is-success is-fullheight">
          <div className="hero-body">
            <div className="container has-text-centered">
              <div className="column is-4 is-offset-4">
                <h3 className="title has-text-grey">Login</h3>
                <p className="subtitle has-text-grey">
                  Please login to proceed.
                </p>
                <div className="box">
                  <form>
                    <div className="field">
                      <div className="control">
                        <input
                          className="input is-large"
                          type="text"
                          name="username"
                          placeholder="Your Username"
                          autoFocus=""
                          onChange={this.handleInputChange}
                        />
                      </div>
                    </div>

                    <div className="field">
                      <div className="control">
                        <input
                          className="input is-large"
                          type="email"
                          name="email"
                          placeholder="Your Email"
                          autoFocus=""
                          onChange={this.handleInputChange}
                        />
                      </div>
                    </div>

                    <div className="field">
                      <div className="control">
                        <input
                          className="input is-large"
                          type="password"
                          name="password"
                          placeholder="Your Password"
                          onChange={this.handleInputChange}
                        />
                      </div>
                    </div>
                    <button
                      onClick={this.loginUser}
                      className="button is-block is-info is-large is-fullwidth"
                    >
                      Login
                    </button>
                  </form>
                </div>
                <p className="has-text-grey">
                  <span
                    id="link"
                    onClick={() => this.props.navigateTo("showRegister")}
                  >
                    Sign Up
                  </span>
                  &nbsp;·&nbsp;
                  <span
                    id="link"
                    onClick={() => this.props.navigateTo("showHelp")}
                  >
                    Help
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loginUser: creds => {
      return dispatch(loginUser(creds));
    },
    navigateTo: page => {
      return dispatch(navigate(page));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Login);
