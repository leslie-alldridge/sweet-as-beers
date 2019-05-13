import { removeUser } from "../../utils/auth.js";

function requestLogout() {
  return {
    type: "LOGOUT_REQUEST",
    isFetching: true,
    isAuthenticated: true
  };
}

function receiveLogout() {
  return {
    type: "LOGOUT_SUCCESS",
    isFetching: false,
    isAuthenticated: false
  };
}

export function logoutUser() {
  return dispatch => {
    dispatch(requestLogout());
    removeUser();
    dispatch(receiveLogout());
  };
}
