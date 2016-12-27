const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('home page')
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

