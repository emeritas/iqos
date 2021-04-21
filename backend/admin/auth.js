const jwt = require('jsonwebtoken')
const Admin = require('./Admin')

userMiddleware = async (req, res, next) => {
    const token = req.header('token')

    try {
        const decoded = await jwt.verify(token, process.env.SECRET)
        const user = await User.findOne({_id: decoded._id, 'tokens.token': token})
        if (!user) throw 'auth failed'
        if (check) res.json({username: user.username, email: user.email, profileImgURL: user.profileImgURL, credits: user.credits})
        req.user = user
        req.token = token
        next()
    } catch (e) {
        res.status(401).json(e)
    }
}

module.exports = userMiddleware