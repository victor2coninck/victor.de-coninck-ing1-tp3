import React from "react";
import { Provider } from "react-redux";
import Hoc from "./Hoc.js";
import "antd/dist/antd.css";

export default function Root(props) {
  return (
    <Provider store={props.store}>
      <Hoc />
    </Provider>
  );
}
