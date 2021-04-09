require('dotenv').config()

module.exports = {
  development: {
    username: process.env.PGNAME,
    password: process.env.PGPASSWORD,
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    database: process.env.PGDATABASE,
    dialect: process.env.PGDIALECT,
    login_field: process.env.LOGIN_FIELD,
    timezone: 'Asia/Jakarta'
  },
  test: {
    username: process.env.PGNAME,
    password: process.env.PGPASSWORD,
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    database: process.env.PGDATABASE,
    dialect: process.env.PGDIALECT,
    login_field: process.env.LOGIN_FIELD,
    timezone: 'Asia/Jakarta'
  },
  // "test": {
  //   "username": "root",
  //   "password": null,
  //   "database": "database_test",
  //   "host": "127.0.0.1",
  //   "dialect": "mysql",
  //   "operatorsAliases": false
  // },
  production: {
    username: process.env.PGNAME,
    password: process.env.PGPASSWORD,
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    database: process.env.PGDATABASE,
    dialect: process.env.PGDIALECT,
    login_field: process.env.LOGIN_FIELD,
    timezone: 'Asia/Jakarta'
  }
}
