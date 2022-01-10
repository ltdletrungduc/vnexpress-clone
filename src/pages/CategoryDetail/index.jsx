import { unwrapResult } from '@reduxjs/toolkit'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getPostsInCat } from 'reducers/post.slice'
import * as S from './styled'

function CategoryDetail() {
  const { categoryId } = useParams()
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
  }, [dispatch, categoryId])
  return (
    <S.CategoryDetail>
      <S.Container className="container">
        <S.CategoryName>{categoryId}</S.CategoryName>
        <S.CategoryContent>
          {posts.map(post => {
            return <S.StyledMiniPost post={post} key={post.id} />
          })}
        </S.CategoryContent>
      </S.Container>
    </S.CategoryDetail>
  )
}

export default CategoryDetail
