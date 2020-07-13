import React, {FC} from 'react'
import {SafeAreaView, StatusBar, StatusBarStyle} from 'react-native'

const AppLayout: FC<{backgroundColor?: string; barStyle?: StatusBarStyle}> = ({
  children,
  backgroundColor,
  barStyle = 'dark-content'
}) => {
  return (
    <>
      <StatusBar barStyle={barStyle} />
      <SafeAreaView style={{backgroundColor}}>{children}</SafeAreaView>
    </>
  )
}

export default AppLayout
