<template>
  <div>
    <Loader />
    <Customizer @onLogo="changeLogo" @toggle="sidebarMini" @animationChange="routerAnimationChange" />
    <div class="wrapper">
      <!-- Sidebar  -->
      <SmallSidebar v-if="$route.name === 'dashboard.home-5'" :logo="SmallSidebarLogo" @toggle="sidebarMini" />
      <Sidebar :items="verticalMenu" :logo="logo" :onlyLogo="onlyLogo" :onlyLogoText="onlyLogoText" @toggle="sidebarMini" :toggleButton="toggleSideIcon" :sidebarGroupTitle="sidebarGroupTitle" />
      <!-- TOP Nav Bar -->
      <DefaultNavBar title="Dashboard" :homeURL="{ name: 'dashboard.home-1' }" :sidebarGroupTitle="sidebarGroupTitle" @toggle="sidebarMini" :logo="logo">
        <template slot="responsiveRight">
          <ul class="navbar-nav ml-auto navbar-list">
            <li class="nav-item" v-nav-toggle>
              <a class="search-toggle iq-waves-effect language-title" href="#"><img :src="selectedLang.image" alt="img-flaf" class="img-fluid mr-1" style="height: 16px; width: 16px;" /> {{ selectedLang.title }} <i class="ri-arrow-down-s-line"></i></a>
              <div class="iq-sub-dropdown">
                <a class="iq-sub-card" href="javascript:void(0)" v-for="(lang, i) in langsOptions" :key="`Lang${i}`" @click="langChange(lang)">
                  <img :src="lang.image" alt="img-flaf" class="img-fluid mr-2" />{{ lang.title }}
                </a>
              </div>
            </li>
            <li class="nav-item" v-nav-toggle>
              <a href="javascript:void(0)" class="iq-waves-effect" :class="cartCount > 0 ? 'search-toggle' : ''">
                <i class="ri-shopping-cart-2-line" />
                <span class="menu-tag ml-2">{{ cartCount }}</span>
              </a>
              <div class="iq-sub-dropdown">
                <div class="iq-card shadow-none m-0">
                  <div class="iq-card-body p-0 ">
                    <div class="bg-primary p-3">
                      <h5 class="mb-0 text-white">{{ $t('nav.allCarts') }}</h5>
                    </div>
                    <div class="iq-sub-card" v-for="(item, index) in cartItems" :key="index">
                      <div class="media align-items-center">
                        <div class="w-20 text-center d-none justify-content-center d-md-block">
                          <img :src="item.image" :alt="item.name" class="w-100 align-self-center mr-3" />
                        </div>
                        <div class="media-body ml-3">
                          <b-button variant=" iq-bg-danger mt-3" size="sm" class="float-right" @click="removeToCart(item)">X</b-button>
                          <h6 class="mb-0 ">{{ item.name.substring(0,20) + '...' }}</h6>
                          <p class="mb-0 font-size-12">{{ item.description.substring(0,20) + '...' }}</p>
                          <p class="mb-0"><b>$ {{ item.price }}</b></p>
                        </div>
                      </div>
                    </div>
                    <router-link :to="{ name: 'app.e-commerce.cart'}"><b-button variant=" iq-bg-primary" block><i class="fas fa-cart-plus"/>{{ $t('nav.viewCarts') }}</b-button></router-link>
                  </div>
                </div>
              </div>
            </li>
            <li class="nav-item" v-nav-toggle>
              <a href="#" class="search-toggle iq-waves-effect">
                <lottie :option="require('../assets/images/small/lottie-bell')" id="lottie-beil" />
                <span class="bg-danger dots"></span>
              </a>
              <div class="iq-sub-dropdown">
                <div class="iq-card shadow-none m-0">
                  <div class="iq-card-body p-0 ">
                    <div class="bg-primary p-3">
                      <h5 class="mb-0 text-white">{{ $t('nav.allNotifications') }}<small class="badge  badge-light float-right pt-1">4</small></h5>
                    </div>
                    <a href="#" class="iq-sub-card" v-for="(item, index) in notification" :key="index">
                      <div class="media align-items-center">
                        <div class="">
                          <img class="avatar-40 rounded" :src="item.image" alt="img">
                        </div>
                        <div class="media-body ml-3">
                          <h6 class="mb-0 ">{{ item.name }}</h6>
                          <small class="float-right font-size-12">{{ item.date }}</small>
                          <p class="mb-0">{{ item.description.substring(0,40) + '...' }}</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <!-- <li class="nav-item" v-nav-toggle>
              <a href="#" class="search-toggle iq-waves-effect">
                <lottie :option="require('../assets/images/small/lottie-mail')" id="lottie-mail" />
                <span class="bg-primary count-mail"></span>
              </a>
              <div class="iq-sub-dropdown">
                <div class="iq-card shadow-none m-0">
                  <div class="iq-card-body p-0 ">
                    <div class="bg-primary p-3">
                      <h5 class="mb-0 text-white">{{ $t('nav.allMessages') }}<small class="badge  badge-light float-right pt-1">5</small></h5>
                    </div>
                    <a href="#" class="iq-sub-card" v-for="(item,index) in message" :key="index">
                      <div class="media align-items-center">
                        <div class="">
                          <img class="avatar-40 rounded" :src="item.image" alt="img">
                        </div>
                        <div class="media-body ml-3">
                          <h6 class="mb-0 ">{{ item.name }}</h6>
                          <small class="float-left font-size-12">{{ item.date }}</small>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </li> -->
          </ul>
        </template>
        <template slot="right">
          <ul class="navbar-list">
            <li class="" v-nav-toggle>
              <a href="#" class="search-toggle iq-waves-effect d-flex align-items-center bg-primary rounded">
                <img :src="userProfile" class="img-fluid rounded mr-3" alt="user">
                <div class="caption">
                  <h6 class="mb-0 line-height text-white">Nik jon</h6>
                  <span class="font-size-12 text-white">{{ $t('nav.user.available') }}</span>
                </div>
              </a>
              <div class="iq-sub-dropdown iq-user-dropdown">
                <div class="iq-card shadow-none m-0">
                  <div class="iq-card-body p-0 ">
                    <div class="bg-primary p-3">
                      <h5 class="mb-0 text-white line-height">Hello Nik jone</h5>
                      <span class="text-white font-size-12">{{ $t('nav.user.available') }}</span>
                    </div>
                    <a href="#" class="iq-sub-card iq-bg-primary-hover">
                      <div class="media align-items-center">
                        <div class="rounded iq-card-icon iq-bg-primary">
                          <i class="ri-file-user-line"></i>
                        </div>
                        <div class="media-body ml-3">
                          <h6 class="mb-0 ">{{ $t('nav.user.profileTitle') }}</h6>
                          <p class="mb-0 font-size-12">{{ $t('nav.user.profileSub') }}</p>
                        </div>
                      </div>
                    </a>
                    <a href="#" class="iq-sub-card iq-bg-primary-hover">
                      <div class="media align-items-center">
                        <div class="rounded iq-card-icon iq-bg-primary">
                          <i class="ri-profile-line"></i>
                        </div>
                        <div class="media-body ml-3">
                          <h6 class="mb-0 ">{{ $t('nav.user.profileEditTitle') }}</h6>
                          <p class="mb-0 font-size-12">{{ $t('nav.user.profileEditSub') }}</p>
                        </div>
                      </div>
                    </a>
                    <a href="#" class="iq-sub-card iq-bg-primary-hover">
                      <div class="media align-items-center">
                        <div class="rounded iq-card-icon iq-bg-primary">
                          <i class="ri-account-box-line"></i>
                        </div>
                        <div class="media-body ml-3">
                          <h6 class="mb-0 ">{{ $t('nav.user.accountSettingTitle') }}</h6>
                          <p class="mb-0 font-size-12">{{ $t('nav.user.accountSettingSub') }}</p>
                        </div>
                      </div>
                    </a>
                    <a href="#" class="iq-sub-card iq-bg-primary-hover">
                      <div class="media align-items-center">
                        <div class="rounded iq-card-icon iq-bg-primary">
                          <i class="ri-lock-line"></i>
                        </div>
                        <div class="media-body ml-3">
                          <h6 class="mb-0 ">{{ $t('nav.user.privacySettingTitle') }}</h6>
                          <p class="mb-0 font-size-12">{{ $t('nav.user.privacySettingSub')}}</p>
                        </div>
                      </div>
                    </a>
                    <div class="d-inline-block w-100 text-center p-3">
                      <a class="bg-primary iq-sign-btn" href="javascript:void(0)" @click="logout" role="button">{{ $t('nav.user.signout') }}<i class="ri-login-box-line ml-2"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </template>
      </DefaultNavBar>
      <!-- TOP Nav Bar END -->
      <div id="content-page" class="content-page">
        <b-container fluid="" v-if="!notBookmarkRouts.includes($route.name)">
          <b-row>
            <BreadCrumb />
          </b-row>
        </b-container>
        <transition name="router-anim" :enter-active-class="`animated ${animated.enter}`" mode="out-in"
                    :leave-active-class="`animated ${animated.exit}`">
          <router-view/>
        </transition>
      </div>
      <LayoutFixRightSide v-if="$route.name === 'dashboard.home-1' " />
    </div>
    <LayoutFooter />
  </div>
</template>
<script>
import { core } from '../config/pluginInit'
import { Users } from '../FackApi/api/chat'
import { mapActions, mapGetters } from 'vuex'
import Loader from '../components/core/loader/Loader'
import Sidebar from '../components/core/sidebars/Sidebar'
import DefaultNavBar from '../components/core/navbars/DefaultNavBar'
import SideBarItems from '../FackApi/json/SideBar'
import profile from '../assets/images/user/user-1.jpeg'
import loader from '../assets/images/loader.gif'
import darkLoader from '../assets/images/darkMode/dark-logo.gif'
import Lottie from '../components/core/lottie/Lottie'
import Customizer from './Components/Customizer'
import LayoutFixRightSide from './Components/LayoutFixRightSide'
import WhiteLogo from '../assets/images/logo-2.png'
import SmallSidebar from '../components/core/sidebars/SmallSidebar'
import BreadCrumb from '../components/core/breadcrumbs/BreadCrumb'
import LayoutFooter from './Components/LayoutFooter'
export default {
  name: 'VerticleLayout',
  components: {
    LayoutFooter,
    LayoutFixRightSide,
    Customizer,
    Lottie,
    Loader,
    Sidebar,
    DefaultNavBar,
    SmallSidebar,
    BreadCrumb
  },
  mounted () {
    this.layoutSetting(this.$route.name)
  },
  computed: {
    ...mapGetters({
      cartCount: 'Ecommerce/cartCountState',
      cartItems: 'Ecommerce/cartState',
      selectedLang: 'Setting/langState',
      langsOptions: 'Setting/langOptionState',
      darkMode: 'Setting/darkModeState',
      rtlMode: 'Setting/rtlModeState',
      colors: 'Setting/colorState'
    }),
    toggleSideIcon () {
      let show = true
      switch (this.$route.name) {
        case 'dashboard.home-3':
        case 'dashboard.home-4':
        case 'dashboard.home-5':
        case 'dashboard.home-6':
          show = false
          break
      }
      return show
    }
  },
  watch: {
    $route: function (to, from) {
      this.layoutSetting(to.name)
    }
  },
  // sidebarTicket
  data () {
    return {
      animated: { enter: 'fadeInUp', exit: 'fadeOut' },
      verticalMenu: SideBarItems,
      userProfile: profile,
      onlyLogo: false,
      onlyLogoText: false,
      sidebarGroupTitle: true,
      logo: loader,
      usersList: Users,
      rtl: false,
      SmallSidebarLogo: WhiteLogo,
      message: [
        { image: require('../assets/images/user/user-01.jpg'), name: 'Nik Emma Watson', date: '13 jan' },
        { image: require('../assets/images/user/user-02.jpg'), name: 'Greta Life', date: '14 Jun' },
        { image: require('../assets/images/user/user-03.jpg'), name: 'Barb Ackue', date: '16 Aug' },
        { image: require('../assets/images/user/user-04.jpg'), name: 'Anna Sthesia', date: '21 Sept' },
        { image: require('../assets/images/user/user-05.jpg'), name: 'Bob Frapples', date: '29 Sept' }
      ],
      notification: [
        { image: require('../assets/images/user/user-01.jpg'), name: 'Nik Emma Watson', date: '23 hour ago', description: 'Enjoy smart access to videos, games' },
        { image: require('../assets/images/user/user-02.jpg'), name: 'Greta Life', date: '14 hour ago', description: 'Google Chromecast: Enjoy a world of entertainment' },
        { image: require('../assets/images/user/user-03.jpg'), name: 'Barb Ackue', date: '16 hour ago', description: 'Dell Inspiron Laptop: Get speed and performance from' },
        { image: require('../assets/images/user/user-04.jpg'), name: 'Anna Sthesia', date: '21 hour ago', description: 'Deliver your favorite playlist anywhere in your home ' },
        { image: require('../assets/images/user/user-05.jpg'), name: 'Bob Frapples', date: '11 hour ago', description: 'MacBook Air features up to 8GB of memory, a fifth-generation' }
      ],
      notBookmarkRouts: [
        'dashboard.home-1',
        'dashboard.home-2',
        'dashboard.home-3',
        'dashboard.home-4',
        'dashboard.home-5',
        'dashboard.home-6'
      ]
    }
  },
  methods: {
    layoutSetting (routeName) {
      this.modeChange({ rtl: this.rtlMode, dark: this.darkMode })
      this.onlyLogo = true
      this.onlyLogoText = true
      this.sidebarGroupTitle = true
      switch (routeName) {
        case 'dashboard.home-5':
          this.onlyLogoText = true
          this.onlyLogo = false
          break
        case 'dashboard.home-6':
          this.logo = WhiteLogo
          this.onlyLogo = true
          this.onlyLogoText = false
          this.sidebarGroupTitle = false
          break
        default:
          if (this.darkMode) {
            this.logo = darkLoader
          } else {
            this.logo = loader
          }
          break
      }
    },
    changeLogo (e) {
      this.logo = e
    },
    sidebarMini () {
      core.triggerSet()
      this.$store.dispatch('Setting/miniSidebarAction')
    },
    logout () {
      localStorage.removeItem('user')
      localStorage.removeItem('access_token')
      this.$router.push({ name: 'auth1.sign-in1' })
    },
    langChange (lang) {
      this.langChangeState(lang)
      this.$i18n.locale = lang.value
      document.getElementsByClassName('iq-show')[0].classList.remove('iq-show')
      if (lang.value === 'ar') {
        this.rtlAdd(lang)
      } else {
        this.rtlRemove(lang)
      }
    },
    routerAnimationChange (e) {
      this.animated = e
    },
    ...mapActions({
      removeToCart: 'Ecommerce/removeToCartAction',
      langChangeState: 'Setting/setLangAction',
      rtlAdd: 'Setting/setRtlAction',
      rtlRemove: 'Setting/removeRtlAction',
      modeChange: 'Setting/layoutModeAction'
    })
  }
}
</script>
<style>
  @import url("../assets/css/custom.css");
  @import url("../assets/css/PriceSlider.css");
</style>
