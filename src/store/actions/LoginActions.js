import * as Auth from '../constants/Auth';

export function userLogin(payload) {
  return (dispatch) => {
    dispatch({
      type: Auth.LOGIN_REQUEST
    });
    setTimeout(() => {
      if (payload.login === "Admin" && payload.password === "12345") {
        localStorage.setItem('auth', true);
        dispatch({
          type: Auth.LOGIN_SUCCESS,
              payload: {
                auth: true,
                error: false
              }
        })
      } else {
        localStorage.setItem('auth', false);
        dispatch({
          type: Auth.LOGIN_FAIL,
          payload: {
            auth: false,
            error: true
          }
        });
      }
    }, 1500)
  }
}

export function userLogout() {
  return {
    type: Auth.LOGOUT_SUCCESS
  }
}