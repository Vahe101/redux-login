import React from "react";
import { Link } from "react-router-dom";

import "./index.scss";

export const Header = () => {
  return (
    <div className="header">
      <Link to="/">Volatile Solutions</Link>
      <div className="HomePagecontent">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
        <Link to="/workers">Our workers</Link>
      </div>
    </div>
  );
};
