<template>
  <b-container fluid>
    <b-row>
      <b-col md="12" v-if="cartList.length > 0">
        <form-wizard title=" " subtitle=" " :start-index="index" ref="wizard" @on-complete="onComplete" color="rgba(130,122,243,1)">
          <tab-content title="Cart" ref="tab" icon="ri-shopping-cart-line">
            <Step1Cart :cart-list="cartList" @submit="nextTab"/>
          </tab-content>
          <tab-content title="Address" icon="ri-navigation-line">
            <Step2Address @submit="nextTab" />
          </tab-content>
          <tab-content title="Payment" icon="ri-refund-line">
            <Step3Payment />
          </tab-content>
        </form-wizard>
      </b-col>
      <b-col v-else>
        <iq-card>
          <template v-slot:body>
            <h4 class="mb-2">You don't have any items in your cart.</h4>
            <b-button variant="primary text-white" :to="{name: 'app.e-commerce.index'}">Continue Shopping</b-button>
          </template>
        </iq-card>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import { FormWizard, TabContent } from 'vue-form-wizard'
import Step1Cart from './Step1Cart'
import Step2Address from './Step2Address'
import Step3Payment from './Step3Payment'
import { core } from '../../../config/pluginInit'
import { mapGetters } from 'vuex'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
let wizardLeftButton
let wizardPrevButton
let wizardRightButton
let wizardNextButton
export default {
  name: 'Checkout',
  data () {
    return {
      index: 0
    }
  },
  components: {
    FormWizard, TabContent, Step1Cart, Step2Address, Step3Payment
  },
  mounted () {
    core.index()
    wizardLeftButton = document.getElementsByClassName('wizard-footer-left')
    wizardRightButton = document.getElementsByClassName('wizard-footer-right')
    const wizard = document.getElementsByClassName('wizard-btn')
    wizard.forEach((value) => {
      value.classList.add('d-none')
    })
  },
  computed: {
    ...mapGetters({
      cartList: 'Ecommerce/cartState'
    })
  },
  methods: {
    nextTab () {
      wizardNextButton = wizardRightButton[0].getElementsByClassName('wizard-btn')
      wizardNextButton[0].click()
      setTimeout(() => {
        const wizard = document.getElementsByClassName('wizard-btn')
        wizard.forEach((value) => {
          value.classList.add('d-none')
        })
      }, 20)
    },
    prevTab () {
      wizardPrevButton = wizardLeftButton[0].getElementsByClassName('wizard-btn')
      wizardPrevButton[0].click()
      const wizard = document.getElementsByClassName('wizard-btn')
      wizard.forEach((value) => {
        value.classList.add('d-none')
      })
    },
    onComplete () {
    }
  }
}
</script>
