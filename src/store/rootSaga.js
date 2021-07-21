// Watchers (listens any redux actions)

import { GET_USER } from 'store/sagas/userReducer'
import { handleGetUser } from 'store/sagas/userhandlers'
import { takeLatest } from 'redux-saga/effects'

//Looks for any action disptached


/*
  Alternatively you may use takeLatest apart form takeEvery.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
export function* watcherSaga(params) {
  yield takeLatest(GET_USER, handleGetUser)
}