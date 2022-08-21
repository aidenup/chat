<script setup lang="ts">

</script>
<template>
  <div class="menu">
    <ul class="menu-list">
      <li class="menu-item">chat</li>
    </ul>
  </div>
</template>
<style lang="scss">
.menu {
  width: 200px;
  height: 100vh;
  padding: 20px 15px;
  box-sizing: border-box;
  background-color: #fff;
  .menu-list {
    .menu-item {
      border: 1px solid #555;
      padding: 10px 15px;
      border-radius: 8px;
      box-shadow: 0px 0px 20px -5px rgba($color: #000000, $alpha: .5);
      cursor: pointer;
    }
  }
}
</style>