import { ActionTypes } from '../constants';

const initialState = {
  status: 'ready',
  eth: '',
};

export default function user(state = initialState, payload) {
  const { payload: data, type } = payload;
  switch (type) {
    case ActionTypes.FETCH_WALLETS:
      return {
        ...state,
        status: 'running',
      };
    case ActionTypes.FETCH_WALLETS_SUCCESS:
      return {
        ...state,
        status: 'success',
        eth: data.eth,
      };
    case ActionTypes.FETCH_WALLETS_ERROR:
      return {
        ...state,
        status: 'error',
      };
    default:
      return state;
  }
}
