import request from "../../utils/api";
import { saveUserToken } from "../../utils/auth.js";

function requestLogin() {
  return {
    type: "LOGIN_REQUEST",
    isFetching: true,
    isAuthenticated: false
  };
}

export function receiveLogin(user) {
  return {
    type: "LOGIN_SUCCESS",
    isFetching: false,
    isAuthenticated: true,
    user
  };
}

export function loginError(message) {
  return {
    type: "LOGIN_FAILURE",
    isFetching: false,
    isAuthenticated: false,
    message
  };
}

export function loginUser(creds) {
  console.log(creds);

  return dispatch => {
    dispatch(requestLogin(creds));
    return request("post", "auth/login", creds)
      .then(response => {
        const userInfo = saveUserToken(response.body.token);
        dispatch(receiveLogin(userInfo));
      })
      .catch(err => {
        dispatch(loginError(err.response.body.message));
      });
  };
}
