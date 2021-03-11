<template>
  <b-row class="align-items-center align-content-center">
    <b-col lg="12">
      <div class="d-flex justify-content-between">
        <div>
          <div class="d-block d-md-none">
            <div class="h-56 d-flex align-items-center justify-content-center bg-white iq-border-radius-15">
              <a @click="viewProduct(item)" href="javascript:void(0)"><img :src="item.image" :alt="item.name" class="grid-view-img px-4 w-130" /></a>
            </div>
          </div>
          <div class="media">
            <div class="w-20 text-center mr-4 d-none d-md-block align-self-center bg-white">
              <a @click="viewProduct(item)" href="javascript:void(0)"><img :src="item.image" :alt="item.name" class="img-fluid mr-3" /></a>
            </div>
            <div class="media-body">
              <h5><a @click="viewProduct(item)" href="javascript:void(0)" :title="item.name">{{ item.name.substring(0,25) }}<span v-if="item.name.length >= 45">...</span></a></h5>
              <span class="font-size-14 text-muted">By <b>{{ item.brand }}</b></span><p class="text-success">In stock</p>
              <div class="price d-flex flex-wrap align-items-center mb-3">
                <h5>$ {{ item.price }}</h5>
                <h6 class="ml-2 mr-2"><del style="color:#777D74;">$ {{ item.price-2 }}</del></h6>
                <h6 class="text-success">10% off </h6>
                <p class="text-success mb-0">3 Offer Avilable</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="d-flex justify-content-between">
            <div class="checkout-policy">
              <p class="mb-0 mt-2">Delivery by, Thu Jan 30 </p>
              <p class="m-0">10 Days Replacement Policy</p>
              <div class="d-flex justify-content-start btn-increment my-2">
                <button type="button" class="btn-less"><i class="ri-subtract-fill"></i></button>
                <input type="number" min="1" max="10" value="1" class="increment">
                <button type="button" class="btn-plus"><i class="ri-add-fill"></i></button>
              </div>
            </div>
          </div>
          <div class="iq-product-action">
            <p v-if="item.free_shipping" class="font-size-14 mt-2"><i class="ri-shopping-cart-line"></i> Free Shipping</p>
            <b-button variant="light iq-waves-effect text-uppercase mr-1" size="sm" v-if="type === 'wishList'" @click="removeToWishlist(item)"><i class="fas fa-times mr-0" /></b-button>
            <b-button variant="primary iq-waves-effect text-uppercase " v-if="!selectedCart" size="sm" @click="addToCart(item)"><i class="fas fa-cart-plus mr-0"/>  {{ (type === 'wishList' ? '' : '') }}</b-button>
            <router-link :to="{ name: 'app.e-commerce.cart'}" v-else class="btn iq-bg-primary btn-sm iq-waves-effect text-uppercase">
              <i class="fas fa-eye mr-0"/>
            </router-link>
            <template v-if="type != 'wishList'">
              <b-button variant=" iq-bg-primary ml-2" size="sm" v-if="selectedWishCart" @click="addToWishlist(item)"><i class="fas fa-heart mr-0" /></b-button>
              <b-button variant="primary ml-2" size="sm" @click="addToWishlist(item)" v-else><i class="far fa-heart mr-0" /></b-button>
            </template>
          </div>
        </div>
      </div>
    </b-col>
  </b-row>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  name: 'ProductList',
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
    },
    viewProduct (item) {
      this.productSelectAction(item)
      this.$router.push({ name: 'app.e-commerce.detail' })
    }
  }
}
</script>
