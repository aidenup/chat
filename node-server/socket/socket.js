const socketServer = (io) => {
  let userList = new Map()
  let roomList = new Map()
  io.on('connection', (socket) => {
    // 客户端申请加入
    socket.on('join', joinInfo => {
      if(joinInfo.name === '') {
        socket.emit('error', '请输入用户名')
        return
      }
      if(!socket.rooms.has(joinInfo.roomName)) {
        socket.emit('tips', {
          code: '1',
          tipMsg: '没有此聊天室'
        })
        return
      }
      userList.set(socket.id, joinInfo)
      // 加入成功给客户端回应
      socket.emit('joined', Object.assign({}, joinInfo, { id: socket.id }))
  
      const uList = [...userList.entries()]
      // 触发广播
      socket.broadcast.emit('welcome', {
        ...joinInfo,
        uList
      })
      // 给自己展示加入信息
      socket.emit('welcome', {
        ...joinInfo,
        uList
      })
    })

    // 创建聊天室
    socket.on('createChatRoom', (roomName)=> {
      if(socket.rooms.has(roomName)) {
        socket.emit('tips', {
          code: '1',
          tipMsg: '已有此聊天室'
        })
      }else {
        socket.join(roomName)
        socket.emit('tips', {
          code: '0',
          tipMsg: '创建成功'
        })
      }
      console.log(socket.rooms);
    })
    
    // 客户端发送消息
    socket.on('send', e => {
      socket.broadcast.to(e.roomName).emit('message', e)
    })
  
    // 用户退出播报
    socket.on('disconnecting', () => {
      const bool = userList.delete(socket.id)
      bool && socket.broadcast.emit('quit', socket.id)
      console.log('用户离开，连接断开');
    })
  })

  // io.use((socket, next) => {
  //   const token = socket.handshake.auth.token
  //   console.log(token);
  // })
}
module.exports = socketServer