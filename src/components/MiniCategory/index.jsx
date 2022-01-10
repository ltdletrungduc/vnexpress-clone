import { unwrapResult } from '@reduxjs/toolkit'
import { path } from 'constant/path'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getPostsInCat } from 'reducers/post.slice'

import * as S from './styled'

function MiniCategory({ categoryId, ...restProps }) {
  const dispatch = useDispatch()
  const [posts, setPosts] = useState([])
  useEffect(() => {
    dispatch(getPostsInCat(categoryId))
      .then(unwrapResult)
      .then(res => {
        let _arr = Object.values(res)
        let result = _arr.slice(0, _arr.length - 1)
        setPosts(result)
      })
  }, [dispatch])
  return (
    <S.MiniCategory {...restProps}>
      <S.CategoryNav>
        <S.CategoryLink to={`${path.category}/${categoryId}`}>
          {categoryId}
        </S.CategoryLink>
      </S.CategoryNav>
      <S.CategoryContent>
        <S.CategoryMainPost>
          {posts.slice(0, 2).map((post, index) => {
            return (
              <S.StyledMiniPost post={post} noPic={index !== 0} key={post.id} />
            )
          })}
        </S.CategoryMainPost>
        <S.CategorySubPost>
          {posts.slice(2, 5).map(post => {
            return <S.StyledMiniPost post={post} noPic key={post.id} />
          })}
        </S.CategorySubPost>
      </S.CategoryContent>
    </S.MiniCategory>
  )
}

export default MiniCategory
