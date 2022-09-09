<script setup lang="ts">
import MessageListItem from './common/MessageListItem.vue';

</script>
<template>
  <div class="left_sidebar">
    <div class="header">
      <div class="avatar">
        <img src="" />
        <span class="user_name">username</span>
        <span class="setup">*</span>
      </div>
    </div>
    <div class="search">
      <input type="text" />
    </div>
    <div class="message_menu">message_menu</div>
    <div class="message_list">
      <MessageListItem v-for="item in 20" :active="item === 2 ? true : false" />
    </div>
  </div>

</template>
<style lang="scss" scoped>
.left_sidebar {
  height: 100vh;
  border-right: 1px solid rgba(0, 0, 0, .1);
}

.header {
  height: 50px;
  display: flex;
  align-items: center;
  padding: 8px 15px;
  border-bottom: 1px solid rgba($color: #000000, $alpha: .1);
  box-sizing: border-box;

  .avatar {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    img {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      border: 1px solid red;
    }

    .user_name {
      flex: 1;
      margin: 0 10px;
    }
  }
}

.search {
  box-sizing: border-box;
  display: flex;

  input {
    flex: 1;
    margin: 10px 15px;
    border: 1px solid rgba($color: #000000, $alpha: 0.5);
    height: 29px;
    border-radius: 15px;
  }
}

.message_menu {
  padding: 15px 15px;
}

.message_list {
  height: calc(100vh - 150px);
  overflow: auto;
}
</style>