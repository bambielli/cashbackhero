const { users } = require('../../sql')

const getUserWallet = (req, res, next) => {
  const userId = parseInt(req.params.id)
  if (isNaN(userId)) {
    throw Error('Requested ID was not an integer')
  }
  users.getUserWallet(userId)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: `Retrieved Wallets for User id ${userId}`
        })
    })
    .catch(function (err) {
      return next(err)
    })
}

module.exports = {
  getUserWallet
}
