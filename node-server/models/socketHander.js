const { query } = require('../utils/db')

let saveUserSocketId = function(userId, socketId) {
  const data = [socketId, userId]
  let _sql = `update account set socketid = ? where id = ? limit 1;`
  return query(_sql, data)
}
let getUserSocketId = function(toUserId) {
  let _sql = `select socketid from user_info where id = ? limit 1;`
  return query(_sql, [toUserId])
}
module.exports = {
  saveUserSocketId,
  getUserSocketId
}