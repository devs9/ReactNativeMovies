import {combineReducers, Reducer} from 'redux'
import {persistReducer} from 'redux-persist'

import {persistedConfig} from './config/persistedConfig'
import {moviesReducer, movieInfoReducer} from './movies'
import {RootReducer} from './ts'

const reducers = {
  movies: moviesReducer,
  movieInfo: movieInfoReducer
}
const combinedReducer = combineReducers(reducers)
const persistedReducer = persistReducer(persistedConfig, combinedReducer)

const rootReducer: Reducer<RootReducer> = (inputState, action) => {
  return persistedReducer(inputState, action)
}

export default rootReducer
