import {put, takeLatest} from 'redux-saga/effects'
import queryString from 'query-string'
import {AnyAction} from 'redux'

import * as Actions from './movieActions'
import {MovieTypes as Types} from './actionTypes'
import {fetchRequest, moviesUrls, moviesOpt} from '../../api'
import {IMovie, IMovieInfo, MovieResponse} from '../ts'

function* getMovies() {
  try {
    yield put(Actions.movieStart())
    const url = `${moviesUrls.root}?${queryString.stringify(moviesOpt.movies)}`
    const apiCall = yield fetchRequest(url)
    const dataResponse = apiCall?.results?.map(
      (movie: MovieResponse): IMovie => ({
        id: movie.id,
        title: movie.title,
        img: movie.backdrop_path,
        releaseDate: movie.release_date.substring(0, 4)
      })
    )

    yield put(Actions.movieSuccess(dataResponse))
  } catch (e) {
    yield put(Actions.movieFailure('SAGA_ERROR__getMovies'))
  }
}

function* getMovieInfo({id}: AnyAction) {
  try {
    yield put(Actions.movieInfoStart())

    const url = `${moviesUrls.id}${id}?${queryString.stringify(moviesOpt.movieInfo)}`
    const apiCall = yield fetchRequest(url)

    const dataResponse: Omit<IMovieInfo, 'id'> = {
      title: apiCall.title,
      overview: apiCall.overview,
      img: apiCall.backdrop_path,
      rating: apiCall.vote_average,
      releaseDate: apiCall.release_date.substring(0, 4)
    }

    yield put(Actions.movieInfoSuccess(dataResponse))
  } catch (e) {
    yield put(Actions.movieInfoFailure('SAGA_ERROR__getMovieInfo'))
  }
}

function* getMoviesSimilar({id}: AnyAction) {
  try {
    yield put(Actions.movieSimilarStart())

    const url = `${moviesUrls.similar(id)}?${queryString.stringify(moviesOpt.moviesSimilar)}`
    const apiCall = yield fetchRequest(url)
    const dataResponse = apiCall?.results?.map(
      (movie: MovieResponse): IMovie => ({
        id: movie.id,
        title: movie.title,
        img: movie.backdrop_path,
        releaseDate: movie.release_date.substring(0, 4)
      })
    )

    yield put(Actions.movieSimilarSuccess(dataResponse))
  } catch (e) {
    yield put(Actions.movieSimilarFailure('SAGA_ERROR__getMoviesSimilar'))
  }
}

export function* watcherMovies() {
  yield takeLatest(Types.saga, getMovies)
  yield takeLatest(Types.sagaInfo, getMovieInfo)
  yield takeLatest(Types.sagaSimilar, getMoviesSimilar)
}
