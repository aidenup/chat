const Router = require('koa-router')
const group = new Router()
const groupModel = require('../../models/group')
const verify = require("../../middlewares/verify")
const { v4: uuidv4 } = require('uuid')


/**
 * 建群
 */
group.post('/create_group', verify, async(ctx) => {
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

/**
 * 加入群
 */
group.post('/join_group', verify, async(ctx) => {
  const user_id = ctx.user_id, group_id = ctx.request.body.group_id
  await groupModel.joinGroup(user_id, group_id)
  .then(res => {
    console.log('加入成功');
    ctx.body = {
      code: 200,
      message: 'success'
    }
  }).catch(err=> {
    console.log(err);
  })
})

// 根据用户ID 查询群
group.get('/select_group_byuserid', verify, async(ctx) => {
  const user_id = ctx.user_id
  await groupModel.selectGroupByUserId(user_id)
  .then(res => {
    console.log(res);
    ctx.body = {
      code: 200,
      msg: 'success',
      data: res
    }
  })
})


module.exports = group