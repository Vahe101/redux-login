import { combineReducers } from "redux";
import { auth, inspector } from "./currentUser";

const rootReducer = combineReducers({
  auth,
  inspector,
});

export default rootReducer;
