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

function addCardToWallet(cardId) {
  return fetch('/api/users/wallets/cards', {
    method: 'post',
    credentials: 'include',
    headers: {'Content-Type': 'application/json'},
    body: {
      cardId
    }
  }).then(res => {
    if (res.ok) {
      return Promise.resolve(true)
    } else {
      return Promise.reject('Internal Server Error')
    }
  })
}

module.exports = {
  getUserWallets,
  addCardToWallet,
}