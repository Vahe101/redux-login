import { log_in, check } from ".././authTypes";

const initialState = {
  type: "",
  user: {},
  loggedIn: false,
};

export const auth = (state = initialState, action) => {
  switch (action.type) {
    case log_in:
      return {
        user: action.payload,
        loggedIn: true,
      };
    case check:
      return {
        user: action.payload,
        loggedIn: true,
      };
    default:
      return state;
  }
};
