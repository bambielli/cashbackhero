function getUserWallets () {
  return fetch('/api/users/wallets', {
    credentials: 'include'
  }).then(res => {
    if (res.ok) {
        return res.json()
    } else {
        return Promise.reject('Couldn\'t retrieve wallet')
    }
  })
}

function addCardToWallet(cardId) {
  const body = JSON.stringify({ cardId })
  return fetch('/api/users/wallets/cards', {
    method: 'post',
    credentials: 'include',
    headers: {'Content-Type': 'application/json'},
    body
  }).then(res => {
    if (res.ok) {
      return Promise.resolve()
    } else {
      return Promise.reject('Internal Server Error')
    }
  })
}

function deleteFromWallet(cardId) {
  const body = JSON.stringify({ cardId })
  return fetch('/api/users/wallets/cards', {
    method: 'delete',
    credentials: 'include',
    headers: {'Content-Type': 'application/json'},
    body
  }).then(res => {
    if (res.ok) {
      return Promise.resolve()
    } else {
      return Promise.reject('Internal Server Error')
    }
  })
}

module.exports = {
  getUserWallets,
  addCardToWallet,
  deleteFromWallet,
}