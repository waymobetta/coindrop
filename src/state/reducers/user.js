import { ActionTypes } from '../constants';

const initialState = {
  status: 'ready',
  name: '',
  email: '',
  cognitoAuthUserId: null,
};

export default function user (state = initialState, payload) {
  const { payload: data, type } = payload;
  switch (type) {
    case ActionTypes.USER_LOGIN:
      return { 
        ...state, 
        status: type,
     };
    case ActionTypes.USER_LOGIN_SUCCESS:
      return {
        ...state,
        status: type,
        email: data.email,
        userId: data.userId,
      };
    case ActionTypes.USER_LOGIN_ERROR:
      return {
        ...state,
        status: 'error',
      };
    case ActionTypes.USER_SIGNUP:
      return {
        ...state,
        status: type,
      };
    case ActionTypes.USER_SIGNUP_SUCCESS:
      return {
        ...state,
        status: type,
        cognitoAuthUserId: data.cognitoAuthUserId,
        email: data.email,
      };
    case ActionTypes.USER_SIGNUP_ERROR:
      return {
        ...state,
        status: 'error',
      };
    default:
      return state;
  }
}
