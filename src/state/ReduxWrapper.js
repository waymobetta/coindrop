/* eslint-disable react/display-name */
import React from 'react';
import { Provider } from 'react-redux';
import {
  createStore,
  applyMiddleware,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas';
import { initClient } from '../lib/api';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
)

if (typeof window !== 'undefined' && window) {
  initClient()
}

sagaMiddleware.run(rootSaga);

export default ({ element }) => (
  <Provider store={store}>{element}</Provider>
);

