<script lang="ts" setup>
import { reactive } from 'vue'
import { Api } from '@/api-adapter'
import { useRouter } from 'vue-router'
import { Login } from '@/api-adapter/model/account'
import { ElMessage } from 'element-plus'
import socket from '@/utils/socket'

const router = useRouter()
// 创建webscoket 实例


const userAccount = reactive<Login.LoginReqForm>({
  email: '2965157945@qq.com',
  password: '123456'
})

const send = () => {
  socket.emit('send', '来自客户端的消息')
}
socket.on('back', e => {
  console.log(e);
})

// 加入群聊
const handleJoin = (username: string) => {
  socket.emit('join', {username})
}

const submit = async () => {
  if(userAccount.email === '' || userAccount.password === '') {
    ElMessage.closeAll()
    ElMessage.warning('请输入完整')
  }
  Api.login(userAccount).then(res => {
    if(res.code === 200 && res.data) {
      window.localStorage.setItem('token', res.data.token)

      socket.emit('login', res.data.id)


      ElMessage.success('登录成功！')
      handleJoin(res.data.username)
      setTimeout(() => {
        ElMessage.closeAll()
        router.push('/layout')
      }, 1000);
    }
  })
}


</script>
<template>
  <div class="login_container">
    <div class="left">1</div>
    <div class="right column_center">
      <input v-model="userAccount.email" type="text" placeholder="账号">
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