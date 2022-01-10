import React from 'react'
import { Link } from 'react-router-dom'
import LocationStamp from 'components/LocationStamp'

import * as S from './styled'
import PropTypes from 'prop-types'
import { path } from 'constant/path'
import { generatePostId } from 'utils/helpers'

function MiniPost({ post, noPic = false, ...restProps }) {
  const postURL = `${path.post}/${generatePostId(post)}`
  return (
    <S.PostContainer {...restProps}>
      <h3>
        <S.PostTitle to={postURL}>{post.title}</S.PostTitle>
      </h3>
      {!noPic && (
        <S.PostThumbnail to={postURL}>
          <img src={post.image} alt={post.title} />
        </S.PostThumbnail>
      )}
      <S.PostDescription>
        <Link to={postURL}>
          <span>
            <LocationStamp location="VietNam" />
            {post.description}
          </span>
        </Link>
      </S.PostDescription>
    </S.PostContainer>
  )
}

MiniPost.propTypes = {
  post: PropTypes.object.isRequired,
  noPic: PropTypes.bool
}
export default MiniPost
