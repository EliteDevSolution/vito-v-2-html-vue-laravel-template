<template>
  <b-row class="">
    <b-col lg="9">
      <div class="media">
        <div class="w-20 text-center mr-4 d-none d-md-block align-self-center">
          <img :src="item.image" :alt="item.name" class="img-fluid align-self-center mr-3" />
        </div>
        <div class="media-body">
          <div class="checkout-product-details">
            <h5>{{ item.name.substring(0,45) }}</h5>
            <p class="text-success mb-0">In stock</p>
            <p>Seller: {{ item.brand }}</p>
            <slot name="body"/>
            <div class="checkout-button d-flex flex-wrap align-items-center mt-4">
              <button type="submit" class="btn btn-light d-block" @click="removeToCart(item)"><i class="ri-close-line mr-1"></i>Remove</button>
              <button type="submit" class="btn btn-primary d-block ml-2" @click="addToWishlist(item)"><i class="ri-heart-line mr-1"></i>Wishlist</button>
            </div>
          </div>
        </div>
      </div>
    </b-col>
    <b-col lg="3">
      <div class="d-flex justify-content-between">
        <div class="checkout-policy">
          <p class="mb-0 mt-2">Delivery by, Thu Jan 30 </p>
          <p>10 Days Replacement Policy</p>
          <div class="d-flex justify-content-center btn-increment mt-3">
            <button type="button" class="btn-less"><i class="ri-subtract-fill"></i></button>
            <input type="number" min="1" max="10" value="1" class="increment">
            <button type="button" class="btn-plus"><i class="ri-add-fill"></i></button>
          </div>
        </div>
      </div>
    </b-col>
  </b-row>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  name: 'CartList',
  props: {
    type: { type: String },
    item: { type: Object },
    selectedCart: { type: Boolean },
    selectedWishCart: { type: Boolean }
  },
  mounted () {
  },
  methods: {
    ...mapActions({
      removeToWishlist: 'Ecommerce/removeToWishlistAction',
      removeToCart: 'Ecommerce/removeToCartAction'
    }),
    addToCart (item) {
      this.removeToWishlist(item)
      this.$emit('cart', item)
    },
    addToWishlist (item) {
      this.removeToCart(item)
      this.$emit('wishlist', item)
    }
  }
}
</script>
