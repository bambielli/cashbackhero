const db = require('../db')

function getAllCards (req, res, next) {
  db.any('select * from card')
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
