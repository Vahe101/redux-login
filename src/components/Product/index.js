import React from "react";
import { Header } from "./Header";
import { Content } from "./Content";

export const Products = (props) => {
  return (
    <div>
      <Header />
      <Content value={props} />
    </div>
  );
};
