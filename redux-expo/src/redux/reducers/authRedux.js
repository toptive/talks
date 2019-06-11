
const LOGIN = 'auth/LOGIN';
const LOGOUT = 'auth/LOGOUT';
const RESQUEST_ERROR = 'auth/RESQUEST_ERROR';
const RESQUEST = 'auth/RESQUEST';

const initialState = {
  isFeching: false,
  user: null,
  token: null,
  isLogin: false,
  errorMessage: '',
};


export default (state = initialState, action) => {
  switch (action.type) {
    case RESQUEST:
      return { ...state, isFeching: true, isLogin: false };
    case LOGIN:
      return {
        ...state,
        isLogin: true,
        token: action.payload.token,
        user: action.payload.user,
        isFeching: false
      };
    case LOGOUT:
      return {
        ...state,
        isLogin: false,
        token: null,
        user: null,
        isFeching: false,
        errorMessage: ''
      };
    case RESQUEST_ERROR:
      return {
        ...state,
        errorMessage: action.payload.error,
        isFeching: false
      };
    default:
      return state;
  }
};

const login = (token, user) => ({
  type: LOGIN,
  payload: {
    token,
    user
  }
});

const editProfile = user => ({
  type: EDIT,
  payload: {
    user
  }
});

const logout = () => ({
  type: LOGOUT
});

const request = () => ({
  type: RESQUEST
});

const requestError = error => ({
  type: RESQUEST_ERROR,
  payload: {
    error
  }
});

export const signin = (user, password) => dispatch => {
  dispatch(request());
  setTimeout(() => {
    if (user == 'Admin' && password == 'Admin') {
      dispatch(login('token', {firstName: 'Admin', lastName: 'pepe'}));
    } else {
       dispatch(requestError('Invalid credentials'));
    }
  }, 3000);
};

export const signout = () => dispatch => {
  dispatch(logout());
};


