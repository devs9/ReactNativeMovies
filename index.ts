import {Navigation} from 'react-native-navigation'

import RootScreen from './src/screens/RootScreen'
import {rootNavigatorOpt, navigatorStyleOpt} from './src/screens/config'

RootScreen()
Navigation.setDefaultOptions(navigatorStyleOpt)
Navigation.events().registerAppLaunchedListener(async () => {
  await Navigation.setRoot(rootNavigatorOpt)
})
