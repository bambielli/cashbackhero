const express = require('express')
const router = express.Router()
const passport = require('passport')

router.get('/',
  passport.authenticate('facebook', {
    scope: ['public_profile', 'email']
  })
)

router.get('/callback',
  passport.authenticate('facebook', {
    successRedirect: '/goodAuth',
    failureRedirect: '/login'
  })
)

module.exports = router
