import React, {FC, useEffect} from 'react'
import {Navigation, NavigationComponentProps} from 'react-native-navigation'
import {View, Text, FlatList, StyleSheet} from 'react-native'
import {useSelector, useDispatch} from 'react-redux'

import {AppLayout} from '../../app'
import {SkeletonCard} from '../../components'

import {getMovieSaga} from '../../store/movies/movieActions'
import {AppStore, Movie} from '../../store/ts'
// import {_w, _h} from '../../constants'

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    flexDirection: 'column'
  },
  title: {
    fontSize: 22,
    marginTop: 25,
    marginLeft: 30,
    marginBottom: 25,
    fontWeight: 'bold'
  },
  card: {
    height: 200
  },
  row: {
    flex: 1,
    // marginTop: 25,
    marginBottom: 10,
    paddingHorizontal: 30,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

const Movies: FC<NavigationComponentProps> = (props) => {
  const dispatch = useDispatch()
  const movies = useSelector((state: AppStore) => state.movies)

  // const goTo = () => {
  //   Navigation.push(props.componentId, {
  //     component: {
  //       name: 'MoviesDetail'
  //     }
  //   })
  // }

  const goToDetails = (id: number) => () => {
    Navigation.push(props.componentId, {
      component: {name: 'MoviesDetail', passProps: id}
    })
  }

  useEffect(() => {
    dispatch(getMovieSaga())
  }, [dispatch])

  const renderItem = ({item}: {item: Movie}) => {
    return (
      <SkeletonCard
        id={item.id}
        img={item.img}
        title={item.title}
        releaseDate={item.releaseDate}
        goToDetails={goToDetails(item.id)}
      />
    )
  }

  console.log('Movies', {props, movies})

  return (
    <AppLayout>
      <FlatList
        numColumns={2}
        data={movies.list}
        initialNumToRender={6}
        renderItem={renderItem}
        columnWrapperStyle={style.row}
        ListHeaderComponent={<Text style={style.title}>MOVIES</Text>}
        keyExtractor={(item) => String(item.id)}
      />
    </AppLayout>
  )
}

Movies.options = {
  topBar: {
    visible: false
  }
}

export default Movies

//         {movies.list.map((movie) => (
//             <SkeletonCard
//               id={movie.id}
//               key={movie.id}
//               img={movie.img}
//               title={movie.title}
//               releaseDate={movie.releaseDate}
//               goToDetails={goToDetails(movie.id)}
//             />
//           ))}
