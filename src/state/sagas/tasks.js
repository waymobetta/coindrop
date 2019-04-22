/**
 * @module Sagas/User
 * @desc User
 */

import { all, call, put, takeLatest } from 'redux-saga/effects';
import { ActionTypes } from '../constants'
import { getTasks } from '../../lib/api'

/**
 * Login
 */

export function* fetchTasks() {
  try {
    const response = yield call(getTasks)

    yield put({
      type: ActionTypes.FETCH_TASKS_SUCCESS,
      payload: response,
    });
  }
  catch (error) {
    /* istanbul ignore next */
    yield put({
      type: ActionTypes.FETCH_TASKS_ERROR,
      payload: error,
    });
  }
}

/**
 * Profile Sagas
 */
export default function* root() {
  yield all([
    takeLatest(ActionTypes.FETCH_TASKS, fetchTasks),
  ]);
}
