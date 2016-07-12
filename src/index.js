import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise'
import createSagaMiddleware from 'redux-saga'

import {watchForLoadNews} from './sagas'
import App from './components/app'
import reducers from './reducers'

const sagaMiddleware = createSagaMiddleware()
const middlewares = [ promiseMiddleware, sagaMiddleware ]

const store = createStore(reducers, applyMiddleware(...middlewares))

sagaMiddleware.run(watchForLoadNews)

render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('#app'))
