import React from 'react'
import {Text, View, ScrollView} from 'react-native'

const MoviesDetail = (props: any) => {
  console.log('MoviesDetail', {props})

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View>
        <Text>MoviesDetail</Text>
      </View>
    </ScrollView>
  )
}

MoviesDetail.options = {
  componentId: 'Settings 33',
  topBar: {
    title: {
      text: 'Settings 111'
    }
  }
}

export default MoviesDetail
