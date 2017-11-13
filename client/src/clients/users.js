function getUserCards () {
    return fetch('/api/users')
}

function whoAmI () {
    return fetch('/who-am-i', {
        credentials: "include"
    }).then(res => {
        if(res.ok) {
            return res.json()
        } else {
            window.location.replace('/login')
        }
    })
}

module.exports = {
    getUserCards,
    whoAmI
}