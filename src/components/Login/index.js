import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";
import allActions from "../../redux/auth/actions/index";
import { Input } from "../shared";
import { log_in } from "../../redux/auth/authTypes";

import "./index.scss";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const login = async () => {
    const user = {
      username: email,
      password: password,
    };

    const action = {
      type: log_in,
      payload: { user },
    };

    await axios
      .post("https://volatile-admin-api.herokuapp.com/auth/login", user)
      .then((res) => {
        localStorage.setItem("token", res.data.access_token);
        dispatch(allActions.userActions.login(action));
        history.push("/");
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div>
      <div className="loginPage">
        <div className="loginDiv">
          <div className="login">
            <p>LOGIN</p>
          </div>
          <Input
            type="Email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <Input
            type="Password"
            id="password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <div>
            <button className="loginButtonDiv" onClick={login}>
              Login
            </button>
          </div>
          <div className="resetPassword">
            <button className="resetButton">Reset Your Password</button>
          </div>
        </div>
      </div>
    </div>
  );
};
