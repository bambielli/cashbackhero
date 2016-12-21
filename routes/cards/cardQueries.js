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

function getSingleCard (req, res, next) {
  const cardId = parseInt(req.params.id)
  if (isNaN(cardId)) {
    throw Error('Requested ID was not an integer')
  }
  cards.getSingleCard(cardId)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved single card'
        })
    })
    .catch(function (err) {
      return next(err)
    })
}

module.exports = {
  getAllCards,
  getSingleCard
}
