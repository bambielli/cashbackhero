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
    getAllCards: sql('cards/getAllCards.sql'),
    getSingleCard: sql('cards/getSingleCard.sql'),
    createCard: sql('cards/createCard.sql'),
    updateCard: sql('cards/updateCard.sql'),
    deleteCard: sql('cards/deleteCard.sql')
  },
  users: {
    getOrCreateUser: sql('users/getOrCreateUser.sql'),
    getUser: sql('users/getUser.sql'),
    getUserWallet: sql('users/getUserWallet.sql')
  }
}
