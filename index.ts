import {Navigation} from 'react-native-navigation'

if (__DEV__) {
  import('./src/config/reactotron/reactotron')
}
import RootScreen, {rootNavigatorOpt, navigatorStyleOpt} from './src/screens'

RootScreen()
Navigation.setDefaultOptions(navigatorStyleOpt)
Navigation.events().registerAppLaunchedListener(async () => {
  await Navigation.setRoot(rootNavigatorOpt)
})
