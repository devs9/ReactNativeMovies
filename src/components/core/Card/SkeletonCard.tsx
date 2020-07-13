import React, {FC, memo, useState, useEffect} from 'react'
import FastImage from 'react-native-fast-image'
import {Image} from 'react-native'

import Skeleton from '../Skeleton'
import * as SkeletonS from './styles'
import {moviesUrls} from '../../../api'
import {ISkeletonCard} from './ts'

const SkeletonCard: FC<ISkeletonCard> = ({goToDetails, title, img, releaseDate}) => {
  const [urlImg] = useState(`${moviesUrls.img()}/${img}`) // w500
  const [isLoadImg, setIsLoadImg] = useState(false)

  const goToMovieDetail = () => isLoadImg && goToDetails()

  const renderItem = (
    <>
      <FastImage resizeMode="cover" style={SkeletonS.S.image} source={{uri: urlImg}} />
      <SkeletonS.SkeletonCardTitle>
        <SkeletonS.SkeletonCardText>{isLoadImg && title}</SkeletonS.SkeletonCardText>
        <SkeletonS.SkeletonCardDate>{isLoadImg && releaseDate}</SkeletonS.SkeletonCardDate>
      </SkeletonS.SkeletonCardTitle>
    </>
  )

  useEffect(() => {
    Image.prefetch(urlImg).then(() => setIsLoadImg(true))
  }, [urlImg])

  return (
    <SkeletonS.SkeletonCardContainer onPress={goToMovieDetail}>
      {!isLoadImg ? <Skeleton /> : renderItem}
    </SkeletonS.SkeletonCardContainer>
  )
}

export default memo(SkeletonCard)
