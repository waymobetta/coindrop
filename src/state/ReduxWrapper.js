/* eslint-disable react/display-name */
import React from 'react';
import { Provider } from 'react-redux';
import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas';
import { initClient } from '../lib/api';

let composeEnhancer = compose

if (typeof window !== 'undefined' && window) {
  initClient()
  composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
}

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeEnhancer(
    applyMiddleware(sagaMiddleware),
  )
)


sagaMiddleware.run(rootSaga);

export default ({ element }) => (
  <Provider store={store}>{element}</Provider>
);

