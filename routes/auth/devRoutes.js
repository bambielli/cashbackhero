const express = require('express')
const router = express.Router()
const passport = require('passport')

router.post('/', function(req, res, next) {
    passport.authenticate('local', (err, user, info) => {
        if (err) { return next(err) }
        if (!user) { return res.redirect('/login') }
        req.login(user, (err) => {
            console.log('logging in user')
            console.log(user)
            console.log(req.isAuthenticated())
            if (err) { return next(err) }
            return res.redirect('/home')
        })
    })(req, res, next)
})

module.exports = router