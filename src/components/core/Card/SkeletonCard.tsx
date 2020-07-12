import React, {FC, useState} from 'react'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder'
import {Image, Text, TouchableOpacity, View, StyleSheet} from 'react-native'
import FastImage from 'react-native-fast-image'

import {_h, _w} from '../../../constants'
// import {moviesUrls} from '../../../api'

interface ISkeletonCard {
  id: number
  img: string
  title: string
  goToDetails: any
  releaseDate: string
  isTitleCard?: boolean
}
// export const prefetchImage = (url: string) => Image.prefetch(url)

const skeletonStyleProps = {
  height: 225,
  marginBottom: 10,
  borderRadius: 20,
  width: _w / 2 - 40
}
const style = StyleSheet.create({
  container: {
    position: 'relative'
  },
  titleImg: {
    width: _w,
    height: _h / 3
  },
  image: {
    height: 225,
    marginBottom: 10,
    borderRadius: 20,
    width: _w / 2 - 40
  },
  imageHide: {
    height: 225,
    marginBottom: 10,
    borderRadius: 20,
    width: _w / 2 - 40,
    backfaceVisibility: 'hidden'
  },
  title: {
    bottom: 10,
    opacity: 0.85,
    width: '100%',
    position: 'absolute',
    backgroundColor: '#fff',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  text: {
    paddingTop: 10,
    fontWeight: 'bold',
    paddingHorizontal: 20
  },
  date: {
    fontSize: 12,
    paddingBottom: 10,
    paddingHorizontal: 20
  }
})

const SkeletonCard: FC<ISkeletonCard> = ({
  // id,
  // isTitleCard,
  title,
  releaseDate,
  img,
  goToDetails
}) => {
  const [isLoadImg, setIsLoadImg] = useState(false)
  const [urlImg, setUrlImg] = useState('')

  const setLoad = () => setIsLoadImg(true)

  const renderImage = (
    <>
      <FastImage onLoad={setLoad} style={style.image} source={{uri: urlImg}} />
      <View style={style.title}>
        <Text style={isLoadImg && style.text}>{isLoadImg && title}</Text>
        <Text style={isLoadImg && style.date}>{isLoadImg && releaseDate}</Text>
      </View>
    </>
  )

  const renderSkeleton = (
    <SkeletonPlaceholder>
      <SkeletonPlaceholder.Item {...skeletonStyleProps} />
    </SkeletonPlaceholder>
  )

  const getImg = async () => {
    const apiCallImg = await fetch(`https://image.tmdb.org/t/p/original/${img}`)
    // const apiW = await prefetchImage(apiCallImg.url)
    // console.log(apiW)
    setUrlImg(apiCallImg.url)
  }

  const goToMovieDetail = () => {
    if (urlImg) {
      goToDetails()
    }
  }

  React.useEffect(() => {
    getImg()
  }, [])

  return (
    <TouchableOpacity onPress={goToMovieDetail} style={style.container}>
      {!urlImg ? renderSkeleton : renderImage}
    </TouchableOpacity>
  )
}

export default SkeletonCard
