<template>
  <div class="d-flex align-items-center">
    <div class="avatar mr-3">
      <img :src="item.image" :alt="item.image" class="avatar-50 ">
      <span class="avatar-status">
        <i class="ri-checkbox-blank-circle-fill" :class="item.isActive ? 'text-success' :'text-warning'"/>
      </span>
    </div>
    <div class="chat-sidebar-name">
      <h6 class="mb-0">{{ item.name }}</h6>
      <span>{{ item.role }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ChatItem',
  props: {
    item: { type: Object }
  }
}
</script>
