const FacebookStrategy = require('passport-facebook')
const { users } = require('./sql')

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

module.exports = (passport) => {
  passport.serializeUser(serializeUser)
  passport.deserializeUser(deserializeUser)
  passport.use(facebookStrategy)
}