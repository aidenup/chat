const jwt = require('jsonwebtoken')
const secret = require('../config').secret

module.exports = async function(ctx, next) {
  const token = ctx.get('Authorization')
  try {
    const payload = jwt.verify(token, secret)
    ctx.user_id = payload.id
    ctx.user_email = payload.email
    await next()
  } catch (error) {
    ctx.throw(401, error)    
  }
  // await next()
}