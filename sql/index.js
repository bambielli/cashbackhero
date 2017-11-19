const db = require('./db')
const { sql } = require('./dbUtils.js')

module.exports = {
  cards: {
    getAllCards: () => {
      return db.any(sql('cards/getAllCards.sql'))
    },
    getSingleCard: (id) => {
      return db.one(sql('cards/getSingleCard.sql'), { id })
    },
    createCard: (name) => {
      return db.none(sql('cards/createCard.sql'), { name })
    },
    updateCard: (id, name) => {
      return db.none(sql('cards/updateCard.sql'), { id, name })
    },
    deleteCard: (id) => {
      return db.result(sql('cards/deleteCard.sql'), { id })
    },
    getSelectableCards: (user_id) => {
      return db.any(sql('cards/getSelectableCards.sql'), { user_id })
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
      return db.one(sql('users/getOrCreateUser.sql'), userData)
    },
    getUser: (id) => {
      return db.one(sql('users/getUser.sql'), { id })
    },
    getUserWallets: (user_id) => {
      return db.any(sql('users/getUserWallets.sql'), { user_id })
    },
    addUserCard: (user_id, card_id) => {
      return db.none(sql('users/addUserCard.sql'), { user_id, card_id })
    },
    deleteUserCard: (user_id, card_id) => {
      return db.none(sql('users/deleteUserCard.sql'), { user_id, card_id })
    }
  }
}
