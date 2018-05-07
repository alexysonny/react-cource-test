import * as Auth from '../constants/Auth';

const initialState = {
  isLoggedIn: JSON.parse(window.localStorage.getItem('auth')) || false,
  authError: false,
  userID: null
};

export default function login(state = initialState, action) {
  switch (action.type) {
    case Auth.LOGIN_REQUEST:
      return {};
    case Auth.LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: action.payload.auth,
        authError: action.payload.error,
        userID: action.payload.userID
      };
    case Auth.LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: action.payload.auth,
        authError: action.payload.error,
        userID: null
      };
    case Auth.SERVER_ERROR:
      return{
        ...state,
        isLoggedIn: action.payload.auth,
        authError: action.payload.error,
        userID: null
      };
    default:
      return state;
  }
}
