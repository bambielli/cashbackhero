function getUserWallets () {
  return fetch('/api/users/wallets', {
    credentials: 'include'
  }).then(res => {
    if (res.ok) {
        return res.json()
    } else {
        return Promise.reject('Internal Server Error')
    }
  })
}

module.exports = {
  getUserWallets
}