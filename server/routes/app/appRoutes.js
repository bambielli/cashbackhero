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
    users.getUserCards(req.user.id)
      .then((data) => {
        if (data.length === 0) {
          cards = 'No cards in wallet yet'
        }
        // the below is broken. it returns [object Object] instead of parsing
        res.render('home', {cards: data})
      })
      .error(function (err) {
        res.send(err.message)
      })
  }
})

module.exports = router

