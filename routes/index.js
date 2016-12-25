/*
  Export routes from different models.
*/

const cardRoutes = require('./cards/cardRoutes')
const facebookRoutes = require('./auth/facebookRoutes')
const appRoutes = require('./app/appRoutes')

module.exports = {
  cardRoutes,
  facebookRoutes,
  appRoutes
}
