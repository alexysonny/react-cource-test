export function userLogin(login, password) {
  if (login === "Admin" && password === "12345") {
    return {
      type: 'USER_LOGIN',
      payload: true
    }
  } else {
    return {
      type: 'USER_LOGIN',
      payload: false
    }
  }
}