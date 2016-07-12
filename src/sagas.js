import {put, take, call} from 'redux-saga/effects'

import { NEWS_LOADED, FETCH_NEWS_SAGA } from './actions/types'

import {fetchNews} from './actions/index'

const wait = ms => (
  new Promise(resolve => {
    setTimeout(() => resolve(), ms)
  })
)

function* loadNews() {
  while(true){
    const news = yield fetchNews()
    yield put({type: NEWS_LOADED , payload: news})
    yield call(wait, 30000)
  }
}

export function* watchForLoadNews() {
  while(true) {
    yield take(FETCH_NEWS_SAGA)
    yield loadNews()
  }
}