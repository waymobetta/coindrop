/**
 * @module Sagas/User
 * @desc User
 */

import { all, call, put, takeLatest } from 'redux-saga/effects';
import { ActionTypes } from '../constants'
import { getWallet, verifyWallet } from '../../lib/api'

/**
 * Login
 */

export function* fetchWallets() {
  try {
    const response = yield call(getWallet)
    const { wallets } = response;
    const data = {}

    wallets.forEach((wallet) => {
      data[wallet.walletType] = wallet.address;
      data.verified = wallet.verified;
    })

    yield put({
      type: ActionTypes.FETCH_WALLETS_SUCCESS,
      payload: data,
    });
  }
  catch (error) {
    /* istanbul ignore next */
    yield put({
      type: ActionTypes.FETCH_WALLETS_ERROR,
      payload: error,
    });
  }
}

export function* verifyWalletGenerator() {
  try {
    const response = yield call(verifyWallet)

    yield put({
      type: ActionTypes.VERIFY_WALLET_SUCCESS,
      payload: response,
    });
  }
  catch (error) {
    /* istanbul ignore next */
    yield put({
      type: ActionTypes.VERIFY_WALLET_ERROR,
      payload: error,
    });
  }
}

/**
 * Profile Sagas
 */
export default function* root() {
  yield all([
    takeLatest(ActionTypes.FETCH_WALLETS, fetchWallets),
    takeLatest(ActionTypes.VERIFY_WALLET, verifyWalletGenerator),
  ]);
}
