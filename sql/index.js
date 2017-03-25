const db = require('./db')
const { cards, users, wallets } = require('./sql')

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
    createUser: (data) => {
      const facebook_id = parseInt(data.id)
      const age_range_max = data.age_range.max || null
      const age_range_min = data.age_range.min || null
      const userData = Object.assign({}, data, {
        facebook_id,
        age_range_max,
        age_range_min
      })
      return db.one(users.createUser, userData)
    }
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
    getUserByFacebookId: (fbId) => {
      return db.oneOrNone(users.getUserByFacebookId, {facebook_id: fbId})
    }
    getUser: (id) => {
      return db.one(users.getUser, {id: id})
    },
    getUserWallets: (userId) => {
      return db.one(users.getUserWallets, {user_id: userId})
    }
  },
  wallets: {
    createWallet: (userId, cardIds) => {
      //cardIds are a object string
      return db.none(wallets.createWallet, {user_id: userId, card_ids: cardIds})
    },
    getOrCreateWallet: (userId) => {
      //implicit constraint that user can only have one wallet
      return db.one(wallets.getOrCreateWallet, {user_id: userId})
    }
  }
}
