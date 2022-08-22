const db = {
  host: '127.0.0.1',
  port: 3306,
  database: 'a_notion',
  user: 'root',
  password: 'root1234'
}

const baseApi = 'api/v1'

const secret = 'notion-sec'

module.exports = {
  db,
  baseApi,
  secret
}