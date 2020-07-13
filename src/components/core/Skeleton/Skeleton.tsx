import React, {FC} from 'react'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder'

import {imgSkeletonProps} from './config'
import {ISkeleton} from './ts'

const Skeleton: FC<ISkeleton> = ({skeletonProps = imgSkeletonProps}) => (
  <SkeletonPlaceholder>
    <SkeletonPlaceholder.Item {...skeletonProps} />
  </SkeletonPlaceholder>
)

export default Skeleton
