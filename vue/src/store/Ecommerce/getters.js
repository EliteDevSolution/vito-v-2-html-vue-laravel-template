export default {
  cartState: state => state.cart,
  cartCountState: state => state.cart.length,
  wishlistState: state => state.wishlist,
  selectedProductState: state => state.selectedProduct
}
