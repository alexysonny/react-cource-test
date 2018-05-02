const initialState = {
  isLoggedIn: localStorage.getItem('auth') || false
};

export default function login (state = initialState, action) {
  switch (action.type) {
    case 'USER_LOGIN':
      localStorage.setItem('auth', true);
      return { ...state, isLoggedIn: action.payload};
    default:
      localStorage.setItem('auth', false);
      return state;
  }
}