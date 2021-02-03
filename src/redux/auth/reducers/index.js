import { combineReducers } from "redux";
import { currentUser, inspector } from "./currentUser";

const rootReducer = combineReducers({
  currentUser,
  inspector,
});

export default rootReducer;
