/*
  Configuration for pg-promise library
*/
const promise = require('bluebird')

const options = {
  promiseLib: promise
}

const pgp = require('pg-promise')(options)

const connection = process.env.DATABASE_URL || 'postgres://localhost:5432/cb_dev'
const db = pgp(connection)

module.exports = db
