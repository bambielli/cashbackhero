const express = require('express')
const router = express.Router()
const queries = require('./userQueries')

router.get('/:id/wallets', queries.getUserWallets)

module.exports = router
