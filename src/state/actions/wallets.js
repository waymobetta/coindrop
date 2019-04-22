import { ActionTypes } from '../constants';

export const fetchWallets = () => {
  return {
    type: ActionTypes.FETCH_WALLETS
  }
}