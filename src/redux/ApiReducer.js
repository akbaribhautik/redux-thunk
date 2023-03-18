import ACTION_TYPES from './ActionTypes';

const initialState = {
  loading: false,
  data: '',
  error: '',
  loginload: false,
  loginData: '',
  loginError: ''
};

const apiReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.API_PENDING:
      return {
        ...state,
        loading: true,
      };
    case ACTION_TYPES.API_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case ACTION_TYPES.API_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case ACTION_TYPES.LOGIN_PENDING:
      return {
        ...state,
        loginload: true,
      };
    case ACTION_TYPES.LOGIN_SUCCESS:
      return {
        ...state,
        loginData: action.payload,
        loginload: false,
      };
    case ACTION_TYPES.LOGIN_ERROR:
      return {
        ...state,
        loginError: action.payload,
        loginload: false,
      }
    case ACTION_TYPES.CLEAR_STATE:
      return initialState

    default:
      return state;
  }
};

export default apiReducer;