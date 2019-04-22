/**
 * @module Sagas/User
 * @desc User
 */

import { all, call, put, takeLatest } from 'redux-saga/effects';
import { ActionTypes } from '../constants'
import { login, signup, logout } from '../../lib/api'

/**
 * Login
 */

export function* userLogin({ user }) {
  try {
    const response = yield call(login, user)
    response.email = user.email

    yield put({
      type: ActionTypes.USER_LOGIN_SUCCESS,
      payload: response,
    });
  }
  catch (error) {
    /* istanbul ignore next */
    yield put({
      type: ActionTypes.USER_LOGIN_ERROR,
      payload: error,
    });
  }
}

export function* userSignup({ user }) {
  try {
    const response = yield call(signup, user)
    response.email = user.email

    yield put({
      type: ActionTypes.USER_SIGNUP_SUCCESS,
      payload: response,
    });
  }
  catch (error) {
    /* istanbul ignore next */
    yield put({
      type: ActionTypes.USER_SIGNUP_ERROR,
      payload: error,
    });
  }
}

export function* userLogout() {
  try {
    yield call(logout)
    yield put({
      type: ActionTypes.USER_LOGOUT_SUCCESS
    })
  } catch (error) {
    yield put({
      type: ActionTypes.USER_LOGOUT_ERROR
    })
  }
}

/**
 * User Sagas
 */
export default function* root() {
  yield all([
    takeLatest(ActionTypes.USER_SIGNUP, userSignup),
    takeLatest(ActionTypes.USER_LOGIN, userLogin),
    takeLatest(ActionTypes.USER_LOGOUT, userLogout),
  ]);
}
