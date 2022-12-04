<script setup lang="ts">

</script>
<template>
  <header>header</header>
  <div class="columns">
    <div class="sidebar">sidebar</div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>
<style lang="scss">
header {
  height: 50px;
}
.columns {
  display: flex;
  .sidebar {
    width: 130px;
    height: calc(100vh - 52px);
    border: 1px solid red;
  }
  .content {
    flex: 1;
    border: 1px solid #000;
  }
}
</style>