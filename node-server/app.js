const Koa = require('koa')
const cors = require('@koa/cors')
const { createServer } = require('http')
const { Server } = require('socket.io')
const socketServer = require('./socket/socket')
const socketModel = require('./models/socketHander')

const app = new Koa()
app.use(cors())
const httpServer = createServer(app.callback())

const io = new Server(httpServer)

// socketServer(io)

io.on("connection", socket => {
  const socketId = socket.id
  // 登陆
  socket.on("login", async userId => {
    await socketModel.saveUserSocketId(userId, socketId)
  })

  

})

httpServer.listen(3301)
