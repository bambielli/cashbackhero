const FacebookStrategy = require('passport-facebook')
const { users } = require('./sql')

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
  function (accessToken, refreshToken, profile, cb) {
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
