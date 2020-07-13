import React from 'react'
import {Text, View} from 'react-native'

import {moviesStyleOpt} from '../config'
import {AppLayout} from '../../app'

const MoviesDetail = () => {
  return (
    <AppLayout>
      <View>
        <Text>MoviesDetail</Text>
      </View>
    </AppLayout>
  )
}

MoviesDetail.options = {
  ...moviesStyleOpt
}

export default MoviesDetail
