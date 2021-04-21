logIn = async (req, res) => {
    try {
        const confirm = req.body.password === process.env.ADMIN

        const token = process.env.TOKEN

        if (confirm) res.header('token', token).json('login success')
        if (!confirm) throw 'wrong email or password'
    } catch (e) {
        res.status(401).json(e)
    }
}

module.exports = {
    logIn
}