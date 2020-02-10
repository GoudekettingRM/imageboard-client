import { combineReducers } from "redux";
import imageReducer from "./Image/reducer";

export default combineReducers({
  images: imageReducer
});
