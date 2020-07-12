import WrappedNavigation from './WrappedNavigation'

export default function RootScreens() {
  WrappedNavigation('Movies', require('./Movies').default)
  WrappedNavigation('MoviesDetail', require('./Movies/MoviesDetail').default)
}
