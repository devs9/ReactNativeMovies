import {Navigation} from 'react-native-navigation'

export const goToMoviesDetails = (id: number, componentId: string) => () => {
  Navigation.push(componentId, {
    component: {name: 'MoviesDetail', passProps: id}
  })
}
