import React from "react";
import { connect } from "react-redux";
import { add as addMessage } from "../actions/messages";
import MessageLayout from "./MessagesLayout";

const mapStateToProps = ({ messages }, ownProps) => ({
  messages,
  ...ownProps
});

class Messages extends React.Component {
  handleSubmitMessage(message) {
    console.log("submit");
    this.props.dispatch(addMessage(message));
  }

  render() {
  return <MessageLayout list={this.props.messages} handleSubmit={(msg) => this.handleSubmitMessage(msg)}/>
  }
}

export default connect(mapStateToProps)(Messages);
