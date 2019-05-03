/**
 * @module Sagas/Wallets
 * @desc wallets
 */

import { all, call, put, takeLatest } from 'redux-saga/effects';
import { ActionTypes } from '../constants'
import { getWallet, verifyWallet, updateWallet } from '../../lib/api'

/**
 * wallets
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

export function* verifyWalletGenerator({ payload }) {
  try {
    const data = {
      userID: payload.userId,
      taskID: payload.taskId,
      verifyObj: payload.verifyObj,
    }
    const response = yield call(verifyWallet, data)

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

export function* updateWalletGenerator({ payload }) {
  try {
    const data = {
      walletAddress: payload.walletAddress,
      walletType: payload.walletType,
      userId: payload.userId,
    }
    const response = yield call(updateWallet, data)

    yield all([
      put({
        type: ActionTypes.UPDATE_WALLET_SUCCESS,
        payload: response,
      }),
      put({
        type: ActionTypes.FETCH_WALLETS,
      })
    ])
  }
  catch (error) {
    /* istanbul ignore next */
    yield put({
      type: ActionTypes.UPDATE_WALLET_ERROR,
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
    takeLatest(ActionTypes.UPDATE_WALLET, updateWalletGenerator),
  ]);
}
