<template>
  <!-- TOP Nav Bar -->
  <div class="iq-top-navbar">
    <div class="iq-navbar-custom" :class="horizontal ? 'd-flex align-items-center justify-content-between' : ''">
      <div class="iq-sidebar-logo">
        <div class="top-logo">
          <router-link :to="homeURL">
            <img :src="logo" class="img-fluid" alt="logo">
            <span>{{ appName }}</span>
          </router-link>
        </div>
      </div>
      <div class="iq-menu-horizontal" v-if="horizontal">
        <div class="iq-sidebar-menu">
          <CollapseMenu :items="items" :open="true" :horizontal="horizontal" :sidebarGroupTitle="sidebarGroupTitle" class="collapse-menu"/>
          <HoverMenu :items="items" :sidebarGroupTitle="sidebarGroupTitle" class="hover-menu" />
        </div>
      </div>
      <nav class="navbar navbar-expand-lg navbar-light p-0">
        <div class="navbar-left" v-if="!horizontal">
          <ul id="topbar-data-icon" class="d-flex p-0 topbar-menu-icon">
            <li v-for="(item, index) in bookmark" :key="index">
              <router-link :to="item.link" class="nav-link" style="color: var(--iq-primary)">
                <i :class="`${item.icon}`"></i>
              </router-link>
            </li>
          </ul>
          <div class="iq-search-bar">
            <form action="#" class="searchbox">
              <input type="text" class="text search-input" style="cursor: pointer" @click="openSearch" v-model="globalSearch"
                     placeholder="Type here to search...">
              <a class="search-link" href="#"><i class="ri-search-line"></i></a>
              <GlobalSearch :search="globalSearch" @closeSearch="removeClass "/>
            </form>
          </div>
        </div>
        <b-navbar-toggle target="nav-collapse" class="mr-2 text-primary">
          <i class="ri-menu-3-line"></i>
        </b-navbar-toggle>
        <div class="iq-menu-bt align-self-center" v-if="$route.meta.layout !== 'two-sidebar'">
          <div class="wrapper-menu" @click="miniSidebar">
            <div class="main-circle"><i class="ri-arrow-left-s-line"></i></div>
            <div class="hover-circle"><i class="ri-arrow-right-s-line"></i></div>
          </div>
        </div>
        <b-collapse id="nav-collapse" is-nav>
          <slot name="responsiveRight"/>
        </b-collapse>
        <slot name="right"/>
      </nav>
    </div>
  </div>
  <!-- TOP Nav Bar END -->
</template>
<script>
import { APPNAME } from '../../../config/pluginInit'
import { mapGetters } from 'vuex'
import HoverMenu from '../menus/HoverMenu'
import GlobalSearch from '../search/GlobalSearch'
import CollapseMenu from '../menus/CollapseMenu'
export default {
  name: 'DefaultNavBar',
  props: {
    homeURL: { type: Object, default: () => ({ name: 'dashboard.home-1' }) },
    logo: { type: String, default: require('../../../assets/images/logo.png') },
    horizontal: { type: Boolean, default: false },
    items: { type: Array },
    sidebarGroupTitle: { type: Boolean, default: true }
  },
  mounted () {
    if (!this.horizontal) {
      document.addEventListener('click', this.closeSearch, true)
    }
  },
  components: {
    HoverMenu,
    GlobalSearch,
    CollapseMenu
  },
  computed: {
    ...mapGetters({
      bookmark: 'Setting/bookmarkState'
    })
  },
  data () {
    return {
      appName: APPNAME,
      globalSearch: '',
      showSearch: false,
      showMenu: false
    }
  },
  methods: {
    miniSidebar () {
      this.$emit('toggle')
    },
    openSearch () {
      this.showSearch = true
      this.showMenu = 'iq-show'
      this.globalSearch = ''
      if (document.getElementById('searchbox-datalink') !== null) {
        document.getElementById('searchbox-datalink').classList.add('show-data')
      }
    },
    closeSearch (event) {
      const classList = event.target.classList
      if (!classList.contains('searchbox') && !classList.contains('search-input')) {
        this.removeClass()
      }
    },
    removeClass () {
      this.showSearch = false
      this.showMenu = ''
      this.globalSearch = ''
      if (document.getElementById('searchbox-datalink') !== null && document.getElementById('searchbox-datalink') !== undefined) {
        document.getElementById('searchbox-datalink').classList.remove('show-data')
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .collapse-menu{
    @media (min-width:1300px) {
      display: none;
    }
  }
  .iq-sidebar-menu .iq-menu.hover-menu{
    display: flex;
    @media (max-width:1299px){
      display: none !important;
    }
  }
</style>
