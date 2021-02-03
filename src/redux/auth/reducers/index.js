import { combineReducers } from "redux";
import { auth } from "./currentUser";

const rootReducer = combineReducers({
  auth,
});

export default rootReducer;
