import React from "react";
import { connect } from "react-redux";
import Messages from "./Messages";
import Login from "./authentication/Login"

const mapStateToProps =  ({ authentication }, ownProps) => ({
    isLoggedIn: authentication.isLoggedIn,
    ...ownProps
  });

class Hoc extends React.Component{
    render() {
        if (this.props.isLoggedIn) {
            return (
                <Messages />
            )
        }
        else{
            return (
                <Login />
            )
        }
    }
}
export default connect(mapStateToProps)(Hoc);