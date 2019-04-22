/**
 * @module Sagas/User
 * @desc User
 */

import { all, call, put, takeLatest } from 'redux-saga/effects';
import { ActionTypes } from '../constants'
import { getProfile } from '../../lib/api'

/**
 * Login
 */

export function* fetchProfile() {
  try {
    const response = yield call(getProfile)

    yield put({
      type: ActionTypes.FETCH_PROFILE_SUCCESS,
      payload: response,
    });
  }
  catch (error) {
    /* istanbul ignore next */
    yield put({
      type: ActionTypes.FETCH_PROFILE_ERROR,
      payload: error,
    });
  }
}

/**
 * Profile Sagas
 */
export default function* root() {
  yield all([
    takeLatest(ActionTypes.FETCH_PROFILE, fetchProfile),
  ]);
}
