const jwt = require('jsonwebtoken')

userMiddleware = (req, res, next) => {
    const token = req.header('token')

    if (token === process.env.TOKEN) {
        next()
    } else {
        res.json('access denied')
    }
}

module.exports = userMiddleware