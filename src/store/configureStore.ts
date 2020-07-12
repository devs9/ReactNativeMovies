import {applyMiddleware, createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import {persistStore} from 'redux-persist'

import rootSaga from './rootSaga'
import rootReducer from './rootReducer'
import {reactotron} from '../config'

let sagaMonitor
const middleware = []

/**
 * Reactotron
 */
if (__DEV__) {
  if (reactotron?.createSagaMonitor) {
    sagaMonitor = reactotron.createSagaMonitor()
  }

  reactotron?.createEnhancer && middleware.push(reactotron.createEnhancer())
}

/**
 * Redux saga
 */
const sagaMiddleware = createSagaMiddleware({sagaMonitor})
middleware.push(applyMiddleware(sagaMiddleware))

/**
 * Redux
 */
export const store = createStore(rootReducer, composeWithDevTools(...middleware))
export const persistor = persistStore(store, {})

sagaMiddleware.run(rootSaga)
