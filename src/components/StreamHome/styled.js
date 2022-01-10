import MiniPost from 'components/MiniPost'
import styled from 'styled-components'
import { PostThumbnail, PostDescription } from 'components/MiniPost/styled'

export const StreamHome = styled.section``
export const StreamHomeContainer = styled.div`
  display: flex;
  position: relative;
  padding: 20px 15px 0;
  margin-top: 20px;
  &::before {
    width: calc(100% - 30px);
    background: #e5e5e5;
    height: 1px;
    position: absolute;
    top: 0;
    left: 15px;
    content: '';
  }
`
export const LeftCol = styled.div`
  position: relative;
  &::before {
    content: '';
    width: 1px;
    height: 100%;
    background: #e5e5e5;
    position: absolute;
    top: 0;
    right: 0;
  }
`
export const StyledMiniPost = styled(MiniPost)`
  &.minipost-stream {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: min-content auto;
    grid-column-gap: 1rem;
    height: 18rem;
    border-top: 1px solid #e5e5e5;
    margin-top: 15px;
    padding-top: 15px;
    &:first-child {
      border-top: none;
      margin-top: 0;
      padding-top: 0;
    }
    h3 {
      grid-column: 1 / span 2;
      grid-row: 1;
      margin-bottom: 1rem;
    }
    ${PostDescription} {
      grid-column: 2;
      grid-row: 2;
      span {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        line-clamp: 4;
        -webkit-box-orient: vertical;
      }
    }
    ${PostThumbnail} {
      grid-column: 1;
      grid-row: 2;
      overflow: hidden;
      img {
        position: absolute;
        max-width: 100%;
        max-height: 100%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        object-fit: contain;
      }
    }
  }
`
export const RightCol = styled.div`
  padding-top: 30px;
`
