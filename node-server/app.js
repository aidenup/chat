const Koa = require('koa')
const { createServer } = require('http')
const { Server } = require('socket.io')
const socketServer = require('./socket/socket')

const app = new Koa()
const httpServer = createServer(app.callback())
const io = new Server(httpServer, {
  cors: {
    origin: '*'
  }
})

socketServer(io)

httpServer.listen(3301)
