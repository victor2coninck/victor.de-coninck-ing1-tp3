import React from "react";
import { Timeline } from "antd";

const MessageList = ({ messages }) => (
  <Timeline>
  {
    messages.map(elt => {
      return (<Timeline.Item>{elt.userName} - {elt.date} : {elt.text}</Timeline.Item>)
    })
  }
  </Timeline>
);

export default MessageList;
