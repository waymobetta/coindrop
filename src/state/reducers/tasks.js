import { ActionTypes } from '../constants';

const initialState = {
  status: 'ready',
  tasks: [],
};

export default function user(state = initialState, payload) {
  const { payload: data, type } = payload;
  switch (type) {
    case ActionTypes.FETCH_TASKS:
      return {
        ...state,
        status: 'running',
      };
    case ActionTypes.FETCH_TASKS_SUCCESS:
      return {
        ...state,
        status: 'success',
        tasks: data,
      };
    case ActionTypes.FETCH_TASKS_ERROR:
      return {
        ...state,
        status: 'error',
      };
    default:
      return state;
  }
}
