const passport = require('passport')
const FacebookStrategy = require('passport-facebook')

const serializeUser = (user, done) => {
  done(null, user.id)
}

const deserializeUser = (id, done) => {
  // User.findById(id, function(err, user) {
  //   done(err, user);
  // }); //REPLACE WITH FINDING USER BY ID in table. the ID is what we will store.
  done(null, {id: id})
}

facebookStrategy = new FacebookStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: process.env.BASE_URL + '/auth/facebook/callback'
  },
  function (accessToken, refreshToken, profile, cb) {
    console.log('VERIFICATION CALLBACK')
    // need to get or create user once user table is up.
    cb(undefined, profile)
  }
)

module.exports = (app) => {
  app.use(passport.initialize())
  app.use(passport.session())
  passport.serializeUser(serializeUser)
  passport.deserializeUser(deserializeUser)
  passport.use(facebookStrategy)
}
