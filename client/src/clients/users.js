function getUserCards () {
    return fetch('/api/users')
}

module.exports = {
    getUserCards
}