<script setup lang="ts">
import useStore from '@/store';

type Panel = 'msg' | 'addressBook'

const { menuStore } = useStore()

const changePanel = (panel: Panel) => {
  menuStore.changePanelType(panel)
}

</script>
<template>
  <div class="menu column_center">
    <ul class="menu_list">
      <li class="menu_item" @click="changePanel('msg')">msg</li>
      <li class="menu_item" @click="changePanel('addressBook')">firends</li>
    </ul>
  </div>
</template>
<style lang="scss">
.menu {
  color: #fff;
  height: 100%;
  .menu_list {
    .menu_item {
      margin-bottom: 30px;
    }
  }
}
</style>