const router = require('express').Router()
const queries = require('./userQueries')

// design decision: these routes could be /:id/wallets
// but instead, since these will never be accessed by a not-logged-in user,
// I'm going to just have the endpoint pull the userId value out of the deserialized
// user object. This is safer, since users have no control over what ID they are
// attempting to request.
router.get('/wallets', queries.getUserWallets)
router.post('/wallets/cards', queries.addUserCard)
router.delete('/wallets/cards', queries.deleteUserCard)

module.exports = router
