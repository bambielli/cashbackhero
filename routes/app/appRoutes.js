const express = require('express')
const router = express.Router()
const { users } = require('../../sql')
const { isLoggedIn } = require('../../utils')

router.get('/', (req, res) => {
  res.render('index', {title: 'Cash Back Hero'})
})

router.get('/who-am-i', function(req, res) {
  const { id, first_name, last_name, email } = req.session.passport.user
  isLoggedIn(req, res, function() {
    res.json({ id, firstName: first_name, lastName: last_name, email })
  });
})

router.get('/login', (req, res) => {
  res.render('login')
})

router.get('/logout', function(req, res) {
  req.session.destroy(function(err) {
    if (err) {
      console.log('error occurred while destroying session', err)
    }
    res.redirect('/')
  })
})

module.exports = router

