/*
  wraps all sql files and provides as QueryFile
*/
const QueryFile = require('pg-promise').QueryFile
const path = require('path')

function sql (file) {
  var fullPath = path.join(__dirname, file)
  return new QueryFile(fullPath, {minify: true})
}

module.exports = {
  cards: {
    getAllCards: sql('cards/getAllCards.sql')
  }
}
