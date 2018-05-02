import React, { Component } from "react";
import "./login.css";

export default class Login extends Component {
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
    if (this.state.login === "Admin" && this.state.password === "12345") {
      localStorage.setItem("authorised", true);
    } else {
      localStorage.setItem("authorised", false)
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
          <div className="formElement">
            <button onClick={this.onSubmitHandler}>Войти</button>
          </div>
        </div>
      </div>
    );
  }
}
