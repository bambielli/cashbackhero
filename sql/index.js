const db = require('./db')
const { cards, users } = require('./sql')

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
  },
  users: {
    getOrCreateUser: (data) => {
      console.log(data)
      const facebook_id = parseInt(data.id)
      const age_range_max = data.age_range.max || null
      const age_range_min = data.age_range.min || null
      const userData = Object.assign({}, data, {
        facebook_id,
        age_range_max,
        age_range_min
      })
      return db.one(users.getOrCreateUser, userData)
    },
    getUser: (id) => {
      return db.one(users.getUser, {id: id})
    }
  }
}
