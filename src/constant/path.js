export const path = {
  home: '/',
  user: '/user',
  get userProfile() {
    return this.user + '/profile'
  },
  get userPurchase() {
    return this.user + '/purchase'
  },
  get userPassword() {
    return this.user + '/password'
  },
  category: '/category',
  categoryDetail: '/category/:id',
  post: '/post',
  postDetail: '/post/:id',
  notFound: '*'
}
