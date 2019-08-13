import { ActionTypes } from '../constants';

// const initialState = {
//   status: 'ready',
//   name: '',
//   email: '',
//   cognitoAuthUserId: null,
//   authorized: false,
// };

// HARDCODE
const initialState = {
  status: "ready",
  cognitoAuthUserId: "Fugiat dolorum accusantium eos accusantium.",
  id: "2",
  walletAddress: "0x25fcA94a22B2e9F017d3A19E8cb33a2f",
  authorized: true,
}

export default function user(state = initialState, payload) {
  const { payload: data, type } = payload;
  switch (type) {
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
        authorized: true,
      };
    case ActionTypes.USER_LOGIN_ERROR:
      return {
        ...state,
        status: 'error',
        authorized: false,
      };
    case ActionTypes.USER_LOGOUT:
      return {
        ...state,
        status: type,
      };
    case ActionTypes.USER_LOGOUT_SUCCESS:
      return {
        ...state,
        status: type,
        authorized: false,
      };
    case ActionTypes.USER_LOGOUT_ERROR:
      return {
        ...state,
        status: 'error',
      };
    default:
      return state;
  }
}
