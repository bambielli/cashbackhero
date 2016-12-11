const express = require('express')
const router = express.Router()
const queries = require('./cardQueries')

router.get('/', queries.getAllCards)

module.exports = router
