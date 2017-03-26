const FacebookStrategy = require('passport-facebook')
const { users, wallets } = require('./sql')

const serializeUser = (user, cb) => {
  cb(null, user.id) // this only needs the user.id. the full user object is retrieved via deserialize user.
}

const deserializeUser = (id, cb) => {
  users.getUser(id)
    .then((data) => {
      cb(null, data)
    })
    .catch((err) => {
      cb(err, null)
    })
}

facebookStrategy = new FacebookStrategy({
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL: process.env.BASE_URL + '/auth/facebook/callback',
  profileFields: ['id', 'name', 'gender', 'picture', 'email', 'age_range', 'locale']
},
  (accessToken, refreshToken, profile, cb) => {
    let userData
    users.getOrCreateUser(profile._json)
      .then((data) => {
        userData = data
        // this ensures a user has at least one wallet. Not the most efficient.
        return wallets.getOrCreateEmptyWallet(data.id)
      })
      .then((data) => {
        cb(null, userData)
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
