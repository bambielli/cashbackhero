const express = require('express')
const router = express.Router()
const queries = require('./cardQueries')

router.get('/', queries.getAllCards)
router.get('/:id', queries.getSingleCard)

module.exports = router
