const isLoggedIn = (req, res, action) => {
    if (req.isAuthenticated()) {
      action()
    } else {
      res.redirect('/login')
    }
  }

module.exports = {
    isLoggedIn
}