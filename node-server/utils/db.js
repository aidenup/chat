const mysql = require('mysql')
const { config } = require('process')
const dbConfig = require('../config')
const pool = mysql.createPool({
  user: config.user,
  password: dbConfig.password,
  database: dbConfig.database,
  host: dbConfig.host
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

module.exports = {
  query
}