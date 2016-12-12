const { cards } = require('../../sql')

function getAllCards (req, res, next) {
  cards.getAllCards()
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL cards'
        })
    })
    .catch(function (err) {
      return next(err)
    })
}

module.exports = {
  getAllCards
}
