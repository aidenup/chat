<script setup lang="ts">
import LeftSidebar from './chat/LeftSidebar.vue';
import MessageCon from './chat/MessageCon.vue';

</script>
<template>
  <div class="layout">
    <div class="left">
      <LeftSidebar />
    </div>
    <div class="right">
      <MessageCon />
    </div>
  </div>  
</template>
<style lang="scss" scoped>
.layout {
  display: flex;
  height: 100vh;
  .left {
    width: 300px;
  }
  .right {
    flex: 1;
  }
}
</style>