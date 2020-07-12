import {Reducer} from 'redux'

import {initialState} from './movieReducer'
import {MovieTypes} from './actionTypes'
import {IMoviesSate} from '../ts'

export const movieSimilarReducer: Reducer<IMoviesSate> = (
  state = initialState,
  {type, payload}
) => {
  switch (type) {
    case MovieTypes.startSimilar:
      return {...state, isLoading: true}

    case MovieTypes.successSimilar:
      return {
        ...state,
        error: '',
        list: payload,
        isLoading: false,
        isLoaded: true
      }

    case MovieTypes.failureSimilar:
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
