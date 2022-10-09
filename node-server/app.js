const Koa = require('koa')
const cors = require('@koa/cors')
const bodyParser = require('koa-bodyparser')
const { createServer } = require('http')
const { Server } = require('socket.io')
const socketModel = require('./models/socketHander')
const router = require("./router")

const app = new Koa()
const port = 3301

const httpServer = createServer(app.callback())
const io = new Server(httpServer, {
  cors: {
		origin: '*' // 或者使用 *
	}
})

app.use(cors())
app.use(bodyParser())
app.use(router.routes()).use(router.allowedMethods())

io.on("connection", socket => {
  const socketId = socket.id
  // 登录
  socket.on('login', async userId => {
    await socketModel.saveUserSocketId(userId, socketId)
  })
  // 更新socketId
  socket.on('update', async userId => {
    await socketModel.saveUserSocketId(userId, socketId)
  })
  // 私聊
  socket.on('sendPrivateMsg', async data => {
    
  })
  // 群聊
  socket.on('sendGroupMsg', async data => {

  })

  socket.on('send', e => {
    console.log(e);
    socket.emit('back', '服务器返回的消息')
  })

  socket.on('disconnecting', () => {
    console.log('用户离开');
  })
})

httpServer.listen(port, () => {
  console.log('server is running:3301');
})
