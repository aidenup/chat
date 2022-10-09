const Router = require('koa-router')
const account = new Router()


account.post('/login', async ctx => {
  ctx.body = {
    code: 200,
    message: "登录",
    data: {
      token: '111',
      data: 'aaa'
    }
  }
})

module.exports = account