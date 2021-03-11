<template>
  <div class="row">
    <div class="col-lg-8 pl-0">
      <div class="iq-product-layout-list">
        <iq-card>
          <template v-slot:headerTitle>
            <h4 class="card-title">My Cart</h4>
          </template>
          <template v-slot:body>
            <div v-for="(item,index) in cartList" :key="index" class="ckeckout-product-lists mb-4 pb-4">
              <CartList :item="item" type="checkout" />
            </div>
          </template>
        </iq-card>
      </div>
    </div>
    <div class="col-lg-4">
      <iq-card>
        <template v-slot:body>
          <h4 class="mb-2">Price Details</h4>
          <div class="d-flex justify-content-between">
            <span>Price 3 Items</span>
            <span><strong>$1000.00</strong></span>
          </div>
          <div class="d-flex justify-content-between">
            <span>Delivery Charges</span>
            <span class="text-success">Free</span>
          </div>
          <hr>
          <div class="d-flex justify-content-between">
            <span>Amount Payable</span>
            <span><strong>$1000.00</strong></span>
          </div>
          <button id="place-order" href="javascript:void(0);" @click="submit" type="button" class="btn btn-primary d-block btn-block mt-1 next">Place order</button>
        </template>
      </iq-card>
      <iq-card body-class="p-0 iq-checkout-policy">
        <template v-slot:body>
          <ul class="p-0 m-0">
            <li class="d-flex align-items-center">
              <div class="iq-checkout-icon"><i class="ri-checkbox-line"></i></div>
              <h6>Security policy (Safe and Secure Payment.)</h6>
            </li>
            <li class="d-flex align-items-center">
              <div class="iq-checkout-icon"><i class="ri-truck-line"></i></div>
              <h6>Delivery policy (Home Delivery.)</h6>
            </li>
            <li class="d-flex align-items-center">
              <div class="iq-checkout-icon"><i class="ri-arrow-go-back-line"></i></div>
              <h6>Return policy (Easy Retyrn.)</h6>
            </li>
          </ul>
        </template>
      </iq-card>
    </div>
  </div>
</template>
<script>
import CartList from './CartList'
export default {
  name: 'Step1Cart',
  props: ['cartList'],
  data () {
    return {
    }
  },
  components: {
    CartList
  },
  mounted () {
  },
  methods: {
    submit () {
      this.$emit('submit', true)
    }
  }
}
</script>
