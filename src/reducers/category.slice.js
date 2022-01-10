import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import categoryApi from 'api/category.api'
import { payloadCreator } from 'utils/helpers'

export const getCategories = createAsyncThunk(
  'category/getCategories',
  payloadCreator(categoryApi.getCategories)
)

const category = createSlice({
  name: 'category',
  initialState: {
    categories: []
  },
  extraReducers: {
    [getCategories.fulfilled]: (state, action) => {
      let _arr = Object.values(action.payload)
      let result = _arr.slice(0, _arr.length - 1)
      state.categories = result
    }
  }
})

const categoryReducer = category.reducer
export default categoryReducer
