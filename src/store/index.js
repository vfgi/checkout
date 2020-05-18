import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import  reducers from './ducks';

const middlewares = []

const sagaMiddleware = createSagaMiddleware()

middlewares.push(sagaMiddleware)

export const store = createStore(
    reducers,
    compose(
      applyMiddleware(...middlewares),
    )
  )