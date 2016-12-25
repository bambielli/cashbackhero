const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('home page')
})

router.get('/badAuth', (req, res) => {
  res.send('bad authentication')
})

router.get('/goodAuth', (req, res) => {
  console.log(req.user)
  res.send('successful auth')
})

module.exports = router

