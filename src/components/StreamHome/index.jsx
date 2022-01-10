import MiniCategory from 'components/MiniCategory'
import React from 'react'
import { useSelector } from 'react-redux'
import * as S from './styled'

function StreamHome({ posts }) {
  const categories = useSelector(state => state.category.categories)
  return (
    <S.StreamHome>
      <S.StreamHomeContainer className="container">
        <S.LeftCol className="col-small col-left">
          {posts.map(post => {
            return (
              <S.StyledMiniPost
                post={post}
                key={post.id}
                className="minipost-stream"
              />
            )
          })}
        </S.LeftCol>
        <S.RightCol className="col-medium col-right">
          {categories.map((category, index) => {
            return <MiniCategory key={category} categoryId={category} />
          })}
        </S.RightCol>
      </S.StreamHomeContainer>
    </S.StreamHome>
  )
}

export default StreamHome
