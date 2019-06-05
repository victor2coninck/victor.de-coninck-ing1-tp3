import React from "react";
import { Timeline } from "antd";


const MessageList = ({ messages }) => {  
  console.log("list:", messages);
  return (
  <Timeline>{
    messages.map(elt =>
    <Timeline.Item key={elt.id}>
      {elt.userName} - {elt.date} : {elt.text}
    </Timeline.Item>
    )
  }
  </Timeline>
  )
}
export default MessageList;
