import {put, takeEvery} from 'redux-saga/effects'
import queryString from 'query-string'

import * as Actions from './movieActions'
import {MovieTypes as Types} from './actionTypes'
import {fetchRequest, moviesUrls, moviesOptions} from '../../api'

function* getMovies() {
  try {
    yield put(Actions.movieStart())
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

    yield put(Actions.movieSuccess(data))
  } catch (e) {
    yield put(Actions.movieFailure('SAGA_ERROR__getMovies'))
  }
}

function* getMovieInfo() {
  try {
    yield put(Actions.movieInfoStart())

    // const apiCall =
    // yield fetchRequest(`${moviesUrls.root}?${queryString.stringify(moviesOptions)}`)
    // const dataResponse = apiCall?.results
    // const data = dataResponse.map((movie: any) => {
    //   return {
    //     id: movie.id,
    //     title: movie.title,
    //     img: movie.backdrop_path,
    //     releaseDate: movie.release_date.substring(0, 4)
    //   }
    // })

    // yield put(Actions.movieSuccess(data))
  } catch (e) {
    yield put(Actions.movieInfoFailure('SAGA_ERROR__getMovieInfo'))
  }
}

export function* watcherMovies() {
  yield takeEvery(Types.saga, getMovies)
  yield takeEvery(Types.sagaInfo, getMovieInfo)
}
