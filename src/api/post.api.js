import { getPostsInCat } from 'reducers/post.slice'
import http from 'utils/http'

// FAKE API only provide /products
const URL = 'products'
const postApi = {
  //GET ALL POST
  getPosts() {
    return http.get(URL)
  },
  // GET A SINGLE POST
  getPost(id) {
    return http.get(`${URL}/${id}`)
  },
  // GET POSTS in a specific category
  getPostsInCat(categoryId) {
    return http.get(`${URL}/category/${categoryId}`)
  }
}

export default postApi
