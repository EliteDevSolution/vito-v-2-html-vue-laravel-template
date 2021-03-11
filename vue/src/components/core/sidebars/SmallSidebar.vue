<template>
  <div class="iq-sidebar-small bg-primary">
    <div class="sidebar-top">
      <div class="iq-sidebar-small-logo">
        <router-link to="/">
          <img :src="logo" class="img-fluid" alt="">
        </router-link>
      </div>
      <div class="sidebar-menu-icon">
        <router-link :to="item.link" class="iq-waves-effect" v-b-tooltip.right.hover :title="item.title" v-for="(item, index) in bookmark" :key="index">
          <i :class="`${item.icon}`"></i>
        </router-link>
      </div>
    </div>
    <div class="sidebar-bottom">
      <div class="sidebar-menu-icon">
        <a href="account-setting.html" class="iq-waves-effect" data-toggle="tooltip" data-placement="right" title="" data-original-title="Setting"><i class="ri-settings-2-fill"></i></a>
        <div class="iq-menu-bt align-self-center">
          <div class="wrapper-menu" @click="miniSidebar">
            <div class="menu-close"><i class="ri-arrow-left-line"></i></div>
            <div class="menu-open"><i class="ri-arrow-right-line"></i></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'SmallSidebar',
  props: {
    logo: { type: String }
  },
  mounted () {
  },
  computed: {
    ...mapGetters({
      bookmark: 'Setting/bookmarkState'
    })
  },
  methods: {
    miniSidebar () {
      this.$emit('toggle')
    }
  }
}
</script>
