const User = require('./User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { response } = require('express')

logIn = async (req, res) => {
    try {
        const confirm = req.body.password === process.env.ADMIN

        const token = jwt.sign({ _id: user._id.toHexString() }, process.env.ADMIN)
        user.tokens.push({token})

        await user.save()

        if (confirm) res.header('token', token).json('login success')
        if (!confirm) throw 'wrong email or password'
    } catch (e) {
        res.status(401).json(e)
    }
}

logOut = async (req, res) => {
    const token = req.token
    const user = req.user
    try {
        await user.update({
            $pull : {
                tokens: {
                    token
                }
            }
        })
        res.json('successful logout')
    } catch (e) {
        res.status(400).json(e)
    }
}

changeProfilePic = async (req, res) => {
    const user = req.user
    const newProfilePic = req.file.path
    try {
        const updated = await User.findOneAndUpdate({_id: user._id}, {profileImgURL: newProfilePic}, {new: true})
        if (!updated) throw updated.json()
        res.json(updated.profileImgURL)
    } catch (e) {
        res.status(400).json(e)
    }
}

updateCredits = async (req, res) => {
    const user = req.user
    const credits = req.body.credits
    try {
        const updated = await User.findOneAndUpdate({_id: user._id}, {credits: credits}, {new: true})
        if (!updated) throw updated.json()
        res.json(updated.credits)
    } catch (e) {
        res.status(400).json(e)
    }
}

createGuest = async (req, res) => {
    const userCount = await User.countDocuments()
    const guest = {
        username: `guest${userCount}`,
        password: 'guest123',
        email: `guest${userCount}@guest1337.lt`
    }
    try {
        const user = new User(guest)
        const createdUser = await user.save()
        if (!createdUser) throw response.json()
        res.json(createdUser)
    } catch (e) {
        res.status(400).json(e)
    }
}

module.exports = {
    signUp,
    logIn,
    logOut,
    changeProfilePic,
    updateCredits,
    createGuest
}