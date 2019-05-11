import request from "superagent";
import { saveUserToken } from "../../utils/auth.js";
import { receiveLogin, loginError } from "./login";

export function registerUserRequest(creds) {
  return dispatch => {
    request
      .post("/api/auth/register")
      .send(creds)
      .then(res => {
        const userInfo = saveUserToken(res.body.token);
        dispatch(receiveLogin(userInfo));
      })
      .catch(err => dispatch(loginError(err.response.body.message)));
  };
}
