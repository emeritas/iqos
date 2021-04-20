const Institution = require('./Institution')
const jwt = require('jsonwebtoken')
const { find } = require('./Institution')

createInstitution = async (req, res) => {
    try {
        const inst = new Institution(req.body)
        const createdInst = await inst.save()
        if (!createdInst) throw 'kažkastais nepaejo'
        res.json(createdInst)
    } catch (e) {
        res.status(400).json(e)
    }
}

getAll = async (req, res) => {
    try {
        const institutions = await Institution.find({})
        if (!institutions) throw 'kažkastais nepaejo'
        res.json(institutions)
    } catch (e) {
        res.status(400).json(e)
    }
}

module.exports = {
    createInstitution,
    getAll
}