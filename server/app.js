const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
const bodyParser = require('body-parser')
const session = require('express-session')
const passport = require('passport')
const {
  cardRoutes,
  facebookRoutes,
  appRoutes,
  userRoutes
} = require('./routes')

const isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated() || app.get('env') === 'development') {
    next()
  } else {
    res.redirect('/login')
  }
}

const app = express()
const sess = {
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

if (app.get('env') === 'production') {
  app.set('trust proxy', 1) // trust first proxy
  sess.cookie.secure = true // serve secure cookies
}

app.use(session(sess))

// must be done AFTER session setup
app.use(passport.initialize())
app.use(passport.session())
require('./passport.config')(passport)

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))

app.use('/static', express.static(path.join(__dirname, '../client/build')))
app.use('/static', express.static(path.join(__dirname, '../client/build/static')))

app.use('/api', isLoggedIn)
app.use('/auth/facebook', facebookRoutes)
app.use('/api/cards', cardRoutes)
app.use('/api/users', userRoutes)
app.use('/', appRoutes)

// Catchall route to serve index page or redirect to login
app.get('*', (req, res) => {
  if (app.get('env') === 'production') {
    res.redirect('/static/index.html')
  } else {
    res.redirect('/static/index.html')
  }
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

  res.status(err.status || 500)
})

module.exports = app