<script lang="ts" setup>
import { ref } from 'vue';


const msgList = ref([
  {
    userName: 'allez',
    sendTime: '9:00 AM',
    message: 'When the text exceeds the width of div, the line wraps automatically.',
    role: 'opposite'
  },
  {
    userName: 'aiden',
    sendTime: '9:01 AM',
    message: 'When the text exceeds the width of div, the line wraps automatically.',
    role: 'oneself'
  },
  {
    userName: 'aiden',
    sendTime: '9:01 AM',
    message: 'When the text exceeds the width of div, the line wraps automatically.',
    role: 'oneself'
  },
  {
    userName: 'aiden',
    sendTime: '9:01 AM',
    message: 'When the text exceeds the width of div, the line wraps automatically.',
    role: 'oneself'
  },
  {
    userName: 'allez',
    sendTime: '9:00 AM',
    message: 'When the text exceeds the width of div, the line wraps automatically.',
    role: 'opposite'
  },
  {
    userName: 'aiden',
    sendTime: '9:01 AM',
    message: 'When the text exceeds the width of div, the line wraps automatically.',
    role: 'oneself'
  },
  {
    userName: 'allez',
    sendTime: '9:00 AM',
    message: 'When the text exceeds the width of div, the line wraps automatically.',
    role: 'opposite'
  },
])

</script>
<template>
  <div class="message_list">
    <div class="message_item flex" v-for="item in msgList" :class="{'msg_end': item.role === 'oneself'}">
      <div v-if="item.role==='opposite'" class="avatar"><img src="" /></div>
      <div class="con">
        <div class="info flex" :class="{'msg_end': item.role === 'oneself'}">
          <h4 v-if="item.role==='opposite'">username</h4>
          <span style="margin-right: 10px;">time</span>
          <h4 v-if="item.role==='oneself'">username</h4>
        </div>
        <div class="msg" :class="{'oneself_msg': item.role === 'oneself'}">When the text exceeds the width of div, the line wraps automatically.</div>
      </div>
      <div v-if="item.role==='oneself'" class="avatar"><img src="" /></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/styles/index.scss";

.msg_end .con .msg {
  border-top-left-radius: 20px !important;
  border-top-right-radius: 0 !important;
}

.msg_end {
  justify-content: flex-end;
}

.message_list {
  padding: 15px 15px;
  height: calc(100vh - $row_head * 2);
  overflow: auto;
  .message_item {
    margin-top: 20px;
    .avatar {
      padding: 0 15px;
      box-sizing: content-box;
      width: 50px;
      height: 50px;

      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: rgb(211, 211, 211);
      }
    }

    .con {
      .oneself_msg {
        background-color: #428157 !important;
        color: #fff;
      }
      .info {
        margin-bottom: 5px;

        h4 {
          font-size: 19px;
          margin-right: 10px;
        }

        span {
          font-size: 14px;
          line-height: 20px;
          color: #999;
        }
      }

      .msg {
        background-color: #eeedee;
        padding: 15px 15px;
        border-radius: 20px;
        border-top-left-radius: 0px;
        font-size: 17px;
        max-width: 300px;
        word-wrap: break-word;
        word-break: break-all;
      }
    }
  }
}
</style>