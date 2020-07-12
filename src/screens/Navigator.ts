import {Navigation} from 'react-native-navigation'

export const goToMoviesDetails = (componentId: string) => {
  Navigation.push(componentId, {
    component: {
      name: 'MoviesDetail',
      options: {
        topBar: {
          visible: false
        }
      }
    }
  })
}

export const goBack = (componentId: string) => {
  Navigation.pop(componentId)
}
