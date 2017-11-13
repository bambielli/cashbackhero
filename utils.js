const isLoggedIn = (req, res, action) => {
  if (req.isAuthenticated()) {
    action()
  } else {
    res.status(401).send('Not Authenticated')
  }
}

const isDevEnvironment = () => {
  return process.env.NODE_ENV === 'development'
}

module.exports = {
    isLoggedIn,
    isDevEnvironment
}