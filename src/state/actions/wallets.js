import { ActionTypes } from '../constants';

export const fetchWallets = () => {
  return {
    type: ActionTypes.FETCH_WALLETS
  }
}

export const verifyWallet = (payload) => {
  return {
    type: ActionTypes.VERIFY_WALLET,
    payload
  }
}