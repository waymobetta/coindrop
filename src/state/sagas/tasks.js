/**
 * @module Sagas/tasks
 * @desc task
 */

import { all, call, put, takeLatest } from 'redux-saga/effects';
import { ActionTypes } from '../constants'
import { getTasks } from '../../lib/api'

/**
 * tasks
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

// export function* completeTask(taskId) {
//   try {
//     const response = yield call(getTasks)

//     yield put({
//       type: ActionTypes.FETCH_TASKS_SUCCESS,
//       payload: response,
//     });
//   }
//   catch (error) {
//     /* istanbul ignore next */
//     yield put({
//       type: ActionTypes.FETCH_TASKS_ERROR,
//       payload: error,
//     });
//   }
// }

/**
 * Profile Sagas
 */
export default function* root() {
  yield all([
    takeLatest(ActionTypes.FETCH_TASKS, fetchTasks),
  ]);
}
