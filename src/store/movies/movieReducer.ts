import {Reducer} from 'redux'
import {MovieTypes} from './actionTypes'
import {MoviesSate} from '../ts'

const initialState: MoviesSate = {
  list: [],
  error: '',
  isLoaded: false,
  isLoading: false
}

export const moviesReducer: Reducer<MoviesSate> = (state = initialState, {type, payload}) => {
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
