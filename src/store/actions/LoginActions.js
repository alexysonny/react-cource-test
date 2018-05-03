export function userLogin(login, password) {
  if (login === "Admin" && password === "12345") {
    return {
      type: 'USER_LOGIN_SUCCESS',
      payload: {
        auth: true,
        error: false
      }
    }
  } else {
    return {
      type: 'USER_LOGIN_FAIL',
      payload: {
        auth: false,
        error: true
      }
    }
  }
}