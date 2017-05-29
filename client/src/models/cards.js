module.exports.getCards = function() {
    return fetch('/api/cards')
        .then(res => {
            if (res.ok) {
                return res.json()
            } else {
                return Promise.reject('Internal Server Error')
            }
        })
}