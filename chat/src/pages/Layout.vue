<script setup lang="ts">
import SideMenu from '@/components/menu/SideMenu.vue';
import Friends from '@/pages/chat/Friends.vue';
import ChatBox from './chat/ChatBox.vue';

</script>
<template>
  <div class="layout">
    <SideMenu />
    <div class="content">
      <Friends />
      <ChatBox />
    </div>
  </div>
</template>
<style lang="scss">
.layout {
  display: flex;
  background-color: antiquewhite;
  .content {
    display: flex;
  }
}
</style>