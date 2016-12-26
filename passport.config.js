const FacebookStrategy = require('passport-facebook')

const serializeUser = (user, done) => {
  done(null, user.id) //this only needs the user.id. the full user object is retrieved via deserialize user.
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
    callbackURL: process.env.BASE_URL + '/auth/facebook/callback',
    profileFields: ['id', 'name', 'gender', 'picture', 'email']
  },
  function (accessToken, refreshToken, profile, cb) {
    console.log('VERIFICATION CALLBACK')
    // need to get or create user once user table is up.
    cb(undefined, profile)
  }
)

module.exports = (passport) => {
  passport.serializeUser(serializeUser)
  passport.deserializeUser(deserializeUser)
  passport.use(facebookStrategy)
}
