<template>
  <ais-clear-refinements>
    <div slot-scope="{ refine }">
      <b-button variant=" iq-bg-primary iq-waves-effect"
                block
                size="sm"
                @click.prevent="refine"
      ><i class="ri-restart-line font-size-18 mr-0"></i></b-button>
    </div>
  </ais-clear-refinements>
</template>
<script>
export default {
  name: 'ResetFilter'
}
</script>
