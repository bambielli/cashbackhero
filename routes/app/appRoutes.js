const express = require('express')
const router = express.Router()
const { users } = require('../../sql')

router.get('/', (req, res) => {
  res.render('index', {title: 'Cash Back Hero'})
})

router.get('/login', (req, res) => {
  res.send('login page')
})

router.get('/badAuth', (req, res) => {
  res.send('bad authentication')
})

router.get('/home', (req, res, next) => {
  if (!req.isAuthenticated()) {
    res.redirect('/login')
  } else {
    users.getUserWallets(parseInt(req.user.id))
      .then((data) => {
        let cards = data.card_ids
        if (cards.length === 0) {
          cards = 'No cards in wallet yet'
        }
        res.render('home', {cards: cards})
      })
      .error(function (err) {
        res.send(err.message)
      })
  }
})

module.exports = router

