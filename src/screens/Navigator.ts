import {Navigation} from 'react-native-navigation'

export const goToMoviesDetails = (componentId: string) => {
  Navigation.push(componentId, {
    component: {name: 'MoviesDetail'}
  })
}
