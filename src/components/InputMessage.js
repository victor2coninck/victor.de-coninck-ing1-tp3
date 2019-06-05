import React from "react";
import { Input } from "antd";

const Search = Input.Search;

const InputMessage = ({onSubmit = () => {}}) => (
  <Search
    placeholder="input message"
    onSearch={value => onSubmit(value)}
    enterButton="Send"
  />
);

export default InputMessage;
