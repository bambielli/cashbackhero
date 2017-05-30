const { users } = require('../../sql')

const getUserCards = (req, res, next) => {
  const userId = parseInt(req.params.id)
  if (isNaN(userId)) {
    throw Error('Requested ID was not an integer')
  }

  users.getUserCards(userId)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: `Retrieved Cards for User id ${userId}`
        })
    })
    .catch(function (err) {
      return next(err)
    })
}

const addUserCard = (req, res, next) => {
  const userId = parseInt(req.params.id)
  if (isNaN(userId)) {
    throw Error('Requested ID was not an integer')
  }

  const cardId = req.body.cardId

  users.addUserCard(userId, cardId)
    .then((data) => {
      res.status(204).send()
    })
    .catch((err) => {
      return next(err)
    })
}

module.exports = {
  getUserCards,
  addUserCard
}
