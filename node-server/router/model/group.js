const Router = require('koa-router')
const group = new Router()
const groupModel = require('../../models/group')
const verify = require("../../middlewares/verify")


/**
 * 建群
 */
group.post('/create_group', verify, async(ctx, next) => {
  const { user_id, user_email } = ctx
  console.log(user_id, user_email);
  ctx.body = {
    code: 0,
    msg: ''
  }
})

module.exports = group