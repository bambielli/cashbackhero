const db = require('./db')
const { card, account } = require('./sql')

module.exports = {
  card: {
    getAllCards: () => {
      return db.any(card.getAllCards)
    },
    getCard: (id) => {
      return db.one(card.getCard, {id: id})
    },
    createCard: (name) => {
      return db.none(card.createCard, {name: name})
    },
    updateCard: (id, name) => {
      return db.none(card.updateCard, {id: id, name: name})
    },
    deleteCard: (id) => {
      return db.result(card.deleteCard, {id: id})
    }
  },
  account: {
    getOrCreateAccount: (data) => {
      console.log(data)
      const facebook_id = parseInt(data.id)
      const age_range_max = data.age_range.max || null
      const age_range_min = data.age_range.min || null
      const userData = Object.assign({}, data, {
        facebook_id,
        age_range_max,
        age_range_min
      })
      return db.one(account.getOrCreateAccount, accountData)
    },
    getAccount: (id) => {
      return db.one(account.getUser, {id: id})
    }
  }
}
