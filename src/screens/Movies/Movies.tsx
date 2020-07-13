import React, {FC, useEffect} from 'react'
import {Text, FlatList} from 'react-native'
import {useSelector, useDispatch} from 'react-redux'
import {NavigationComponentProps} from 'react-native-navigation'

import {moviesStyleOpt} from '../config'
import {goToMoviesDetails} from '../Navigator'
import {getMovieSaga, setMovieId, AppStore, Movie} from '../../store'

import {AppLayout} from '../../app'
import {SkeletonCard} from '../../components'
import {S} from './styles'

const Movies: FC<NavigationComponentProps> = (props) => {
  const dispatch = useDispatch()
  const movies = useSelector((state: AppStore) => state.movies)

  const goToMovieDetail = (id: string) => () => {
    goToMoviesDetails(props.componentId)
    dispatch(setMovieId(id))
  }

  const renderItem = ({item}: {item: Movie}) => (
    <SkeletonCard {...item} goToDetails={goToMovieDetail(String(item.id))} />
  )

  useEffect(() => {
    !movies.isLoaded && dispatch(getMovieSaga())
  }, [dispatch, movies.isLoaded])

  return (
    <AppLayout>
      <FlatList
        numColumns={2}
        data={movies.list}
        renderItem={renderItem}
        columnWrapperStyle={S.columnWrapper}
        keyExtractor={(item) => String(item.id)}
        ListHeaderComponent={<Text style={S.title}>MOVIES</Text>}
      />
    </AppLayout>
  )
}

Movies.options = {
  ...moviesStyleOpt
}

export default Movies
