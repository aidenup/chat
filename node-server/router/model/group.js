const Router = require('koa-router')
const group = new Router()
const groupModel = require('../../models/group')
const verify = require("../../middlewares/verify")
const { v4: uuidv4 } = require('uuid')


/**
 * 建群
 */
group.post('/create_group', verify, async(ctx, next) => {
  // 建群之前的验证
  // 。。。。

  const { group_name, create_time } = ctx.request.body
  const uuid = uuidv4()
  const group_arr = [uuid, group_name, create_time]
  await groupModel.createGroup(group_arr)

  ctx.body = {
    code: 200,
    msg: 'success',
    data: {
      group_id: uuid
    }
  }
})

module.exports = group