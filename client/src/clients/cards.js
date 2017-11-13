function getCards () {
    return fetch('/api/cards', {
        credentials: "include"
    })
    .then(res => {
        if (res.ok) {
            return res.json()
        } else if (process.env.NODE_ENV === 'development') {
            return Promise.reject('Internal Server Error')
        } else {
            window.location.replace('/login')
        }
    })
}

module.exports = {
    getCards
}