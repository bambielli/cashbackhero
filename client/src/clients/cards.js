function getCards () {
    return fetch('/api/cards', {
        credentials: "include"
    })
        .then(res => {
            if (res.ok) {
                return res.json()
            } else {
                return Promise.reject('Internal Server Error')
            }
        })
}

module.exports = {
    getCards
}