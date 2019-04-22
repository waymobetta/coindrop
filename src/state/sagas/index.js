import { all, fork } from 'redux-saga/effects';
import user from './user';
import profile from './profile';
import wallets from './wallets';
import tasks from './tasks';
/**
 * rootSaga
 */
export default function* root() {
  yield all([
    fork(user),
    fork(profile),
    fork(wallets),
    fork(tasks),
  ]);
}
