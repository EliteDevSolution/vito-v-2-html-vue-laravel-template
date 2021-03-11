export default {
  addToCartCommit (state, data) {
    state.cart.push(data)
  },
  removeToCartCommit (state, data) {
    const cartItem = state.cart.find(cart => cart.objectID === data.objectID)
    if (cartItem !== undefined) {
      state.cart.splice(state.cart.indexOf(data), 1)
    }
  },
  addToWishlistCommit (state, data) {
    const wishlistItem = state.wishlist.find(wish => wish.objectID === data.objectID)
    const isWished = wishlistItem !== undefined && wishlistItem !== null

    if (isWished) {
      state.wishlist.splice(state.wishlist.indexOf(data), 1)
    } else {
      state.wishlist.push(data)
    }
  },
  removeToWishlistCommit (state, data) {
    const wishlistItem = state.wishlist.find(wish => wish.objectID === data.objectID)
    if (wishlistItem !== undefined) {
      state.wishlist.splice(state.wishlist.indexOf(wishlistItem), 1)
    }
  },
  productSelectCommit (state, data) {
    state.selectedProduct = data
  }
}
