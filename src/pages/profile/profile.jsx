import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Profile extends Component{
    render() {
        if (!this.props.isLoggedIn) {
            return(
                <Redirect to={'/login'}/>
            )
        }
        return(
            <h1>Profile</h1>
        );
    }
}

function mapStateToProps(state) {
  return {
    isLoggedIn: state.login.isLoggedIn
  }
}

export default connect(mapStateToProps) (Profile)