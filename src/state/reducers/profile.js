import { ActionTypes } from '../constants';

// const initialState = {
//   status: 'ready',
//   name: '',
//   email: '',
// };

// HARDCODE

const initialState = {
  status: 'ready',
  name: 'huobi',
  email: "huobi@huobi.com",
}

export default function user(state = initialState, payload) {
  const { payload: data, type } = payload;
  switch (type) {
    case ActionTypes.FETCH_PROFILE:
      return {
        ...state,
        status: 'running',
      };
    case ActionTypes.FETCH_PROFILE_SUCCESS:
      return {
        ...state,
        status: 'success',
        email: data.email,
      };
    case ActionTypes.FETCH_PROFILE_ERROR:
      return {
        ...state,
        status: 'error',
      };
    default:
      return state;
  }
}
