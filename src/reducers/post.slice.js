import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import postApi from 'api/post.api'
import { payloadCreator } from 'utils/helpers'

export const getPosts = createAsyncThunk(
  'post/getPosts',
  payloadCreator(postApi.getPosts)
)

export const getPost = createAsyncThunk(
  'post/getPost',
  payloadCreator(postApi.getPost)
)

export const getPostsInCat = createAsyncThunk(
  'post/getPostsInCat',
  payloadCreator(postApi.getPostsInCat)
)

const post = createSlice({
  name: 'post',
  initialState: {
    posts: []
  },
  extraReducers: {
    [getPosts.fulfilled]: (state, action) => {
      let _arr = Object.values(action.payload)
      let result = _arr.slice(0, _arr.length - 1)
      state.posts = result
    }
  }
})

const postReducer = post.reducer
export default postReducer
