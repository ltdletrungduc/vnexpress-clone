import styled from 'styled-components'
import MiniPost from 'components/MiniPost'
import {
  PostTitle,
  PostThumbnail,
  PostDescription
} from 'components/MiniPost/styled'

export const TopStory = styled.section``
export const TopStoryContainer = styled.div`
  display: flex;
  height: 52rem;
`
export const LeftCol = styled.div``
export const RightCol = styled.div`
  img {
    height: 100%;
    width: auto;
    object-fit: contain;
  }
`
export const StyledMiniPost = styled(MiniPost)`
  &.minipost-popolar {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 50px auto;
    height: 100%;
    ${PostThumbnail} {
      grid-column: 1;
      grid-row: 1 / span 2;
      img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        object-fit: contain;
      }
    }
    h3 {
      padding-left: 2rem;
      grid-column: 2;
      grid-row: 1;
    }
    ${PostDescription} {
      padding-left: 2rem;
      grid-column: 2;
      grid-row: 2;
    }
  }
  &.minipost-subnews {
    padding-right: 2rem;
    width: calc(100% / 3);
    ${PostDescription} {
      margin-top: 1rem;
    }
    &:last-child {
      position: relative;
      padding-right: 0;
      padding-left: 2rem;
      &::before {
        width: 2px;
        height: 100%;
        content: '';
        background: #e5e5e5;
        position: absolute;
        top: 0;
        left: 0;
      }
    }
  }
`
export const MostPopularPost = styled.div`
  height: 32rem;
  margin-bottom: 1.5rem;
`
export const SubNewsTop = styled.div`
  display: flex;
`
