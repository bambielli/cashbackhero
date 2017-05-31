const QueryFile = require('pg-promise').QueryFile
const path = require('path')

module.exports.sql = (file) => {
  var fullPath = path.join(__dirname, file)
  return new QueryFile(fullPath, {minify: true})
}