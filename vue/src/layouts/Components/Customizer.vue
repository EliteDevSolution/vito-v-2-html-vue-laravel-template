<template>
  <div>
    <RightSideBar toggleClass="top-50 setting-toggle">
      <i class="ri-sound-module-fill font-size-18 text-primary" slot="icon" />
      <iq-card class="shadow-none">
        <template v-slot:headerTitle>
          <h4>{{ $t('customizer.colorCustomizer') }}</h4>
        </template>
        <template v-slot:headerAction>
          <b-button variant="primary" size="sm" @click="reset">{{ $t('customizer.reset') }}</b-button>
        </template>
        <template v-slot:body>
          <b-row>
            <b-col cols="12" class="justify-content-between">
              <h4 class="text-left mb-2">{{ $t('customizer.themeColor') }}</h4>
              <div class="text-center">
                <div
                  v-for="(item,index) in colors"
                  :key="index"
                  class="d-inline-flex justify-content-between"
                >
                  <div
                    :style="`background: ${item.primary};border-radius: 50%;`"
                    @click="changeColor(item)"
                    class="p-3 mx-1"
                  ></div>
                </div>
              </div>
            </b-col>
            <div class="border mt-4 mb-4 w-100" />
            <b-col cols="12" class="justify-content-between">
              <h4 class="text-left mb-2">{{ $t('customizer.colorMode') }}</h4>
              <div class="text-center d-flex justify-content-around">
                <img
                  :src="require('../../assets/images/customizer/customizer-01.png')"
                  alt="light"
                  @click="themeMode(false)"
                  class="img-fluid"
                  style="height: 150px;border: 2px solid var(--iq-primary)"
                />
                <img
                  :src="require('../../assets/images/customizer/customizer-03.png')"
                  alt="dark"
                  @click="themeMode(true)"
                  class="img-fluid"
                  style="height: 150px;border: 2px solid var(--iq-primary)"
                />
              </div>
            </b-col>
            <!--            <div class="border mt-4 mb-4 w-100" v-if="!notShowSidebarSetting.includes($route.name)" />-->
            <!--            <b-col cols="12" class="justify-content-between" v-if="!notShowSidebarSetting.includes($route.name)">-->
            <!--              <h4 class="text-left mb-2">{{ $t('customizer.sidebar') }}</h4>-->
            <!--            </b-col>-->
            <!--            <b-col cols="12" class="justify-content-between d-flex" v-if="!notShowMiniSidebar.includes($route.name)">-->
            <!--              <label>{{ $t('customizer.sidebarMini')}}</label>-->
            <!--              <b-form-checkbox class="custom-switch-color" color="primary" v-model="mini" @change="miniSidebar" name="check-button" switch inline>-->
            <!--              </b-form-checkbox>-->
            <!--            </b-col>-->
            <div class="border mt-4 mb-4 w-100" />
            <b-col cols="12" class="justify-content-between">
              <h4 class="text-left mb-2">{{ $t('customizer.rtlMode')}}</h4>
              <div class="text-center d-flex justify-content-around">
                <img
                  :src="require('../../assets/images/customizer/ltr-img.png')"
                  alt="ltr"
                  @click="rtlChange(false)"
                  class="img-fluid"
                  style="height: 150px;border: 2px solid var(--iq-primary)"
                />
                <img
                  :src="require('../../assets/images/customizer/rtl-img.png')"
                  alt="rtl"
                  @click="rtlChange(true)"
                  class="img-fluid"
                  style="height: 150px;border: 2px solid var(--iq-primary)"
                />
              </div>
            </b-col>
            <div class="border mt-4 mb-4 w-100" />
            <b-col cols="12" class="justify-content-between">
              <h4 class="text-left mb-2">{{ $t('customizer.routeAnimation') }}</h4>
              <div class="text-center d-flex">
                <b-form-radio-group
                  @change="animateChange"
                  id="radio-group-1"
                  v-model="animated"
                  :options="animateClass"
                  name="radio-options"
                ></b-form-radio-group>
              </div>
            </b-col>
          </b-row>
        </template>
      </iq-card>
    </RightSideBar>
  </div>
</template>
<script>
import darkLoader from '../../assets/images/darkMode/dark-logo.gif'
import loader from '../../assets/images/loader.gif'
import RightSideBar from '../../components/core/rightsidebar/RightSideBar'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Customizer',
  components: {
    RightSideBar
  },
  computed: {
    ...mapGetters({
      darkMode: 'Setting/darkModeState',
      colors: 'Setting/colorState'
    })
  },
  mounted () {
    this.updateRadio()
  },
  data () {
    return {
      animated: { enter: 'fadeInUp', exit: 'fadeOut' },
      animateClass: [
        { value: { enter: 'zoomIn', exit: 'zoomOut' }, text: 'Zoom' },
        { value: { enter: 'fadeInUp', exit: 'fadeOut' }, text: 'Fade' },
        { value: { enter: 'slideInLeft', exit: 'slideOutRight' }, text: 'Slide' },
        { value: { enter: 'rotateInDownLeft', exit: 'rotateOutDownLeft' }, text: 'Roll' }
      ],
      logo: loader,
      rtl: false,
      dark: false,
      mini: false,
      notShowMiniSidebar: ['dashboard.home-1'],
      notShowSidebarSetting: [
        'dashboard.home-1',
        'dashboard.home-3',
        'dashboard.home-4'
      ]
    }
  },
  methods: {
    themeMode (mode) {
      this.dark = mode
      this.modeChange({ rtl: this.rtl, dark: mode })
      if (mode) {
        this.logo = darkLoader
      } else {
        this.logo = loader
      }
      this.$emit('onLogo', this.logo)
    },
    changeColor (code) {
      document.documentElement.style.setProperty('--iq-primary', code.primary)
      document.documentElement.style.setProperty(
        '--iq-primary-light',
        code.primaryLight
      )
      if (this.darkMode) {
        document.documentElement.style.setProperty(
          '--iq-bg-dark-color',
          code.bodyBgDark
        )
      } else {
        document.documentElement.style.setProperty(
          '--iq-bg-light-color',
          code.bodyBgLight
        )
      }
    },
    reset () {
      this.changeColor({
        primary: '#827af3',
        primaryLight: '#b47af3',
        bodyBgLight: '#efeefd',
        bodyBgDark: '#1d203f'
      })
      this.animated = { enter: 'zoomIn', exit: 'zoomOut' }
      this.themeMode(false)
      this.rtlChange(false)
    },
    rtlChange (mode) {
      this.rtl = mode
      this.modeChange({ rtl: mode, dark: this.darkMode })
      if (this.darkMode) {
        this.logo = darkLoader
      } else {
        this.logo = loader
      }
    },
    updateRadio () {
      this.mini = this.$store.getters['Setting/miniSidebarState']
    },
    async miniSidebar () {
      this.$emit('toggle')
      await this.$nextTick()
      this.updateRadio()
    },
    async animateChange () {
      await this.$nextTick()
      this.$emit('animationChange', this.animated)
    },
    ...mapActions({
      modeChange: 'Setting/layoutModeAction'
    })
  }
}
</script>
