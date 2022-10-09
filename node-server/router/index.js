const Router = require('koa-router')
const account = require("./model/account")

const router = new Router()

router.get("/", async ctx => {
  ctx.body = "hello world"
})
router.use('/account', account.routes(), router.allowedMethods())


module.exports = router