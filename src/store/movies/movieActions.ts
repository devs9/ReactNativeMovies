import {MovieTypes} from './actionTypes'

export const movieStart = () => ({type: MovieTypes.start})
export const movieSuccess = (payload: any) => ({type: MovieTypes.success, payload})
export const movieFailure = (payload: string) => ({type: MovieTypes.failure, payload})

export const movieInfoStart = () => ({type: MovieTypes.startInfo})
export const setMovieId = (payload: string) => ({type: MovieTypes.setId, payload})
export const movieInfoSuccess = (payload: any) => ({type: MovieTypes.successInfo, payload})
export const movieInfoFailure = (payload: string) => ({type: MovieTypes.failureInfo, payload})
/**
 * Sagas
 */
export const getMovieSaga = () => ({type: MovieTypes.saga})
