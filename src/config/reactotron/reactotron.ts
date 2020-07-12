import AsyncStorage from '@react-native-community/async-storage'
import {reactotronRedux} from 'reactotron-redux'
import Reactotron from 'reactotron-react-native'
import sagaPlugin from 'reactotron-redux-saga'

import {config} from './config'

export const reactotron = Reactotron.configure({
  host: config.reactotronHost,
  name: 'RN-TS Movies'
})
  .use(sagaPlugin({}))
  .use(reactotronRedux({}))
  .setAsyncStorageHandler?.(AsyncStorage)
  .useReactNative({
    networking: {},
    asyncStorage: {ignore: ['persist:root']}
  })
  .connect()

Reactotron.clear?.()
console.tron = reactotron
