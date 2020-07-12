import {put, takeEvery} from 'redux-saga/effects'
import queryString from 'query-string'

import {MovieTypes} from './actionTypes'
import {fetchRequest, moviesUrls, moviesOptions} from '../../api'
import {movieStart, movieSuccess, movieFailure} from './movieActions'

function* getMovies() {
  try {
    yield put(movieStart())
    const apiCall = yield fetchRequest(`${moviesUrls.root}?${queryString.stringify(moviesOptions)}`)
    const dataResponse = apiCall?.results
    const data = dataResponse.map((movie: any) => {
      return {
        id: movie.id,
        title: movie.title,
        img: movie.backdrop_path,
        releaseDate: movie.release_date.substring(0, 4)
      }
    })

    yield put(movieSuccess(data))
  } catch (e) {
    yield put(movieFailure('SAGA_ERROR__$getMovies'))
  }
}

export function* watcherMovies() {
  yield takeEvery(MovieTypes.saga, getMovies)
}
