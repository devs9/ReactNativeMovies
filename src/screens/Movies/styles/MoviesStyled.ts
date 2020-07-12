import styled from 'styled-components/native'
import {_w, _h} from '../../../constants'

/**
 *  Containers
 */
export const MoviesContainer = styled.View`
  background-color: #1d1d1d;
  width: ${_w}px;
  height: ${_h}px;
`
export const OverviewContainer = styled.View`
  flex: 0.8;
  z-index: 1;
`
export const SimilarContainer = styled.View`
  flex: 1.4;
`
export const SimilarImageBlock = styled.View`
  margin: 25px 20px 0;
  width: ${_w - 40}px;
`
export const RatingContainer = styled.View`
  width: 80px;
  height: 80px;
  z-index: 10;
  right: 20px;
  bottom: -40px;
  border-radius: 50px;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  background-color: #484848;
`
export const Back = styled.View`
  top: 10px;
  left: 10px;
  z-index: 9;
  width: 25px;
  height: 25px;
  opacity: 0.9;
  border-radius: 25px;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  background-color: #fff;
`
export const Banner = styled.View`
  width: ${_w}px;
  flex: 0.8;
`

/**
 *  Texts
 */
export const RatingText = styled.Text`
  color: #fff;
  font-size: 22px;
  font-weight: bold;
`
export const OverViewText = styled.Text`
  color: #e6e6e6;
  font-size: 16px;
  padding: 0 20px;
  margin-top: 20px;
`
export const OverViewTitle = styled.Text`
  color: #fff;
  font-size: 20px;
  padding: 0 20px;
  margin-top: 10px;
  font-weight: bold;
`
export const Title = styled(OverViewTitle)`
  color: #fff;
  font-size: 20px;
  padding: 0 20px;
  margin-top: 30px;
  font-weight: bold;
`
export const OverViewDate = styled(OverViewTitle)`
  font-size: 16px;
  margin-top: 20px;
  font-weight: 300;
`
export const SimilarText = styled(OverViewTitle)`
  font-size: 16px;
  margin-top: 20px;
  font-weight: bold;
`

/**
 *  Images
 */
export const BannerImg = styled.Image`
  width: ${_w}px;
  height: 100%;
`
export const SimilarImg = styled.Image`
  width: 100%;
  height: 60%;
  border-radius: 15px;
`
