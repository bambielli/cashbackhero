/*
  Export routes from different models.
*/

const cardRoutes = require('./cards/cardRoutes')
const facebookRoutes = require('./auth/facebookRoutes')
const devRoutes = require('./auth/devRoutes')
const appRoutes = require('./app/appRoutes')
const userRoutes = require('./users/userRoutes')

module.exports = {
  cardRoutes,
  facebookRoutes,
  devRoutes,
  appRoutes,
  userRoutes
}
