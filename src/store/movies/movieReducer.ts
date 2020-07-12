import {Reducer} from 'redux'
import {MovieTypes} from './actionTypes'
import {IMoviesSate} from '../ts'

export const initialState: IMoviesSate = {
  list: [],
  error: '',
  isLoaded: false,
  isLoading: false
}

export const moviesReducer: Reducer<IMoviesSate> = (state = initialState, {type, payload}) => {
  switch (type) {
    case MovieTypes.start:
      return {...state, isLoading: true}

    case MovieTypes.success:
      return {
        ...state,
        error: '',
        list: payload,
        isLoading: false,
        isLoaded: true
      }

    case MovieTypes.failure:
      return {
        ...state,
        error: payload,
        isLoading: false,
        isLoaded: false
      }

    default:
      return state
  }
}
