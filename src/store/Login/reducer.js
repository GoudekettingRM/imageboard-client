const initialState = {
  jwt: "",
  message: ""
};

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case "login/SET_LOGIN_FAILED_MESSAGE": {
      return {
        ...state,
        message: action.payload
      };
    }
    case "login/SET_NEW_JWT": {
      return {
        jwt: action.payload,
        message: "Login successful"
      };
    }
    default:
      return state;
  }
}
