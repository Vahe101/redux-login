import { createStore } from "redux";
import rootReducer from "../auth/reducers/index";

const store = createStore(rootReducer);

export default store;
