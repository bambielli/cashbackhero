const db = require('./db')
const { cards } = require('./sql')

module.exports = {
  cards: {
    getAllCards: () => {
      return db.any(cards.getAllCards)
    },
    getSingleCard: (id) => {
      return db.one(cards.getSingleCard, {id: id})
    },
    createCard: (name) => {
      return db.none(cards.createCard, {name: name})
    },
    updateCard: (id, name) => {
      return db.none(cards.updateCard, {id: id, name: name})
    },
    deleteCard: (id) => {
      return db.result(cards.deleteCard, {id: id})
    }
  }
}
