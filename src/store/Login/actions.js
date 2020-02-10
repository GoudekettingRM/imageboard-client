import axios from "axios";
import { baseUrl } from "../Image/actions";

function loggedOn(jwt) {
  return {
    type: "login/SET_NEW_JWT",
    payload: jwt
  };
}

function loginFailed(message) {
  return {
    type: "login/SET_LOGIN_FAILED_MESSAGE",
    payload: message
  };
}

export function login(email, password) {
  return async (dispatch, getState) => {
    try {
      const loginResponse = await axios.post(`${baseUrl}/login`, {
        email,
        password
      });
      // console.log("login response after login action", loginResponse);
      const action = loggedOn(loginResponse.data.jwt);
      dispatch(action);
    } catch (error) {
      console.log("response.data.error test", error.response);

      const action = loginFailed(error.response.data.message);
      dispatch(action);

      throw error;
    }
  };
}
