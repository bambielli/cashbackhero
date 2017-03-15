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
  account: {
    getOrCreateUser: sql('account/getOrCreateAccount.sql'),
    getAccount: sql('account/getAccount.sql')
  }
}
