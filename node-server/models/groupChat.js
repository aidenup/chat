const { query } = require('../utils/db.js')

/**
 * 获取群消息
 */
let getGroupMsg = function (group_id) {
  let _sql = "SELECT g.message , g.time , g.from_user ,i.avator ,i.name FROM group_msg  As g inner join user_info AS i ON g.from_user = i.id  WHERE to_group = ? order by time;"
  return query(_sql, group_id)
}

/**
 * 获取群成员
 */
let getGroupMember = function (group_id) {
  let _sql =
    " SELECT user_id AS group_member_id  FROM group_user_relation  WHERE group_id = ? ";
  return query(_sql, groupId);
}

/**
 * 获取群资料
 */
let getGroupInfo = function (arr) {
  let _sql =
    " SELECT group_id , group_name , group_notice ,group_avator ,group_creater ,creater_time FROM group_info  WHERE group_id = ? OR group_name = ? ;";
  return query(_sql, arr);
}

/**
 * 存聊天记录
 */
let saveGroupMsg = function (userId, groupId, message, name, time) {
  const data = [userId, groupId, `${name} : ${message}`, time];
  let _sql =
    " INSERT INTO group_msg(from_user,to_group,message ,time) VALUES(?,?,?,?); ";
  return query(_sql, data);
}

/**
 * 添加群成员并返回群成员
 */
let addGroupUserRelation = function (userId, groupId) {
  const data = [groupId, userId];
  let _sql =
    " INSERT INTO  group_user_relation(group_id,user_id) VALUES(?,?); ";
  return query(_sql, data);
}

module.exports = {
  getGroupMsg,
  getGroupMember,
  getGroupInfo,
  saveGroupMsg,
  addGroupUserRelation
}



