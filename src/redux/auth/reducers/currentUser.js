import { log_in, check } from ".././authTypes";

const initialState = {
  type: "",
  user: {},
  loggedIn: false,
};

export const currentUser = (state = initialState, action) => {
  switch (action.type) {
    case log_in:
      return {
        type: action.type,
        user: action.payload,
        loggedIn: true,
      };
    default:
      return state;
  }
};

export const inspector = (state = initialState, action) => {
  const token = localStorage.getItem("token");
  if (token) {
    state.loggedIn = true;
    switch (action.type) {
      case check:
        return {
          type: action.type,
          loggedIn: true,
        };
      default:
        return state;
    }
  }
  return {
    type: action.type,
    loggedIn: false,
  };
};
