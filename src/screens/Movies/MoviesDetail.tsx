import React, {FC} from 'react'
import {Text, View} from 'react-native'
import {useSelector, useDispatch} from 'react-redux'
import {NavigationComponentProps} from 'react-native-navigation'

import {moviesStyleOpt} from '../config'
import {AppLayout} from '../../app'
import {AppStore} from '../../store'
// import {moviesUrls} from '../../api'

const MoviesDetail: FC<NavigationComponentProps> = () => {
  const dispatch = useDispatch()
  const film = useSelector((state: AppStore) => state.moviesInfo)

  // const goBack = () => {
  //   Navigation.pop();
  // }

  // const getMovie = async () => {
  //   const url = `${moviesUrls.id}${this.props.id}?${queryString.stringify(moviesIdOptions)}`;
  //   const apiCall = await fetchRequest(url);
  //   const film = {
  //     title: apiCall.title,
  //     overview: apiCall.overview,
  //     img: apiCall.backdrop_path,
  //     rating: apiCall.vote_average,
  //     date: apiCall.release_date.substring(0, 4)
  //   };
  //
  //   this.setState(state => ({...state, film}));
  // }
  //

  // getSimilarMovies = async () => {
  //   const url = `${moviesUrls.similar(this.props.id)}?${queryString.stringify(similarMoviesOptions)}`;
  //   const apiCall = await fetchRequest(url);
  //   const data = apiCall.results.map((movie: any) => {
  //     return {
  //       id: movie.id,
  //       title: movie.title,
  //       img: movie.backdrop_path
  //     };
  //   });
  //
  //   this.setState(state => ({...state, similar: data, isLoadSimilar: true}));
  // }
  //
  console.log({film})

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
