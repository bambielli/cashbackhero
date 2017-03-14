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
  card: {
    getAllCards: sql('card/getAllCards.sql'),
    getCard: sql('card/getCard.sql'),
    createCard: sql('card/createCard.sql'),
    updateCard: sql('card/updateCard.sql'),
    deleteCard: sql('card/deleteCard.sql')
  },
  user: {
    getOrCreateUser: sql('user/getOrCreateUser.sql'),
    getUser: sql('user/getUser.sql')
  }
}
