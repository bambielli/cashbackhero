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
  if (isNaN(userId)) {
    throw Error('Requested ID was not an integer')
  }

  const cardId = req.body.cardId
  console.log(userId, cardId)
  users.addUserCard(userId, cardId)
    .then((data) => {
      console.log('successfull add')
      res.status(204).send()
    })
    .catch((err) => {
      return next(err)
    })
}

module.exports = {
  getUserWallets,
  addUserCard
}
