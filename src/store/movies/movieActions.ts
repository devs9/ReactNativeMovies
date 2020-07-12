import {MovieTypes} from './actionTypes'

export const movieStart = () => ({type: MovieTypes.start})
export const movieSuccess = (payload: any) => ({type: MovieTypes.success, payload})
export const movieFailure = (payload: string) => ({type: MovieTypes.failure, payload})

/**
 * Sagas
 */
export const getMovieSaga = () => ({type: MovieTypes.saga})
