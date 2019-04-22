/* eslint-disable react/display-name */
import React from 'react';
import { Provider } from 'react-redux';
import { 
  createStore,
  applyMiddleware,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '.';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga);

export default ({ element }) => (
  <Provider store={store}>{element}</Provider>
);

