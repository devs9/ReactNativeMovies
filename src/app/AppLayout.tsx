import React, {FC} from 'react'
import {SafeAreaView, StatusBar} from 'react-native'

const AppLayout: FC = ({children}) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>{children}</SafeAreaView>
    </>
  )
}

export default AppLayout
