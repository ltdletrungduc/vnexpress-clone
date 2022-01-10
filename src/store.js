import { configureStore } from '@reduxjs/toolkit'
import categoryReducer from 'reducers/category.slice'
import deviceReducer from 'reducers/device.slice'
import postReducer from 'reducers/post.slice'

const rootReducer = {
  device: deviceReducer,
  post: postReducer,
  category: categoryReducer
}

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === 'development',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})
export default store
