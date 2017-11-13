const FacebookStrategy = require('passport-facebook')
const LocalStrategy = require('passport-local').Strategy;
const { users } = require('./sql')

const DEV_USER_ID = 1

// serializes user to session store
const serializeUser = (user, cb) => {
  cb(null, user)
}

// deserializes user out of session store
const deserializeUser = (user, cb) => {
  cb(null, user)
}

facebookStrategy = new FacebookStrategy({
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL: '/auth/facebook/callback',
  enableProof: true,
  profileFields: ['id', 'name', 'gender', 'picture', 'email', 'age_range', 'locale']
},
  (accessToken, refreshToken, profile, cb) => {
    users.getOrCreateUser(profile._json)
      .then((data) => {
        cb(null, data)
      })
      .catch((err) => {
        cb(err, null)
      })
  }
)

// just for local
localStrategy = new LocalStrategy(function(u, p, cb) {
  users.getUser(DEV_USER_ID)
  .then((user) => {
    console.log('sending user', user)
    return cb(null, user)
  })
  .catch((err) => {
    return cb(err, null)
  })
})

module.exports = (passport) => {
  passport.serializeUser(serializeUser)
  passport.deserializeUser(deserializeUser)
  passport.use(facebookStrategy)
  passport.use(localStrategy)
}