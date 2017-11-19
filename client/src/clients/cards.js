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

// list of cards that the user does not already have in their wallet
function getSelectableCards() {
    return fetch('/api/cards/selectable', {
        credentials: "include"
    })
    .then(res => {
        if (res.ok) {
            return res.json()
        } else {
            return Promise.reject('Couldn\'t retrieve cards')
        }
    })
}


module.exports = {
    getCards,
    getSelectableCards
}