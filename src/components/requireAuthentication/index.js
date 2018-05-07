import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from '../../pages/login/login.jsx'

export default function requireAuthentication(Comp) {

  class AuthenticationComponent extends Component {
    render() {
      return(
        <div>
          {this.props.isLoggedIn === true
            ? <Comp {...this.props} />
            : <Login />
          }
        </div>
      );
    }
  }
  function mapStateToProps(state) {
    return {
      isLoggedIn: state.login.isLoggedIn
    }
  }
  return connect(mapStateToProps)(AuthenticationComponent)
}