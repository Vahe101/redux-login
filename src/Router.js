import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { About } from "./components/About";
import { Home } from "./components/Home/index.js";
import { Header } from "./components/common/Header";
import { Login } from "./components/Login";
import { Products } from "./components/Product";
import { Workers } from "./components/Worker";
import { check } from "./redux/auth/authTypes";
import allActions from "./redux/auth/actions/index";

export const Routers = () => {
  const isAuth = useSelector((state) => state.currentUser);
  const dispatch = useDispatch();

  const action = {
    type: check,
  };

  useEffect(() => {
    if (!isAuth.loggedIn) {
      dispatch(allActions.userActions.loginCheck(action));
    }
  }, []);

  return (
    <div>
      {isAuth.loggedIn && (
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/workers" component={Workers} />
            <Route exact render={() => <Redirect from="*" to="/" />} />
          </Switch>
        </Router>
      )}
      {!isAuth.loggedIn && (
        <Router>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route render={() => <Redirect from="*" to="/login" />} />
          </Switch>
        </Router>
      )}
    </div>
  );
};
