import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class Profile extends Component {
  render() {
    return <h1>Profile</h1>;
  }
}

function mapStateToProps(state) {
  return {
    isLoggedIn: state.login.isLoggedIn
  };
}

connect(mapStateToProps)(Profile);
export default withRouter(Profile);
