import { log_in, check } from "../authTypes";

const login = (token) => {
  return {
    type: log_in,
    payload: token,
  };
};

const loginCheck = (token) => {
  return {
    type: check,
    payload: token,
  };
};

export default {
  login,
  loginCheck,
};
