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
  console.log(req.user)
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

function createCard (req, res, next) {
  const { name } = req.body
  cards.createCard(name)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          message: 'Created new Card: ' + name
        })
    })
    .catch(function (err) {
      return next(err)
    })
}

function updateCard (req, res, next) {
  const cardId = parseInt(req.params.id)
  if (isNaN(cardId)) {
    throw Error('Requested ID was not an integer')
  }
  const { name } = req.body
  cards.updateCard(cardId, name)
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Updated Card with ID: ' + req.params.id
        })
    })
    .catch(function (err) {
      return next(err)
    })
}

function deleteCard (req, res, next) {
  var cardId = parseInt(req.params.id)
  if (isNaN(cardId)) {
    throw Error('Requested ID was not an integer')
  }
  cards.deleteCard(cardId)
    .then(function (result) {
      res.status(200)
        .json({
          status: 'success',
          message: `Removed ${result.rowCount} card`
        })
    })
    .catch(function (err) {
      return next(err)
    })
}

module.exports = {
  getAllCards,
  getSingleCard,
  createCard,
  updateCard,
  deleteCard
}
