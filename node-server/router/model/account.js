const Router = require('koa-router')
const account = new Router()
const accountModel = require('../../models/account')
const md5 = require('md5')
const jwt = require('jsonwebtoken')
const { secret } = require('../../config')

account.post('/login', async (ctx, next) => {
  let email = ctx.request.body.email || '',
      password = ctx.request.body.password || ''

  if(email === '' || password === '') {
    ctx.body = {
      code: 0,
      message: '邮箱或密码不能为空'
    }
    return
  }
  const RowDataPacket = await accountModel.findDataByEmail(email)
  const res = JSON.parse(JSON.stringify(RowDataPacket))
  if(res.length > 0) {
    if(md5(password) === res[0]['password']) {
      const payload = {
        email: email,
        id: res[0]['id']
      }
      const token = jwt.sign(payload, secret, {
        expiresIn: Math.floor(Date.now() / 1000) + 24 * 60 * 60
      })
      ctx.body = {
        code: 200,
        message: '登录成功',
        data: {
          token,
          ...res[0] 
        }
      }
    } else {
      ctx.body = {
        code: 0,
        message: '密码错误'
      }
    }
  } else {
    ctx.body = {
      code: 0,
      message: '邮箱不存在'
    }
  }
})

account.post('/register', async (ctx, next) => {
  const user = {
    username: ctx.request.body.username,
    email: ctx.request.body.email,
    password: ctx.request.body.password
  }
  if(user.email === '' || user.password === '' || user.username === '') {
    ctx.body = {
      code: 0,
      message: '请填写完整信息'
    }
    return
  }
  let RowDataPacket = await accountModel.findDataByEmail(user.email)
  if(RowDataPacket.length) {
    ctx.body = {
      code: 0,
      message: '邮箱已注册'
    }
  } else {
    const RowData = await accountModel.inserData([
      user.username,
      user.email,
      md5(user.password)
    ])
    if(RowData) {
      ctx.body = {
        code: 200,
        message: '注册成功'
      }
    }
  }
})


module.exports = account