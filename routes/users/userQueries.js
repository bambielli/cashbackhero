const { users } = require('../../sql')

const getUserWallets = (req, res, next) => {
  const userId = parseInt(req.user.id)
  if (isNaN(userId)) {
    throw Error('Requested ID was not an integer')
  }

  users.getUserWallets(userId)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: `Successfully retrieved cards for user`
        })
    })
    .catch(function (err) {
      return next(err)
    })
}

const addUserCard = (req, res, next) => {
  const userId = parseInt(req.user.id)
  const cardId = parseInt(req.body.cardId)
  if (isNaN(userId) || isNaN(cardId)) {
    throw Error('UserId and CardId must both be integers')
  }
  users.addUserCard(userId, cardId)
    .then((data) => {
      console.log('successfull add')
      res.status(204).send()
    })
    .catch((err) => {
      return next(err)
    })
}

const deleteUserCard = (req, res, next) => {
  const userId = parseInt(req.user.id)
  const cardId = parseInt(req.body.cardId)
  if (isNaN(userId) || isNaN(cardId)) {
    throw Error('UserId and CardId must both be integers')
  }
  users.deleteUserCard(userId, cardId)
    .then((data) => {
      console.log('successfull delete')
      res.status(204).send()
    })
    .catch((err) => {
      return next(err)
    })
}

module.exports = {
  getUserWallets,
  addUserCard,
  deleteUserCard
}
