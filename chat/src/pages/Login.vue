<script lang="ts" setup>
import { io } from 'socket.io-client'
import { reactive } from 'vue'
import { Api } from '@/api-adapter'
import { useRouter } from 'vue-router'

const router = useRouter()
const socket = io('ws://localhost:3301', {

})
const userAccount = reactive<{name: string, password: string}>({
  name: '',
  password: ''
})

const send = () => {
  socket.emit('send', '来自客户端的消息')
}

socket.on('back', e => {
  console.log(e);
  
})

const submit = async () => {
  if(userAccount.name === '' || userAccount.password === '') return
  // send()
  let req = {
    username: '111',
    password: '1234556'
  }

  Api.login(req).then(res => {
    console.log(res);
  })
  // router.push('/layout')
}


</script>
<template>
  <div class="login_container">
    <div class="left">1</div>
    <div class="right column_center">
      <input v-model="userAccount.name" type="text" placeholder="账号">
      <input v-model="userAccount.password" type="text" placeholder="密码">
      <button @click="submit">登录</button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .login_container {
    display: flex;
    height: 100%;
    .left {
      flex: 1;
      background-color: #346d4a;
    }
    .right {
      flex: 1;
      input {
        font-size: 24px;
        border: 1px solid rgb(0, 0, 0);
      }
      button {
        font-size: 24px;
      }
    }
  }
</style>