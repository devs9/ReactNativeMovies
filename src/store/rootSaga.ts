import {all, fork} from 'redux-saga/effects'
import {watcherMovies} from './movies/movieSagas'

export default function* rootSaga() {
  yield all([fork(watcherMovies)])
}
