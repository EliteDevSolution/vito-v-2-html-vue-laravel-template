<template>
  <div></div>
</template>
<script>
import { core } from '../../config/pluginInit'

export default {
  name: 'BlankPage',
  mounted () {
    core.index()
  }
}
</script>
