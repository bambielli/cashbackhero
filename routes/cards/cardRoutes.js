const express = require('express')
const router = express.Router()
const queries = require('./cardQueries')

router.get('/', queries.getAllCards)
router.post('/', queries.createCard)
router.get('/:id', queries.getSingleCard)
router.put('/:id', queries.updateCard)
router.delete('/:id', queries.deleteCard)

module.exports = router