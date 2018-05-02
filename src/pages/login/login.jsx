import React, { Component } from "react";
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import * as authActions from '../../store/actions/LoginActions';
import "./login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: "",
      password: ""
    };
    this.onSubmitHandler = this.onSubmitHandler.bind(this)
  }
  onChangeHandler(fieldName, e) {
    if (e.target.value.trim().length > 0) {
      this.setState({ ["" + fieldName]: e.target.value });
    }
  }
  onSubmitHandler() {
    this.props.authActions.userLogin(this.state.login, this.state.password)
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
    isLoggedIn: state.login.isLoggedIn
  }
}

function mapDispatchToProps(dispatch) {
  return {
    authActions: bindActionCreators(authActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Login)