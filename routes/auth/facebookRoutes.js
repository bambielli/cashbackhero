const express = require('express')
const router = express.Router()
const passport = require('passport')

router.get('/', passport.authenticate('facebook'))

router.get('/callback',
  passport.authenticate('facebook', { failureRedirect: '/badAuth' }),
  function (req, res) {
    // Successful authentication, redirect home.
    console.log('successful authentication!')
    res.redirect('/goodAuth')
  }
)

module.exports = router
