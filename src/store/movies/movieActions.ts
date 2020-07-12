import {MovieTypes} from './actionTypes'

/**
 * Movies Actions
 */
export const movieStart = () => ({type: MovieTypes.start})
export const movieSuccess = (payload: any) => ({type: MovieTypes.success, payload})
export const movieFailure = (payload: string) => ({type: MovieTypes.failure, payload})

/**
 * Movie Id Actions
 */
export const movieInfoStart = () => ({type: MovieTypes.startInfo})
export const setMovieId = (payload: string) => ({type: MovieTypes.setId, payload})
export const movieInfoSuccess = (payload: any) => ({type: MovieTypes.successInfo, payload})
export const movieInfoFailure = (payload: string) => ({type: MovieTypes.failureInfo, payload})

/**
 * Similar Movies Types
 */
export const movieSimilarStart = () => ({type: MovieTypes.startSimilar})
export const movieSimilarSuccess = (payload: any) => ({type: MovieTypes.successSimilar, payload})
export const movieSimilarFailure = (payload: string) => ({type: MovieTypes.failureSimilar, payload})

/**
 * Saga Actions
 */
export const getMovieSaga = () => ({type: MovieTypes.saga})
export const getMovieInfoSaga = (payload: string) => ({type: MovieTypes.sagaInfo, id: payload})
export const getMovieSimilarSaga = (payload: string) => ({
  type: MovieTypes.sagaSimilar,
  id: payload
})
