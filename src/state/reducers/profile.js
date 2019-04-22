import { ActionTypes } from '../constants';

const initialState = {
  status: 'ready',
  name: '',
  email: '',
};

export default function user(state = initialState, payload) {
  const { payload: data, type } = payload;
  switch (type) {
    case ActionTypes.FETCH_PROFILE:
      return {
        ...state,
        status: type,
      };
    case ActionTypes.FETCH_PROFILE_SUCCESS:
      return {
        ...state,
        status: type,
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
