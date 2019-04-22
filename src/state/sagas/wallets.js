/**
 * @module Sagas/User
 * @desc User
 */

import { all, call, put, takeLatest } from 'redux-saga/effects';
import { ActionTypes } from '../constants'
import { getWallet } from '../../lib/api'

/**
 * Login
 */

export function* fetchWallets() {
  try {
    const response = yield call(getWallet)
    console.log('wallet response: ', response)

    yield put({
      type: ActionTypes.FETCH_WALLETS_SUCCESS,
      payload: response,
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

/**
 * Profile Sagas
 */
export default function* root() {
  yield all([
    takeLatest(ActionTypes.FETCH_WALLETS, fetchWallets),
  ]);
}
