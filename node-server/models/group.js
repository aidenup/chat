const { query } = require('../utils/db.js')

// 创建群
const createGroup = function(group_arr) {
  let _sql = "INSERT INTO group_info (group_id,group_name,create_time) VALUES(?,?,?);"
  return query(_sql, group_arr)
}

// 加入群
const joinGroup = function(user_id, group_id) {
  let _sql = "INSERT INTO group_user_relation(user_id, group_id) VALUES(?,?);"
  return query(_sql, [user_id, group_id])
}

// 用户是否在群中
const isINGroup = function(user_id, group_id) {
  let _sql = "SELECT * FROM group_user_relation WHERE user_id = ? AND group_id = ?;"
  return query(_sql, [user_id, group_id])
}

// 根据用户id 查询群
const selectGroupByUserId = function(user_id) {
  let _sql = `SELECT u.user_id,u.group_id,g.group_name 
              FROM group_user_relation AS u 
              LEFT JOIN group_info as g 
              on u.group_id=g.group_id WHERE u.user_id=?;`
  return query(_sql, [user_id])
}


// 删除群
const exitGroup = (user_id, group_id) => {
  let _sql = "DELETE FROM group_user_relation WHERE user_id = ? AND group_id = ?;"
  return query(_sql, [user_id, group_id])
}

module.exports = {
  createGroup,
  joinGroup,
  isINGroup,
  selectGroupByUserId,
  exitGroup
}