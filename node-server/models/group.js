const { query } = require('../utils/db.js')
const createGroup = function(group_arr) {
  let _sql = "INSERT INTO group_info (group_id,group_name,create_time) VALUES(?,?,?)"
  return query(_sql, group_arr)
}

module.exports = {
  createGroup
}