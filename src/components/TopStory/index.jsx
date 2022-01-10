import PropTypes from 'prop-types'
import React from 'react'
import * as S from './styled'

function TopStory({ main, subs }) {
  return (
    <S.TopStory>
      <S.TopStoryContainer className="container">
        <S.LeftCol className="col-left col-medium">
          <S.MostPopularPost>
            <S.StyledMiniPost post={main} className="minipost-popolar" />
          </S.MostPopularPost>
          <S.SubNewsTop>
            {subs.map(post => {
              return (
                <S.StyledMiniPost
                  post={post}
                  key={post.id}
                  noPic
                  className="minipost-subnews"
                />
              )
            })}
          </S.SubNewsTop>
        </S.LeftCol>
        <S.RightCol className="col-right col-small">
          <img src="https://picsum.photos/300/450.jpg" alt="" />
        </S.RightCol>
      </S.TopStoryContainer>
    </S.TopStory>
  )
}

TopStory.propTypes = {
  main: PropTypes.object,
  subs: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.object)
  ])
}
export default TopStory
