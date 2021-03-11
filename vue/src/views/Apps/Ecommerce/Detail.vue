<template>
  <b-container fluid>
    <b-row>
      <b-col md="12">
        <iq-card>
          <template v-slot:body>
            <div class="row align-items-center justify-content-center">
              <div class="col-md-5 iq-item-product-left ">
                <div class="h-56 d-flex align-items-center justify-content-center mb-4">
                  <img :src="selectedProductState.image" class="grid-view-img px-4 w-200" />
                </div>
              </div>
              <div class="col-md-7 iq-item-product-right">
                <div class="product-additional-details">
                  <h4 class="productpage_title">{{ selectedProductState.name }}</h4>
                  <p>By <b>{{ selectedProductState.brand}}</b></p>
                  <div class="ratting">
                    <ul class="ratting-item d-flex p-0 m-0">
                      <li v-for="(rating, index) in 5" :key="index" class="full">
                        <i class="ri-star-fill" v-if="selectedProductState.rating >= rating" />
                        <i class="ri-star-line" v-else />
                      </li>
                    </ul>
                  </div>
                  <div class="product-descriptio">
                    <p>{{ selectedProductState.description }}</p>
                  </div>
                  <div class="product-price">
                    <div class="regular-price"><b> $ {{ selectedProductState.price }}</b> <span class="offer-price ml-2">$ {{ selectedProductState.price - 10}}</span></div>
                  </div>
                  <div class="shipping">
                    <p class="mb-0" v-if="selectedProductState.free_shipping">Shipping Fee: <span> Free</span></p>
                    <p class="mb-0" v-else>Shipping Fee: <span>$10</span></p>
                  </div>
                  <div class="stock">
                    <p>Stock: <span class="text-success">Available</span></p>
                  </div>
                  <div class="additional-product-action d-flex align-items-center">
                    <div class="product-action">
                      <div class="add-to-cart">
                        <b-button v-if="checkCart(selectedProductState)" @click="$router.push({name: 'app.e-commerce.cart'})" variant=" iq-bg-primary"><i class="fas fa-eye"/> View Cart</b-button>
                        <b-button variant="primary" @click="addCart(selectedProductState)" v-else><i class="fas fa-cart-plus"/> Add to Cart </b-button>
                      </div>
                      <div class="wishlist">
                        <b-button variant=" iq-bg-primary ml-2" v-if="wishCart(selectedProductState)" @click="addToWishlist(selectedProductState)"><i class="fas fa-heart" />Wishlist</b-button>
                        <b-button variant="primary ml-2" @click="addWishlist(selectedProductState)" v-else><i class="far fa-heart" /> Wishlist</b-button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-12 product-description-details mt-4">
                <div class="description-tabs">
                  <b-tabs content-class="mt-3" align="center">
                    <b-tab title="Description" active>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra nibh et urna tempus, id feugiat sapien iaculis. Morbi aliquam et nisl ut varius. Vivamus fringilla, nisl ac lacinia fermentum, nisl felis facilisis lectus, id condimentum turpis quam ac ipsum. Vivamus purus nisi, condimentum eget felis vel, finibus interdum odio. Pellentesque lacinia aliquam ipsum. Donec euismod ex in sodales faucibus. Proin eget lacus vitae eros vestibulum vehicula. Mauris tortor massa, fringilla ut metus quis, malesuada semper diam. Phasellus et iaculis ex, vitae maximus odio.</p>
                    </b-tab>
                    <b-tab title="Specifications">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra nibh et urna tempus, id feugiat sapien iaculis. Morbi aliquam et nisl ut varius. Vivamus fringilla, nisl ac lacinia fermentum, nisl felis facilisis lectus, id condimentum turpis quam ac ipsum. Vivamus purus nisi, condimentum eget felis vel, finibus interdum odio. Pellentesque lacinia aliquam ipsum. Donec euismod ex in sodales faucibus. Proin eget lacus vitae eros vestibulum vehicula. Mauris tortor massa, fringilla ut metus quis, malesuada semper diam. Phasellus et iaculis ex, vitae maximus odio.</p>
                    </b-tab>
                    <b-tab title="Review">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra nibh et urna tempus, id feugiat sapien iaculis. Morbi aliquam et nisl ut varius. Vivamus fringilla, nisl ac lacinia fermentum, nisl felis facilisis lectus, id condimentum turpis quam ac ipsum. Vivamus purus nisi, condimentum eget felis vel, finibus interdum odio. Pellentesque lacinia aliquam ipsum. Donec euismod ex in sodales faucibus. Proin eget lacus vitae eros vestibulum vehicula. Mauris tortor massa, fringilla ut metus quis, malesuada semper diam. Phasellus et iaculis ex, vitae maximus odio.</p>
                    </b-tab>
                  </b-tabs>
                </div>
              </div>
            </div>
          </template>
        </iq-card>
        <b-row>
          <b-col class="related-product">
            <div class="related-heading text-center mb-3">
              <h2>Related Products</h2>
            </div>
            <div class="related-product-block">
              <Swiper :options="options" id="related-slider" class="product_list row p-0">
                <template v-slot:nav>
                  <SwiperNav />
                </template>
                <SwiperSlide class="product_item p-2"  v-for="item in related" :key="item.value">
                  <iq-card>
                    <ProductGrid :item="item" @cart="addToCart" :selectedCart="checkCart(item)" @wishlist="addToWishlist" :selectedWishCart="wishCart(item)"/>
                  </iq-card>
                </SwiperSlide>
              </Swiper>
            </div>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import { core } from '../../../config/pluginInit'
import ProductGrid from './ProductGrid'
import Swiper from '../../../components/core/slider/Swiper'
import SwiperNav from '../../../components/core/slider/SwiperNav'
import SwiperSlide from '../../../components/core/slider/SwiperSlide'

export default {
  name: 'Detail',
  components: {
    ProductGrid,
    Swiper,
    SwiperSlide,
    SwiperNav
  },
  mounted () {
    core.index()
  },
  computed: {
    ...mapGetters({
      stateCart: 'Ecommerce/cartState',
      stateWishlist: 'Ecommerce/wishlistState',
      selectedProductState: 'Ecommerce/selectedProductState'
    })
  },
  data () {
    return {
      related: [{ name: 'Apple - MacBook Air® (Latest Model) - 13.3" Display - Intel Core i5 - 8GB Memory - 128GB Flash Storage - Silver', description: 'MacBook Air features up to 8GB of memory, a fifth-generation Intel Core processor, Thunderbolt 2, great built-in apps, and all-day battery life.1 Its thin, light, and durable enough to take everywhere you go-and powerful enough to do everything once you get there, better.', brand: 'Apple', categories: ['Computers & Tablets', 'Laptops', 'All Laptops', 'MacBooks'], hierarchicalCategories: { lvl0: 'Computers & Tablets', lvl1: 'Computers & Tablets > Laptops', lvl2: 'Computers & Tablets > Laptops > All Laptops', lvl3: 'Computers & Tablets > Laptops > All Laptops > MacBooks' }, type: 'Apple', price: 999.99, price_range: '500 - 2000', image: 'https://cdn-demo.algolia.com/bestbuy-0118/6443034_sb.jpg', url: 'https://api.bestbuy.com/click/-/6443034/pdp', free_shipping: true, rating: 4, popularity: 21465, objectID: '6443034', _highlightResult: { name: { value: 'Apple - MacBook Air® (Latest Model) - 13.3&quot; Display - Intel Core i5 - 8GB Memory - 128GB Flash Storage - Silver', matchLevel: 'none', matchedWords: [] }, description: { value: 'MacBook Air features up to 8GB of memory, a fifth-generation Intel Core processor, Thunderbolt 2, great built-in apps, and all-day battery life.1 Its thin, light, and durable enough to take everywhere you go-and powerful enough to do everything once you get there, better.', matchLevel: 'none', matchedWords: [] }, brand: { value: 'Apple', matchLevel: 'none', matchedWords: [] }, categories: [{ value: 'Computers &amp; Tablets', matchLevel: 'none', matchedWords: [] }, { value: 'Laptops', matchLevel: 'none', matchedWords: [] }, { value: 'All Laptops', matchLevel: 'none', matchedWords: [] }, { value: 'MacBooks', matchLevel: 'none', matchedWords: [] }], type: { value: 'Apple', matchLevel: 'none', matchedWords: [] } }, __position: 5 }, { name: 'Sharp - 50" Class (49.5" Diag.) - LED - 1080p - Smart - HDTV Roku TV - Black', description: "Only at Best Buy  Sharp LC-50LB481U LED Roku TV: Get a TV that enjoys full Internet connectivity with this Sharp 49.5-inch smart TV. Full HD resolutions give you plenty of detail whether you're streaming content from the Internet using the integrated Roku player or watching via cable. Plenty of contrast and high-quality sound mean this Sharp 49.5-in smart TV delivers outstanding video.", brand: 'Sharp', categories: ['TV & Home Theater', 'TVs', 'All Flat-Panel TVs'], hierarchicalCategories: { lvl0: 'TV & Home Theater', lvl1: 'TV & Home Theater > TVs', lvl2: 'TV & Home Theater > TVs > All Flat-Panel TVs' }, type: "45\"-50\"  tv's", price: 429.99, price_range: '200 - 500', image: 'https://cdn-demo.algolia.com/bestbuy-0118/4863102_sb.jpg', url: 'https://api.bestbuy.com/click/-/4863102/pdp', free_shipping: false, rating: 4, popularity: 21464, objectID: '4863102', _highlightResult: { name: { value: 'Sharp - 50&quot; Class (49.5&quot; Diag.) - LED - 1080p - Smart - HDTV Roku TV - Black', matchLevel: 'none', matchedWords: [] }, description: { value: 'Only at Best Buy  Sharp LC-50LB481U LED Roku TV: Get a TV that enjoys full Internet connectivity with this Sharp 49.5-inch smart TV. Full HD resolutions give you plenty of detail whether you&#39;re streaming content from the Internet using the integrated Roku player or watching via cable. Plenty of contrast and high-quality sound mean this Sharp 49.5-in smart TV delivers outstanding video.', matchLevel: 'none', matchedWords: [] }, brand: { value: 'Sharp', matchLevel: 'none', matchedWords: [] }, categories: [{ value: 'TV &amp; Home Theater', matchLevel: 'none', matchedWords: [] }, { value: 'TVs', matchLevel: 'none', matchedWords: [] }, { value: 'All Flat-Panel TVs', matchLevel: 'none', matchedWords: [] }], type: { value: '45&quot;-50&quot;  tv&#39;s', matchLevel: 'none', matchedWords: [] } }, __position: 6 }, { name: 'Apple - EarPods™ with Remote and Mic - White', description: 'Control media playback, adjust the volume and answer and end calls on your Apple&#174; iPod&#174;, iPhone&#174; or iPad&#174; with these Apple EarPods&#8482; MD827LL/A, which feature an in-line remote and mic for ease of use.', brand: 'Apple', categories: ['Audio', 'Headphones', 'All Headphones'], hierarchicalCategories: { lvl0: 'Audio', lvl1: 'Audio > Headphones', lvl2: 'Audio > Headphones > All Headphones' }, type: 'Earbud headphones', price: 29.99, price_range: '1 - 50', image: 'https://cdn-demo.algolia.com/bestbuy-0118/6848136_sb.jpg', url: 'https://api.bestbuy.com/click/-/6848136/pdp', free_shipping: true, rating: 4, popularity: 21462, objectID: '6848136', _highlightResult: { name: { value: 'Apple - EarPods™ with Remote and Mic - White', matchLevel: 'none', matchedWords: [] }, description: { value: 'Control media playback, adjust the volume and answer and end calls on your Apple® iPod®, iPhone® or iPad® with these Apple EarPods™ MD827LL/A, which feature an in-line remote and mic for ease of use.', matchLevel: 'none', matchedWords: [] }, brand: { value: 'Apple', matchLevel: 'none', matchedWords: [] }, categories: [{ value: 'Audio', matchLevel: 'none', matchedWords: [] }, { value: 'Headphones', matchLevel: 'none', matchedWords: [] }, { value: 'All Headphones', matchLevel: 'none', matchedWords: [] }], type: { value: 'Earbud headphones', matchLevel: 'none', matchedWords: [] } }, __position: 8 }, { name: 'Google - Google Home - White/Slate fabric', description: 'Simplify your everyday life with the Google Home, a voice-activated speaker powered by the Google Assistant. Use voice commands to enjoy music, get answers from Google and manage everyday tasks. Google Home is compatible with Android and iOS operating systems, and can control compatible smart devices such as Chromecast or Nest.', brand: 'Google', categories: ['Smart Home'], hierarchicalCategories: { lvl0: 'Smart Home' }, type: 'Voice assistants', price: 129, price_range: '100 - 200', image: 'https://cdn-demo.algolia.com/bestbuy-0118/5578849_sb.jpg', url: 'https://api.bestbuy.com/click/-/5578849/pdp', free_shipping: true, rating: 4, popularity: 21463, objectID: '5578849', _highlightResult: { name: { value: 'Google - Google Home - White/Slate fabric', matchLevel: 'none', matchedWords: [] }, description: { value: 'Simplify your everyday life with the Google Home, a voice-activated speaker powered by the Google Assistant. Use voice commands to enjoy music, get answers from Google and manage everyday tasks. Google Home is compatible with Android and iOS operating systems, and can control compatible smart devices such as Chromecast or Nest.', matchLevel: 'none', matchedWords: [] }, brand: { value: 'Google', matchLevel: 'none', matchedWords: [] }, categories: [{ value: 'Smart Home', matchLevel: 'none', matchedWords: [] }], type: { value: 'Voice assistants', matchLevel: 'none', matchedWords: [] } }, __position: 7 }, { name: 'Google - Chromecast - Black', description: "Google Chromecast: Enjoy a world of entertainment with Google Chromecast. Just connect to your HDTV's HDMI interface and your home Wi-Fi network to get started. You can stream your favorite apps from your compatible phone, tablet or laptop, plus use your phone as a remote to search, play and pause content.", brand: 'Google', categories: ['TV & Home Theater', 'Streaming Media Players'], hierarchicalCategories: { lvl0: 'TV & Home Theater', lvl1: 'TV & Home Theater > Streaming Media Players' }, type: 'Streaming media plyr', price: 35, price_range: '1 - 50', image: 'https://cdn-demo.algolia.com/bestbuy-0118/4397400_sb.jpg', url: 'https://api.bestbuy.com/click/-/4397400/pdp', free_shipping: false, rating: 4, popularity: 21468, objectID: '4397400', _highlightResult: { name: { value: 'Google - Chromecast - Black', matchLevel: 'none', matchedWords: [] }, description: { value: 'Google Chromecast: Enjoy a world of entertainment with Google Chromecast. Just connect to your HDTV&#39;s HDMI interface and your home Wi-Fi network to get started. You can stream your favorite apps from your compatible phone, tablet or laptop, plus use your phone as a remote to search, play and pause content.', matchLevel: 'none', matchedWords: [] }, brand: { value: 'Google', matchLevel: 'none', matchedWords: [] }, categories: [{ value: 'TV &amp; Home Theater', matchLevel: 'none', matchedWords: [] }, { value: 'Streaming Media Players', matchLevel: 'none', matchedWords: [] }], type: { value: 'Streaming media plyr', matchLevel: 'none', matchedWords: [] } }, __position: 2 }, { name: 'Dell - Inspiron 15.6" Touch-Screen Laptop - Intel Core i5 - 6GB Memory - 1TB Hard Drive - Black', description: 'Dell Inspiron Laptop: Get speed and performance from this 15.6-inch Dell Inspiron laptop. Supported by an Intel Core i5-5200U processor and 6GB of DDR3L RAM, this slim touch screen laptop lets you run multiple applications without lag. The 1TB hard drive in this Dell Inspiron laptop lets you store multiple music, video and document files.', brand: 'Dell', categories: ['Computers & Tablets', 'Laptops'], hierarchicalCategories: { lvl0: 'Computers & Tablets', lvl1: 'Computers & Tablets > Laptops' }, type: 'Burst skus', price: 499.99, price_range: '200 - 500', image: 'https://cdn-demo.algolia.com/bestbuy-0118/5588602_sb.jpg', url: 'https://api.bestbuy.com/click/-/5588602/pdp', free_shipping: true, rating: 4, popularity: 21467, objectID: '5588602', _highlightResult: { name: { value: 'Dell - Inspiron 15.6&quot; Touch-Screen Laptop - Intel Core i5 - 6GB Memory - 1TB Hard Drive - Black', matchLevel: 'none', matchedWords: [] }, description: { value: 'Dell Inspiron Laptop: Get speed and performance from this 15.6-inch Dell Inspiron laptop. Supported by an Intel Core i5-5200U processor and 6GB of DDR3L RAM, this slim touch screen laptop lets you run multiple applications without lag. The 1TB hard drive in this Dell Inspiron laptop lets you store multiple music, video and document files.', matchLevel: 'none', matchedWords: [] }, brand: { value: 'Dell', matchLevel: 'none', matchedWords: [] }, categories: [{ value: 'Computers &amp; Tablets', matchLevel: 'none', matchedWords: [] }, { value: 'Laptops', matchLevel: 'none', matchedWords: [] }], type: { value: 'Burst skus', matchLevel: 'none', matchedWords: [] } }, __position: 3 }],
      options: {
        loop: true,
        spaceBetween: 15,
        slidesPerView: 4,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  methods: {
    ...mapActions({
      addToCart: 'Ecommerce/addToCartAction',
      addToWishlist: 'Ecommerce/addToWishlistAction',
      removeToWishlist: 'Ecommerce/removeToWishlistAction',
      removeToCart: 'Ecommerce/removeToCartAction'
    }),
    addCart (item) {
      this.removeToWishlist(item)
      this.addToCart(item)
    },
    addWishlist (item) {
      this.removeToCart(item)
      this.addToWishlist(item)
    },
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
