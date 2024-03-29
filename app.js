const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
const bodyParser = require('body-parser')
const session = require('express-session')
const passport = require('passport')
const RedisStore = require('connect-redis')(session)
const redisClient = require("redis").createClient({ url: process.env.REDIS_URL });

const { isLoggedIn, isDevEnvironment } = require('./utils')

const {
  cardRoutes,
  facebookRoutes,
  appRoutes,
  userRoutes,
  devRoutes
} = require('./routes')

const SECONDS_IN_A_WEEK = 60*60*24*7

const redisStore = new RedisStore({
  client: redisClient,
  ttl: SECONDS_IN_A_WEEK
})

const app = express()
const sess = {
  store: redisStore,
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    path: '/',
    httpOnly: true,
    secure: false,
    maxAge: null
  }
}

// NOTE: re-enable this when you set up SSL
// if (app.get('env') === 'production') {
//   app.set('trust proxy', 1) // trust first proxy
//   sess.cookie.secure = true // serve secure cookies
// }
app.use(session(sess))
// must be done AFTER session setup
app.use(passport.initialize())
app.use(passport.session())
require('./passport.config')(passport)

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(require('less-middleware')(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'build')))

app.use('/auth/facebook', facebookRoutes)
if (isDevEnvironment()) {
  app.use('/auth/dev', devRoutes)
}
app.use('/api', isLoggedIn)
app.use('/api/cards', cardRoutes)
app.use('/api/users', userRoutes)
app.use('/', appRoutes)
app.use('*', function(_, res) {
  // this ensures index.html is served from prod for all routes that don't match something higher.
  // in dev this file is served from webpack dev server.
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app