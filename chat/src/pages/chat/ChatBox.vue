<script setup lang="ts">
import { reactive, ref } from 'vue';
import { io } from "socket.io-client"
import { ElMessageBox } from 'element-plus'

interface ChatDataItem {
  type: 'your' | 'me' | 'tips'
  id: string // 消息的唯一id
  name?: string // 用户昵称
  msg: string // 聊天内容
  avatar?: string // 头像
  userId?: string // 用户的ID
}

const chatData = ref<ChatDataItem[]>([])
const socket = io('ws://localhost:3301', {
  reconnection: true, // 是否重连
	reconnectionAttempts: 30, // 重新连接的次数
	reconnectionDelay: 1000, // 每过多长时间重连一次
	timeout: 5000, // 超时时间
	auth: {
		token: window.sessionStorage.getItem('token')
	}
})
interface CurUser {
  name: string,
  id: string,
  msg: string
}
const curUser = reactive<CurUser>({
  name: '',
  id: '',
  msg: ''
})
const userList = ref(new Map())

const openJoinBox = () => {
  ElMessageBox.prompt('请输入昵称', '', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
  }).then(({value}) => {
    curUser.name = value
    handleJoin()
  }).catch(() => {})
}


// 发送加入事件
const handleJoin = () => {
  socket.emit('join', Object.assign({}, curUser))
}
// 监听加入成功的事件
socket.on('joined', (e: CurUser) => {
  curUser.id = e.id
  curUser.name = e.name
  curUser.msg = e.msg
})

// 监听welcome 
socket.on('welcome', ({ name, uList }) => {
  uList.forEach((item: any[]) => {
    const [id, value] = item
    userList.value.set(id, value)
  })
  console.log('welcome'+ name + '加入');
})

const handleSubmit = () => {
  const obj = {
    id: Math.random().toString().split('.')[1].slice(0, 10),
    name: curUser.name,
    msg: curUser.msg,
    userId: curUser.id
  }
  const type: 'me' = 'me'
  chatData.value.push(Object.assign({}, { type }, obj))
  curUser.msg = ""
  socket.emit('send', obj)
}

socket.on('message', (e: any) => {
  const msg = Object.assign({}, e, { type: 'your' }) as ChatDataItem
  chatData.value.push(msg)
})

socket.on('back', e => {
  console.log(e);
})

</script>
<template>
  <div class="chat-box">
    <el-button @click="openJoinBox">加入群聊</el-button>
    <div class="msg-content">
      <span v-for="item in chatData">
        {{item.msg}}
      </span>
    </div>
    <div class="button-ipt">
      <input v-model="curUser.msg" type="text" />
      <button @click="handleSubmit">submit</button>
    </div>
  </div>
</template>
<style lang="scss">
.chat-box {
  width: 500px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  .msg-content {
    height: calc(100vh - 100px);
  }
  .button-ipt {
    display: flex;
    input {
      flex: 1;
      height: 30px;
      border: 1px solid rgba($color: #000000, $alpha: .5);
      border-radius: 5px;
      outline: none;
      font-size: 18px;
    }
  }
}
</style>