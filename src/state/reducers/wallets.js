import { ActionTypes } from '../constants';

const initialState = {
  status: 'ready',
  eth: '',
  verified: ''
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
        verified: data.verified,
      };
    case ActionTypes.FETCH_WALLETS_ERROR:
      return {
        ...state,
        status: 'error',
      };
    case ActionTypes.VERIFY_WALLET:
      return {
        ...state,
        status: 'running',
      };
      case ActionTypes.VERIFY_WALLET_SUCCESS:
      return {
        ...state,
        status: 'success',
        verified: data.verified,
      };
    case ActionTypes.VERIFY_WALLET_ERROR:
      return {
        ...state,
        status: 'error',
      };
    case ActionTypes.UPDATE_WALLET:
      return {
        ...state,
        status: 'running',
      };
    case ActionTypes.UPDATE_WALLET_SUCCESS:
      return {
        ...state,
        status: 'success',
        eth: data.eth,
      };
    case ActionTypes.UPDATE_WALLET_ERROR:
      return {
        ...state,
        status: 'error',
      };
    default:
      return state;
  }
}
