import React, { Component } from "react";
import "./login.css";

export default class Login extends Component {
  render() {
    return (
      <div className="loginFormOutline">
        <div className="form">
          <div className="formElement">
            <label htmlFor="">Имя пользователя:</label>
            <input type="text" />
          </div>
          <div className="formElement">
            <label htmlFor="">Пароль:</label>
            <input type="text" />
          </div>
          <div className="formElement">
            <button>Войти</button>
          </div>
        </div>
      </div>
    );
  }
}
