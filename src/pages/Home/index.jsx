import React, { useEffect } from 'react'
import TopStory from 'components/TopStory'
import SteamHome from 'components/StreamHome'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getPosts } from 'reducers/post.slice'
import { unwrapResult } from '@reduxjs/toolkit'

import * as S from './styled'

function Home() {
  const [posts, setPosts] = useState([])
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getPosts())
      .then(unwrapResult)
      .then(res => {
        let _arr = Object.values(res)
        let result = _arr.slice(0, _arr.length - 1)
        setPosts(result)
      })
    return function cleanup() {
      setPosts([])
    }
  }, [dispatch])
  return (
    <S.Home>
      {posts.length && (
        <>
          <TopStory main={posts[0]} subs={posts.slice(1, 4)} />
          <SteamHome posts={posts.slice(4)} />
        </>
      )}
    </S.Home>
  )
}

export default Home
