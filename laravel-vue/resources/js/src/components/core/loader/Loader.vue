<template>
  <!-- loader Start -->
  <div id="loading" :style="style">
    <div id="loading-center">
    </div>
  </div>
  <!-- loader END -->
</template>
<script>
import darkLoader from '../../../assets/images/darkMode/dark-logo.gif'
import lightLoader from '../../../assets/images/logo.gif'
import { animation } from '../../../config/pluginInit'
import { mapGetters } from 'vuex'
export default {
  name: 'Loader',
  props: {
    dark: { type: Boolean, default: false }
  },
  watch: {
    $route: function (to, from) {
      // eslint-disable-next-line no-mixed-operators
      if (to.meta.layout !== undefined && from.meta.layout === undefined || to.meta.layout === undefined && from.meta.layout !== undefined || to.meta.layout !== undefined && from.meta.layout !== undefined) {
        const load = document.getElementById('loading')
        animation.fadeIn(load, { duration: 150 })
        load.classList.remove('d-none')
      }
    }
  },
  computed: {
    style () {
      if (this.darkMode) {
        return `background: #252549 url(${darkLoader}) no-repeat scroll center center;background-size: 150px;`
      } else {
        return `background: #fff url(${lightLoader}) no-repeat scroll center center;`
      }
    },
    ...mapGetters({
      darkMode: 'Setting/darkModeState'
    })
  },
  mounted () {
  }
}
</script>
