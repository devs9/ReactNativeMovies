import {MoviesSate} from './MoviesTS'
import {PersistState} from 'redux-persist'

export interface AppStore {
  movies: MoviesSate
}

export interface RootReducer extends AppStore {
  _persist: PersistState
}
