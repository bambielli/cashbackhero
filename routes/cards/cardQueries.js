const { card } = require('../../sql')

const getAllCards = (req, res, next) => {
  card.getAllCards()
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

const getCard = (req, res, next) => {
  const cardId = parseInt(req.params.id)
  if (isNaN(cardId)) {
    throw Error('Requested ID was not an integer')
  }
  card.getCard(cardId)
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

const createCard = (req, res, next) => {
  const { name } = req.body
  card.createCard(name)
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

const updateCard = (req, res, next) => {
  const cardId = parseInt(req.params.id)
  if (isNaN(cardId)) {
    throw Error('Requested ID was not an integer')
  }
  const { name } = req.body
  card.updateCard(cardId, name)
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

const deleteCard = (req, res, next) => {
  var cardId = parseInt(req.params.id)
  if (isNaN(cardId)) {
    throw Error('Requested ID was not an integer')
  }
  card.deleteCard(cardId)
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
  getCard,
  createCard,
  updateCard,
  deleteCard
}
