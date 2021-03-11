<template>
  <div>
    <div class="iq-product-free-shipping">
          <span v-if="item.free_shipping" class="iq-product-free-shipping-content">
            <i class="ri-shopping-cart-line"></i> Free Shipping
          </span>
    </div>
    <a href="javascript:void(0)" :title="item.name">
      <div class="h-56 d-flex align-items-center justify-content-center bg-white iq-border-radius-15">
        <a @click="viewProduct(item)" href="javascript:void(0)"><img :src="item.image" :alt="item.name" class="grid-view-img px-4 pt-4 w-130" /></a>
      </div>
    </a>
    <b-card-body>
      <div class="text-justify">
        <a @click="viewProduct(item)" href="javascript:void(0)" :title="item.name">{{ item.name.substring(0,25) }}<span v-if="item.name.length >= 45">...</span></a>
        <p class="font-size-12 mb-0">{{ item.description.substring(0,20)+'...' }}</p>
        <div class="ratting">
          <ul class="ratting-item d-flex p-0 m-0">
            <li v-for="(rating, index) in 5" :key="index" class="full">
              <i class="ri-star-fill" v-if="item.rating >= rating" />
              <i class="ri-star-line" v-else />
            </li>
          </ul>
        </div>
      </div>
      <div class="iq-product-action my-2">
        <b-button variant="primary iq-waves-effect text-uppercase" v-if="!selectedCart" size="sm" @click="addToCart(item)"><i class="fas fa-cart-plus mr-0"/></b-button>
        <router-link :to="{ name: 'app.e-commerce.cart'}" v-else class="btn iq-bg-primary iq-waves-effect text-uppercase btn-sm">
          <i class="fas fa-eye mr-0"/>
        </router-link>
        <b-button variant=" iq-bg-primary ml-2" size="sm" v-if="selectedWishCart" @click="addToWishlist(item)"><i class="fas fa-heart mr-0" /></b-button>
        <b-button variant="primary ml-2" size="sm" @click="addToWishlist(item)" v-else><i class="far fa-heart mr-0" /></b-button>
        <p class="font-size-16 font-weight-bold float-right">${{ item.price }}</p>
      </div>
    </b-card-body>
  </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  name: 'ProductGrid',
  props: {
    item: { type: Object },
    selectedCart: { type: Boolean },
    selectedWishCart: { type: Boolean }
  },
  methods: {
    ...mapActions({
      removeToWishlist: 'Ecommerce/removeToWishlistAction',
      removeToCart: 'Ecommerce/removeToCartAction',
      productSelectAction: 'Ecommerce/productSelectAction'
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
