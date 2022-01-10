import MiniCategory from 'components/MiniCategory'
import {
  CategoryMainPost,
  CategorySubPost,
  StyledMiniPost
} from 'components/MiniCategory/styled'
import { PostDescription } from 'components/MiniPost/styled'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const PostDetail = styled.div`
  font-size: 18px;
`
export const PostDetailContainer = styled.div`
  display: flex;
`
export const LeftCol = styled.div`
  padding-top: 2rem;
  padding-left: 65px;
  width: calc(100% / 3 * 2);
`
export const RightCol = styled.div`
  padding-top: 2rem;
  margin-bottom: 10rem;
  width: calc(100% / 3);
  img {
    width: 100%;
    height: auto;
    margin-bottom: 20px;
  }
`
export const PostHeader = styled.div``
export const PostMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
`
export const PostCategory = styled(Link)`
  text-transform: capitalize;
`
export const PostCreateTime = styled.div`
  margin-bottom: 10px;
  font-weight: 400;
  color: #666;
`
export const PostTitle = styled.h1`
  font-size: 32px;
  line-height: 150%;
  font-family: 'Merriweather', serif;
  font-weight: bold;
  margin-bottom: 15px;
`
export const PostShortIntro = styled.p`
  font-size: 18px;
  line-height: 160%;
  font-weight: 400;
  margin-bottom: 15px;
`
export const PostContent = styled.div`
  img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }
  .mock-text {
    > * {
      margin: 0 0 1em;
      line-height: 160%;
      text-rendering: optimizeSpeed;
    }
  }
`
export const PostAuthor = styled.div`
  text-align: right;
`
export const StyledMiniCategory = styled(MiniCategory)`
  && {
    position: sticky !important;
    position: -webkit-sticky !important;
    top: 70px;
    border-bottom: none;
    display: flex;
    flex-direction: column;
    ${StyledMiniPost} {
      padding: 0 0 12px;
      margin: 0 0 12px;
      font-size: 15px;
      position: relative;
      &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 1px;
        background-color: #e5e5e5;
      }
    }
    ${CategoryMainPost} {
      display: block;
      height: auto;
      ${StyledMiniPost} {
        width: 100%;
        display: flex;
        flex-direction: column-reverse;
        img {
          height: 180px;
          width: auto;
          object-fit: contain;
        }
      }
    }
    ${PostDescription} {
      display: none;
    }
    ${CategorySubPost} {
      flex-direction: column;
      ${StyledMiniPost} {
        width: 100%;
      }
    }
  }
`
