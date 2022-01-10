import MiniPost from 'components/MiniPost'
import { PostDescription, PostThumbnail } from 'components/MiniPost/styled'
import styled from 'styled-components'

export const CategoryDetail = styled.div``
export const Container = styled.div`
  padding-top: 3rem;
`
export const CategoryName = styled.div`
  text-align: center;
  font-size: 40px;
  font-weight: bold;
  text-transform: uppercase;
  padding: 1.5rem 0;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: #ccc;
  }
`
export const CategoryContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 2rem;
`
export const StyledMiniPost = styled(MiniPost)`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: min-content auto;
  grid-column-gap: 1rem;
  height: 25rem;
  margin-bottom: 5rem;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2.5rem;
    width: 100%;
    height: 1px;
    background-color: #ccc;
  }
  &:last-child {
    &::after {
      display: none;
    }
  }
  h3 {
    grid-column: 1 / span 2;
    grid-row: 1;
    margin-bottom: 1rem;
  }
  ${PostDescription} {
    grid-column: 2;
    grid-row: 2;
  }
  ${PostThumbnail} {
    grid-column: 1;
    grid-row: 2;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      height: 100%;
      width: auto;
      max-width: 100%;
      object-fit: contain;
    }
  }
`
