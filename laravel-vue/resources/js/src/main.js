import Vue from 'vue'
import '@babel/polyfill'
import 'mutationobserver-shim'
import './Utils/fliter'
import './config/firebase'
import App from './App.vue'
import router from './router'
import store from './store'
import Raphael from 'raphael/raphael'
import './plugins'
import AlgoliaComponents from 'vue-instantsearch'
import i18n from './i18n'
import './directives'
import FileManager from 'laravel-file-manager'

global.Raphael = Raphael

Vue.use(AlgoliaComponents)
Vue.use(FileManager, {store})
Vue.config.productionTip = false

let vm = new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')

window.vm = vm
