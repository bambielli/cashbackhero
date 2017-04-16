const express = require('express')
const router = express.Router()
const queries = require('./userQueries')

router.get('/:id/wallets', queries.getUserWallet)
router.put('/:id/wallets', queries.updateUserWallet)

module.exports = router
