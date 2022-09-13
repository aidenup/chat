<script setup lang="ts">
import MessageList from './common/MessageList.vue';

</script>
<template>
  <div class="column_center container">
    <div class="header">
      <div class="left">
        <div class="avatar"><img src="" /></div>
        <div class="info">
          <div>
            <p>user_name</p>
          </div>
          <div class="short_message">hello world</div>
        </div>
      </div>
      <div class="right">
        <ul class="fun_list">
          <li>O</li>
          <li>O</li>
          <li>O</li>
          <li>O</li>
        </ul>
      </div>
    </div>
    <div class="message_content">
      <MessageList />
    </div>
    <div class="bottom_input">
      <div class="input_con flex">
        <input class="input" type="text" />
        <div class="tools row_center">
          <span class="send ">发送</span>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/styles/index.scss";

.container {
  height: 100vh;
}

.header {
  width: 100%;
  height: $row_head;
  border-bottom: 1px solid rgba($color: #000000, $alpha: .1);
  display: flex;
  align-items: center;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
}

.left {
  display: flex;

  .avatar {
    margin-right: 12px;
    img {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      border: 1px solid rgba($color: #000000, $alpha: .5);
    }
  }

  .info {
    flex: 1;

    div {
      display: flex;
      justify-content: space-between;

      p {
        font-size: 18px;
        font-weight: 600;
      }

      span {
        color: #666;
      }
    }

    .short_message {
      font-size: 14px;
      color: #333;
    }
  }
}

.right {
  .fun_list {
    display: flex;

    li {
      margin-left: 10px;
    }
  }
}

.message_content {
  flex: 1;
  background-color: #fafafa;
  width: 100%;
}

.bottom_input {
  height: $row_head;
  text-align: center;
  width: 100%;
  padding: 15px 30px;

  .input_con {
    width: 100%;
    height: 100%;
    background-color: #f4f4f4;
    border-radius: 10px;
    border: 1px solid rgba($color: #000000, $alpha: .1);
    overflow: hidden;
    input {
      flex: 1;
      outline: none;
      font-size: 17px;
      padding: 0 10px;
      height: 100%;
      background-color: transparent;
    }

    .tools {
      width: 100px;

      .send {
        cursor: pointer;
      }
    }
  }
}
</style>