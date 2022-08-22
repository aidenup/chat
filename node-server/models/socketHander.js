let saveUserSocketId = function(userId, socketId) {
  const data = [socketId, userId]
  let _sql = `update user_info set socketid = ? where id = ? limit 1;`
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