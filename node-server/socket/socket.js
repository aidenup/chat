const socketServer = (io) => {
  let userList = new Map()
  io.on('connection', (socket) => {
    // 客户端申请加入
    socket.on('join', joinInfo => {
      if(joinInfo.name === '') {
        socket.emit('error', '请输入用户名')
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
    
    // 客户端发送消息
    socket.on('send', e => {
      console.log(e);
      socket.broadcast.emit('message', e)
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