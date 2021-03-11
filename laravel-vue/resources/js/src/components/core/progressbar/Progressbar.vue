<template>
  <div class="iq-progress-bar">
    <span :class="`bg-${color}`" ref="progress" style="transition: 'width 2s ease 0s'" :data-value="value"></span>
  </div>
</template>
<script>
import { core } from '../../../config/pluginInit'
export default {
  name: 'Progressbar',
  props: {
    value: { type: Number, default: 0 },
    color: { type: String, default: 'primary' }
  },
  mounted () {
    this.$nextTick()
    setTimeout(() => {
      core.progressInit(this.$refs.progress)
    }, 100)
  }
}
</script>
