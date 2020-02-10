import { combineReducers } from "redux";
import imageReducer from "./Image/reducer";
import loginReducer from "./Login/reducer";

export default combineReducers({
  images: imageReducer,
  loginData: loginReducer
});
