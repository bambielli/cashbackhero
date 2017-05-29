const db = require('./db')
const { cards, users, wallets } = require('./sql')
const util = require('./sql-util')

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
    },
    getUserWallet: (userId) => {
      const user_id = parseInt(userId)
      return db.any(users.getUserWallet, {user_id: user_id})
    },
    updateUserWallet: (userId, cardIds) => {
      const user_id = parseInt(userId)
      const card_ids = util.toPgArray(cardIds)
      return db.none(users.updateUserWallet, {user_id: user_id, card_ids: card_ids})
    }
  },
  wallets: {
    createWallet: (userId, cardIds) => {
      // cardIds are a object string
      const user_id = parseInt(userId)
      return db.none(wallets.createWallet, {user_id: user_id, card_ids: cardIds})
    },
    getOrCreateEmptyWallet: (userId) => {
      const user_id = parseInt(userId)
      return db.one(wallets.getOrCreateEmptyWallet, {user_id: user_id})
    }
  }
}
