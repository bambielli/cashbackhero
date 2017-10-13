const express = require('express')
const router = express.Router()
const queries = require('./userQueries')

router.get('/:id/wallets', queries.getUserCards)
router.post('/:id/wallets', queries.addUserCard)

module.exports = router
