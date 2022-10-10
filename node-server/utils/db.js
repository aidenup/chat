const mysql = require('mysql')
const dbConfig = require('../config').db
const pool = mysql.createPool({
  host: dbConfig.host,
  port: dbConfig.port,
  user: dbConfig.user,
  password: dbConfig.password,
  database: dbConfig.database,
})

let query = function(sql, values) {
  return new Promise((resolve, reject) => {
    pool.getConnection(function(err, connection) {
      if(err) {
        resolve(err)
      } else {
        connection.query(sql, values, (err, rows) => {
          if(err) {
            reject(err)
          } else {
            resolve(rows)
          }
          connection.release()
        })
      }
    })
  })
}
// let _sql = "SELECT * FROM account WHERE email= '2965157945@qq.com'"
// query(_sql).then(res=> {
//   console.log(res);
// })

module.exports = {
  query
}