export default {
  addToCartAction (context, payload) {
    return new Promise((resolve, reject) => {
      context.commit('addToCartCommit', payload)
      resolve()
    })
  },
  removeToCartAction (context, payload) {
    return new Promise((resolve, reject) => {
      context.commit('removeToCartCommit', payload)
      resolve()
    })
  },
  addToWishlistAction (context, payload) {
    return new Promise((resolve, reject) => {
      context.commit('addToWishlistCommit', payload)
      resolve()
    })
  },
  removeToWishlistAction (context, payload) {
    return new Promise((resolve, reject) => {
      context.commit('removeToWishlistCommit', payload)
      resolve()
    })
  },
  productSelectAction (context, payload) {
    return new Promise((resolve, reject) => {
      context.commit('productSelectCommit', payload)
      resolve()
    })
  }
}
