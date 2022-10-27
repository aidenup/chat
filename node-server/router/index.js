const Router = require('koa-router')
const account = require("./model/account")
const group = require("./model/group")

const router = new Router()

router.get("/", async ctx => {
  ctx.body = "hello world"
})
router.use('/account', account.routes(), router.allowedMethods())
router.use('/group', group.routes(), router.allowedMethods())


module.exports = router