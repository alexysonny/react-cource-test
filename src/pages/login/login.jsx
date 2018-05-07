import React, { Component } from "react";
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import * as authActions from '../../store/actions/LoginActions';
import "./login.css";
import PropTypes from "prop-types";

class Login extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  constructor(props, context) {
    super(props, context);
    this.state = {
      login: "",
      password: "",
      errorMessage: "Имя пользователя или пароль введены не верно"
    };
    this.onSubmitHandler = this.onSubmitHandler.bind(this)
  }
  onChangeHandler(fieldName, e) {
    if (e.target.value.trim().length > 0) {
      this.setState({ ["" + fieldName]: e.target.value });
    }
  }
  onSubmitHandler() {
    this.props.authActions.userLogin({
      login: this.state.login,
      password: this.state.password
    });
    console.log(this.context.router.history);
    if (this.props.isLoggedIn === true) {
      this.context.router.history.push('/news')
    }
  }
  render() {
    return (
      <div className="loginFormOutline">
        <div className="form">
          <div className="formElement">
            <label htmlFor="">Имя пользователя:</label>
            <input
              type="text"
              value={this.state.login}
              onChange={this.onChangeHandler.bind(this, "login")}
            />
          </div>
          <div className="formElement">
            <label htmlFor="">Пароль:</label>
            <input
              type="text"
              value={this.state.password}
              onChange={this.onChangeHandler.bind(this, "password")}
            />
          </div>
          <div className="errorMessage">
            <p>{this.props.authError ? this.state.errorMessage : ''}</p>
          </div>
          <div className="formElement">
            <button onClick={this.onSubmitHandler}>Войти</button>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLoggedIn: state.login.isLoggedIn,
    authError: state.login.authError
  }
}

function mapDispatchToProps(dispatch) {
  return {
    authActions: bindActionCreators(authActions, dispatch)
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps) (Login))