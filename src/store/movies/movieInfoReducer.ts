import {Reducer} from 'redux'
import {MovieTypes} from './actionTypes'
import {IMovieDetailState} from '../ts'

const initialState: IMovieDetailState = {
  error: '',
  title: '',
  rating: '',
  overview: '',
  releaseDate: '',
  img: false,
  isLoaded: false,
  isLoading: false
}

export const movieInfoReducer: Reducer<IMovieDetailState> = (
  state = initialState,
  {type, payload}
) => {
  switch (type) {
    case MovieTypes.startInfo:
      return {...state, isLoading: true}

    case MovieTypes.setId: {
      return {...initialState, id: payload}
    }

    case MovieTypes.successInfo:
      return {
        ...state,
        ...payload,
        isLoading: false,
        isLoaded: true
      }

    case MovieTypes.failureInfo:
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
