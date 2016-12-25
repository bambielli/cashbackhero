const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const passport = require('passport')
const FacebookStrategy = require('passport-facebook')
const session = require('express-session')
const {
  cardRoutes,
  facebookRoutes,
  appRoutes
} = require('./routes')

const app = express()
app.use(session({
  secret: 'huehuehue',
  resave: false,
  saveUninitialized: true,
  cookie: {}
}))

//passport initialization (should be moved to separate file with export that takes app as argument)
app.use(passport.initialize())
app.use(passport.session())
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  // User.findById(id, function(err, user) {
  //   done(err, user);
  // }); //REPLACE WITH FINDING USER BY ID in table. the ID is what we will store.
  done(null, {id: id})
});

passport.use(new FacebookStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: process.env.BASE_URL + '/auth/facebook/callback'
  },
  function(accessToken, refreshToken, profile, cb) {
    console.log("VERIFICATION CALLBACK")
    //need to get or create user once user table is up.
    cb(undefined, profile)
  }
));

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(require('less-middleware')(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'public')))

/* Routes */
app.use('/api/cards', cardRoutes)
app.use('/auth/facebook', facebookRoutes)
app.use('/', appRoutes)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
});

module.exports = app
