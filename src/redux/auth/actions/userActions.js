import { log_in, check } from "../authTypes";

const login = (userObj) => {
  return {
    type: log_in,
    payload: userObj,
  };
};

const loginCheck = () => {
  return {
    type: check,
  };
};

export default {
  login,
  loginCheck,
};
