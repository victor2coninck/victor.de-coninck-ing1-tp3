import React from "react";
import { connect } from "react-redux";
import { add as addMessage } from "../actions/messages";
import MessageLayout from "./MessagesLayout";

const mapStateToProps = ({ messages }, ownProps) => ({
  messages,
  ...ownProps
});

class Messages extends React.Component {
/*
  constructor(props)
  {
    super(props);
    this.handleSubmitMessage = this.handleSubmitMessage.bind(this)
  }
*/

  handleSubmitMessage(message) {
    this.props.dispatch(addMessage(message));
  }

  render() {
  return <MessageLayout handleSubmit={this.handleSubmitMessage}/>;
  }
}

export default connect(mapStateToProps)(Messages);
