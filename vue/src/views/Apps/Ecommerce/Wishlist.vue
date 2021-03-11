<template>
  <b-container fluid>
    <b-row>
      <b-col md="12" v-if="stateWishlist.length > 0">
        <div class="iq-product-layout-list">
          <div v-for="item in stateWishlist" :key="item.id">
            <iq-card>
              <b-card-body>
                <ProductList :type="'wishList'" :item="item" @cart="addToCart" @wishlist="addToWishlist" :selectedWishCart="true" />
              </b-card-body>
            </iq-card>
          </div>
        </div>
      </b-col>
      <b-col v-else>
        <iq-card>
          <template v-slot:body>
            <h4 class="mb-2">You don't have any items in your wishlist.</h4>
            <b-button variant="primary text-white" :to="{name: 'app.e-commerce.index'}">Continue Shopping</b-button>
          </template>
        </iq-card>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import ProductList from './ProductList'
import { core } from '../../../config/pluginInit'

export default {
  name: 'Wishlist',
  components: { ProductList },
  mounted () {
    core.index()
  },
  computed: {
    ...mapGetters({
      stateWishlist: 'Ecommerce/wishlistState'
    })
  },
  methods: {
    ...mapActions({
      addToCart: 'Ecommerce/addToCartAction',
      addToWishlist: 'Ecommerce/addToWishlistAction'
    })
  }
}
</script>
