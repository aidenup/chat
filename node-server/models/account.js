const { query } = require('../utils/db')

// 通过email查找用户信息 account
const findDataByEmail = function(email) {
  let _sql = "SELECT * FROM account WHERE email= ?"
  return query(_sql, email)
}

// 注册用户
const inserData = function(value) {
  let _sql = "insert into account(username,email,password) values(?,?,?);"
  return query(_sql, value)
}

module.exports = {
  findDataByEmail,
  inserData
}