import http from 'utils/http'

const URL = 'products/categories'

const categoryApi = {
  // GET ALL CATEGORIES
  getCategories() {
    return http.get(URL)
  }
}

export default categoryApi
