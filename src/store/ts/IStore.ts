import {IMoviesSate, IMovieDetailState} from './MoviesTS'
import {PersistState} from 'redux-persist'

export interface AppStore {
  movies: IMoviesSate
  moviesSimilar: IMoviesSate
  movieInfo: IMovieDetailState
}

export interface RootReducer extends AppStore {
  _persist: PersistState
}
