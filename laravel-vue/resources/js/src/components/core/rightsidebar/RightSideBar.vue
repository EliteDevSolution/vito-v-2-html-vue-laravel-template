<template>
  <!-- Right Sidebar Panel Start-->
  <div :class="`right-sidebar-mini `+miniClass">
    <div class="right-sidebar-toggle" @click="toggleMini" :class="toggleClass">
      <slot name="icon" v-if="hasIconSlot" />
      <template v-else>
        <slot name="openIcon" class="side-left-icon" v-if="hasOpenIconSlot" />
        <i class="ri-arrow-left-line side-left-icon" v-else></i>
        <slot name="closeIcon" class="side-right-icon" v-if="hasCloseIconSlot" />
        <i class="ri-arrow-right-line side-right-icon" v-else></i>
      </template>
    </div>
    <div class="right-sidebar-panel p-0">
      <slot />
    </div>
  </div>
  <!-- Right Sidebar Panel End-->
</template>
<script>
export default {
  name: 'RightSideBar',
  data () {
    return {
      rightSideBarMini: false,
      miniClass: ''
    }
  },
  props: {
    toggleClass: { type: String, default: '' }
  },
  computed: {
    hasIconSlot () {
      return !!this.$slots.icon
    },
    hasOpenIconSlot () {
      return !!this.$slots.openIcon
    },
    hasCloseIconSlot () {
      return !!this.$slots.closeIcon
    }
  },
  methods: {
    toggleMini () {
      this.rightSideBarMini = !this.rightSideBarMini
      this.checkRightSideBar()
    },
    checkRightSideBar () {
      if (this.rightSideBarMini) {
        this.miniClass = 'right-sidebar'
      } else {
        this.miniClass = ''
      }
    }
  }
}
</script>
