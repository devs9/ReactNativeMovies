import {MoviesSate, MovieDetailState} from './MoviesTS'
import {PersistState} from 'redux-persist'

export interface AppStore {
  movies: MoviesSate
  moviesInfo: MovieDetailState
}

export interface RootReducer extends AppStore {
  _persist: PersistState
}
