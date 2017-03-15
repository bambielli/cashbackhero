const FacebookStrategy = require('passport-facebook')
const { account } = require('./sql')

const serializeUser = (user, cb) => {
  cb(null, user.id) // this only needs the user.id. the full user object is retrieved via deserialize user.
}

const deserializeUser = (id, cb) => {
  account.getAccount(id)
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
  function (accessToken, refreshToken, profile, cb) {
    account.getOrCreateAccount(profile._json)
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
