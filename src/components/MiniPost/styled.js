import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const PostContainer = styled.div``
export const PostTitle = styled(Link)`
  transition-duration: 200ms;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.7, 1, 0.7, 1);
  &:hover {
    color: #087cce;
  }
`
export const PostThumbnail = styled(Link)`
  position: relative;
  img {
    width: 100%;
    height: 100%;
  }
`
export const PostDescription = styled.div`
  overflow: hidden;
  span {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    line-clamp: 5;
    -webkit-box-orient: vertical;
  }
`
