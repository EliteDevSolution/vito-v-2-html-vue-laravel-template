<template>
  <b-container fluid>
    <b-row>
      <iq-card class="bg-transparent shadow-none w-100">
         <div class="d-flex align-items-center justify-content-between pl-2 pr-3">
            <ais-instant-search index-name="instant_search" :search-client="searchClient">
              <b-col md="12">
                <b-row>
                  <b-col md="3" class="p-0 d-none d-lg-block">
                    <EcommerceFilter class="mt-2" :responsive="false" />
                  </b-col>
                  <b-col md="12" lg="9" class="p-0">
                    <b-card-body class="pt-0">
                      <b-row>
                        <b-col cols="6" lg="8" class="align-self-center d-flex mb-3">
                          <div class="d-lg-none d-block align-self-center">
                            <div>
                              <b-button variant=" iq-bg-primary" class="mr-2 font-weight-bold" v-b-modal.modal-1>
                                <i class="ri-menu-line mr-0"></i>
                              </b-button>
                              <b-modal id="modal-1" title="Filter" size="xl" class="p-0" modal-class="ecommerce p-0" hide-header hide-footer>
                                <template class="" v-slot:default="{ hide }">
                                  <b-row class="fixed-bottom p-2 bg-white">
                                    <b-col cols="6">
                                      <b-button variant="primary iq-waves-effect" size="lg" block @click="hide()">Apply</b-button>
                                    </b-col>
                                    <b-col cols="6">
                                      <ResetFilter />
                                    </b-col>
                                  </b-row>
                                  <EcommerceFilter class="mt-2" :shadow="false" :responsive="true" />
                                </template>
                              </b-modal>
                            </div>
                          </div>
                          <!-- <ais-stats /> -->
                        </b-col>
                      </b-row>
                      <b-row>
                        <b-col md="12">
                          <iq-card>
                            <div class="d-flex align-items-center justify-content-between pl-2 pr-3">
                              <div class="d-flex iq-algolia-search">
                                <ais-search-box id="searchbox" show-loading-indicator>
                                </ais-search-box>
                                <ais-powered-by  id="powered-by" class="d-flex align-content-center"/>
                              </div>
                               <div class="d-flex justify-content-between">
                                 <div id="sort-by" class="iq-algolia-sort">
                                  <ais-sort-by
                                    :class-names="{
                                          'ais-SortBy': 'iq-algolia-sort',
                                          'ais-SortBy-select': '',
                                        }"
                                    :items="[
                                            { value: 'instant_search', label: 'Featured' },
                                            { value: 'instant_search_price_asc', label: 'Price asc.' },
                                            { value: 'instant_search_price_desc', label: 'Price desc.' },
                                          ]"
                                  />
                                 </div>
                                  <div class="d-flex">
                                    <b-button :variant="`${listType === 'grid' ? 'primary' : ' iq-bg-primary'}`" class="mr-2" @click="listType = 'grid'"><i class="ri-grid-fill mr-0" /></b-button>
                                    <b-button :variant="`${listType === 'list' ? 'primary' : ' iq-bg-primary'}`" class="" @click="listType = 'list'"><i class="ri-list-unordered mr-0" /></b-button>
                                  </div>
                                </div>
                               </div>
                          </iq-card>
                        </b-col>
                      </b-row>
                      <b-row>
                        <b-col cols="12">
                          <div :class="`iq-product-layout-${listType}`">
                            <ais-hits :class-names="{
                                      'ais-Hits': 'iq-product',
                                      'ais-Hits-list': 'iq-product-list',
                                      'ais-Hits-item': 'iq-product-item iq-card',
                                    }">
                              <template slot="item" slot-scope="{ item }">
                                <div v-if="listType === 'grid'" class="text-center">
                                    <ProductGrid :item="item" @cart="addToCart" :selectedCart="checkCart(item)" @wishlist="addToWishlist" :selectedWishCart="wishCart(item)"/>
                                </div>
                                <b-card-body v-else>
                                  <ProductList :item="item" @cart="addToCart" :selectedCart="checkCart(item)" @wishlist="addToWishlist" :selectedWishCart="wishCart(item)" />
                                </b-card-body>
                              </template>
                            </ais-hits>
                          </div>
                          <NoResults />
                        </b-col>
                      </b-row>
                    </b-card-body>
                    <ais-pagination class="mt-2 justify-content-center  "
                                  :class-names="{
                                  'ais-Pagination': 'pagination',
                                  'ais-Pagination-list': 'pagination',
                                  'ais-Pagination-item': 'page-item',
                                  'ais-Pagination-link': 'page-link',
                                  'ais-Pagination-item--selected': 'active'
                                  // ...
                                }"/>
                  </b-col>
                </b-row>
              </b-col>
            </ais-instant-search>
         </div>
      </iq-card>
    </b-row>
  </b-container>
</template>
<script>
import algoliasearch from 'algoliasearch/lite'
import 'instantsearch.css/themes/reset-min.css'
import 'instantsearch.css/themes/algolia-min.css'
import EcommerceFilter from './EcommerceFilter'
import { APP_ID, APP_KEY } from '../../../config/algolia'
import { core } from '../../../config/pluginInit'
import NoResults from '../../../components/core/NotFound/NoResults'
import ResetFilter from './ResetFilter'
import ProductList from './ProductList'
import ProductGrid from './ProductGrid'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Listing',
  mounted () {
    core.index()
  },
  components: {
    ProductGrid,
    EcommerceFilter,
    NoResults,
    ResetFilter,
    ProductList
  },
  computed: {
    ...mapGetters({
      stateCart: 'Ecommerce/cartState',
      stateWishlist: 'Ecommerce/wishlistState'
    })
  },
  data () {
    return {
      listType: 'grid',
      searchClient: algoliasearch(
        APP_ID,
        APP_KEY
      )
    }
  },
  methods: {
    /* objectID is check cart and other functionality */
    ...mapActions({
      addToCart: 'Ecommerce/addToCartAction',
      addToWishlist: 'Ecommerce/addToWishlistAction'
    }),
    checkCart (item) {
      const cartItem = this.stateCart.find(cart => cart.objectID === item.objectID)
      return cartItem !== undefined && cartItem !== null
    },
    wishCart (item) {
      const wishlistItem = this.stateWishlist.find(cart => cart.objectID === item.objectID)
      return wishlistItem !== undefined && wishlistItem !== null
    }
  }
}
</script>
<style>
  .ecommerce .modal-open .modal{
    padding: 0 !important;
  }
  .ecommerce .modal-dialog {
    width: 100% !important;
    height: 100% !important;
    margin: 0 !important;
    padding: 0 !important;
    max-width:none !important;
  }
  .ecommerce .modal-content {
    border: unset;
    height: auto !important;
    min-height: 100% !important;
    border-radius: 0 !important;
  }
</style>
