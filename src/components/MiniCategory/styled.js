import MiniPost from 'components/MiniPost'
import {
  PostDescription,
  PostThumbnail,
  PostTitle
} from 'components/MiniPost/styled'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const MiniCategory = styled.div`
  padding-bottom: 15px;
  border-bottom: 1px solid #bdbdbd;
  margin-bottom: 15px;
`
export const CategoryNav = styled.div`
  display: flex;
  font-size: 18px;
  font-weight: 700;
  color: rgb(34, 34, 34);
  margin-bottom: 2rem;
`

export const CategoryLink = styled(Link)`
  text-transform: capitalize;
  position: relative;
  transition: color 0.2s;
  &::before {
    content: '';
    width: 100%;
    height: 1px;
    background: #9f224e;
    position: absolute;
    left: 0;
    bottom: -5px;
    transition: background 0.2s;
  }
  &:hover {
    color: #087cce;
    &::before {
      background: #087cce;
    }
  }
`
export const CategoryContent = styled.div`
  height: 300px;
`
export const StyledMiniPost = styled(MiniPost)``
export const CategoryMainPost = styled.div`
  display: flex;
  height: 190px;
  ${StyledMiniPost} {
    height: 100%;
    display: grid;
    grid-template-rows: 5rem auto;
    grid-column-gap: 2rem;
    overflow: hidden;
    ${PostTitle} {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    &:first-child {
      width: calc(100% / 3 * 2);
      flex-shrink: 0;
      grid-template-columns: 1fr 1fr;
      padding-right: 2rem;
      ${PostThumbnail} {
        grid-column: 1;
        grid-row: 1 / span 2;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        img {
          height: 100%;
          width: auto;
          object-fit: contain;
        }
      }
      ${PostDescription} {
        -webkit-line-clamp: 4;
        line-clamp: 4;
      }
    }
    &:last-child {
      padding-left: 2rem;
      position: relative;
      &::before {
        width: 1px;
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
export const CategorySubPost = styled.div`
  display: flex;
  justify-content: flex-start;
  position: relative;
  &::after {
    width: 100%;
    height: 1px;
    content: '';
    background: #e5e5e5;
    position: absolute;
    top: 15px;
    left: 0;
  }
  ${StyledMiniPost} {
    width: calc(100% / 3);
    padding-top: 10px;
    margin-top: 15px;
    position: relative;
    margin-bottom: 0;
    padding-bottom: 0;
    border: none;
    padding-left: 15px;
    ${PostDescription} {
      display: none;
    }
  }
`
