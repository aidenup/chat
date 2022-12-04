<script setup lang="ts">

</script>
<template>
  <div class="flex">
    <div class="sidebar" data-tauri-drag-region>
      side
    </div>
    <div class="page">
      <router-view></router-view>
    </div>
  </div>
</template>
<style lang="scss">
.sidebar {
  width: 65px;
  background-color: #C9E1E8;
  height: 100vh;
}
</style>