import React, {ComponentType} from 'react'
import {PersistGate} from 'redux-persist/integration/react'
import {Navigation} from 'react-native-navigation'
import {Provider} from 'react-redux'

import {store, persistor} from '../store'

export default function WrappedNavigation(name: string, Component: ComponentType) {
  Navigation.registerComponent(
    name,
    () => (props) => (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...props} />
        </PersistGate>
      </Provider>
    ),
    () => Component
  )
}
