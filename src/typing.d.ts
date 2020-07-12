import {Options} from 'react-native-navigation'

import {reactotron} from './config/reactotron'

declare global {
  interface Console {
    tron: typeof reactotron
  }
}

declare module 'react' {
  interface FunctionComponent<P = {}> {
    options?: Options
  }
}
