const express = require('express')
const router = express.Router()
const path = require('path')

router.get('/', (req, res) => {
  res.render('landing', {title: 'Cash Back Hero'})
})

router.get('/login', (req, res) => {
  res.send('login page')
})

router.get('/badAuth', (req, res) => {
  res.send('bad authentication')
})

module.exports = router

