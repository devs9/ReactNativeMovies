import styled from 'styled-components/native'

/**
 *  Containers
 */
export const SkeletonCardContainer = styled.TouchableOpacity`
  position: relative;
`
export const SkeletonCardTitle = styled.View`
  width: 100%;
  bottom: 10px;
  opacity: 0.85;
  position: absolute;
  background-color: #fff;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`

/**
 *  Texts
 */
export const SkeletonCardText = styled.Text`
  margin: 0 20px;
  padding-top: 10px;
  font-weight: bold;
`
export const SkeletonCardDate = styled.Text`
  font-size: 12px;
  padding: 0 20px 10px;
`
