const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('index', {title: 'Cash Back Hero'})
})

router.get('/login', (req, res) => {
  res.send('login page')
})

router.get('/badAuth', (req, res) => {
  res.send('bad authentication')
})

router.get('/goodAuth', (req, res) => {
  res.send('successful auth')
})

module.exports = router

