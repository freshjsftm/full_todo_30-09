import { combineReducers } from "redux";
import userReducer from "./userReducer";

const rooReducer = combineReducers({
  users: userReducer
})

export default rooReducer;