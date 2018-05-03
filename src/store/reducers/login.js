const initialState = {
  isLoggedIn: localStorage.getItem('auth') || false,
  authError: false
};

export default function login (state = initialState, action) {
  switch (action.type) {
    case 'USER_LOGIN_SUCCESS':
      localStorage.setItem('auth', true);
      return {
        ...state,
        isLoggedIn: action.payload.auth,
        authError: action.payload.error
      };
      case 'USER_LOGIN_FAIL':
        localStorage.setItem('auth', false);
        return {
          ...state,
            isLoggedIn: action.payload.auth,
            authError: action.payload.error
        };
    default:
      localStorage.setItem('auth', false);
      return state;
  }
}