const router = require('express').Router()
const queries = require('./cardQueries')

router.get('/', queries.getAllCards)
router.post('/', queries.createCard)
router.get('/selectable', queries.getSelectableCards)
router.get('/:id', queries.getSingleCard)
router.put('/:id', queries.updateCard)
router.delete('/:id', queries.deleteCard)

module.exports = router
