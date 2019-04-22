import { ActionTypes } from '../constants';

const initialState = {
  status: 'ready',
  name: '',
  email: '',
};

export default function user (state = initialState, payload) {
  const { payload: data, type } = payload;
  switch (type) {
    case ActionTypes.USER_LOGIN:
      return { 
        ...state, 
        status: 'running',
     };
    case ActionTypes.USER_LOGIN_SUCCESS:
      return {
        ...state,
        status: 'success',
        email: data.email,
        userId: data.userId,
      };
    case ActionTypes.USER_LOGIN_ERROR:
      return {
        ...state,
        status: 'error',
      };
    default:
      return state;
  }
}
