const express = require('express')
const router = express.Router()
const { users } = require('../../sql')

router.get('/', (req, res) => {
  res.render('index', {title: 'Cash Back Hero'})
})

router.get('/login', (req, res) => {
  res.render('login')
})

module.exports = router

