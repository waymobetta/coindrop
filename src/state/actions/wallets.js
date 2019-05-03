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

export const updateWallet = (payload) => {
  return {
    type: ActionTypes.UPDATE_WALLET,
    payload
  }
}