import * as Auth from '../constants/Auth';
import axios from 'axios';

const authApiUrl = 'https://mysterious-reef-29460.herokuapp.com/api/v1/validate';

export function userLogin(payload) {
  return (dispatch) => {
    dispatch({
      type: Auth.LOGIN_REQUEST
    });
    axios
      .post(
        authApiUrl,
        {
          email: payload.login,
          password: payload.password
        },
        {
          headers: {
            'Content-type': 'application/json'
          }
        }
      )
      .then((res) => {
        console.log(res);
        if (res.data.status === 'ok') {
          localStorage.setItem('auth', true);
          dispatch({
            type: Auth.LOGIN_SUCCESS,
            payload: {
              auth: true,
              error: false,
              userID: res.data.data.id
            }
          });
        }
        if (res.data.status === 'err') {
          localStorage.setItem('auth', false);
          switch (res.data.message) {
            case Auth.WRONG_EMAIL_OR_PASSWORD:
              dispatch({
                type: Auth.LOGIN_FAIL,
                payload: {
                  auth: false,
                  error: 'Имя пользователя или пароль введены не верно.'
                }
              });
              break;
            default:
              dispatch({
                type: Auth.LOGIN_FAIL,
                payload: {
                  auth: false,
                  error: 'Неизвестная ошибка.'
                }
              });
          }
        }
        if (res.status >= 500) {
          localStorage.setItem('auth', false);
          dispatch({
            type: Auth.SERVER_ERROR,
            payload: {
              auth: false,
              error: 'Ошибка сервера.'
            }
          })
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function userLogout() {
  return {
    type: Auth.LOGOUT_SUCCESS
  };
}
