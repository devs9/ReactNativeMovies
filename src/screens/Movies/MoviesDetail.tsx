import React, {FC, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import Icon from 'react-native-vector-icons/Ionicons'
import {NavigationComponentProps} from 'react-native-navigation'
import {TouchableOpacity, ScrollView, FlatList} from 'react-native'

import {AppLayout} from '../../app'
import * as MovieS from './styles'

import {goBack} from '../Navigator'
import {moviesUrls} from '../../api'
import {moviesStyleOpt} from '../config'
import {AppStore, IMovie, getMovieInfoSaga, getMovieSimilarSaga} from '../../store'

const MoviesDetail: FC<NavigationComponentProps> = ({componentId}) => {
  const dispatch = useDispatch()
  const film = useSelector((state: AppStore) => state.movieInfo)
  const similarMovies = useSelector((state: AppStore) => state.moviesSimilar)

  const handleGoBack = () => goBack(componentId)

  const renderItem = ({item}: {item: IMovie}) => (
    <MovieS.SimilarImageBlock key={item.id}>
      <MovieS.SimilarImg source={{uri: `${moviesUrls.img('w500')}/${item.img}`}} />
      <MovieS.SimilarText>{item.title}</MovieS.SimilarText>
    </MovieS.SimilarImageBlock>
  )

  useEffect(() => {
    if (film.id) {
      dispatch(getMovieInfoSaga(String(film.id)))
      dispatch(getMovieSimilarSaga(String(film.id)))
    }
  }, [dispatch, film.id])

  return (
    <AppLayout>
      <MovieS.MoviesContainer>
        <TouchableOpacity style={MovieS.S.zIndex9} onPress={handleGoBack}>
          <MovieS.Back>
            <Icon name="arrow-back-outline" size={15} color="#000" />
          </MovieS.Back>
        </TouchableOpacity>
        <MovieS.Banner>
          <MovieS.BannerImg source={{uri: `${moviesUrls.img('w500')}/${film.img}`}} />
          <MovieS.RatingContainer>
            <MovieS.RatingText>{`${film.rating}%`}</MovieS.RatingText>
          </MovieS.RatingContainer>
        </MovieS.Banner>
        <MovieS.OverviewContainer>
          <MovieS.OverViewDate>{film.releaseDate}</MovieS.OverViewDate>
          <MovieS.OverViewTitle>{film.title}</MovieS.OverViewTitle>
          <MovieS.Title>OVERVIEW:</MovieS.Title>
          <ScrollView>
            <MovieS.OverViewText>{film.overview}</MovieS.OverViewText>
          </ScrollView>
        </MovieS.OverviewContainer>
        <MovieS.SimilarContainer>
          <MovieS.Title>SIMILAR MOVIES:</MovieS.Title>
          <FlatList
            horizontal
            initialNumToRender={1}
            renderItem={renderItem}
            data={similarMovies.list}
            keyExtractor={(item) => String(item.id)}
          />
        </MovieS.SimilarContainer>
      </MovieS.MoviesContainer>
    </AppLayout>
  )
}

MoviesDetail.options = {
  ...moviesStyleOpt
}

export default MoviesDetail
