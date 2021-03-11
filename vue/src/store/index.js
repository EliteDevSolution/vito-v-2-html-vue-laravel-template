import Vue from 'vue'
import Vuex from 'vuex'
import Setting from './Setting/index'
import Ecommerce from './Ecommerce/index'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    Setting,
    Ecommerce
  },
  state: {
  },
  mutations: {
  },
  actions: {
  },
  getters: {
  },
  strict: debug
})
