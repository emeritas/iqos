const Institution = require('./Institution')
const jwt = require('jsonwebtoken')

createInstitution = async (req, res) => {
  try {
    const inst = new Institution(req.body)
    const createdInst = await inst.save()
    res.json(createdInst)
  } catch (e) {
    res.status(400).json(e)
  }
}

confirmInstitution = async (req, res) => {
  try {
    const inst = await Institution.findOneAndUpdate({_id: req.body._id}, {confirmed: true}, {new: true})
    res.json(inst)
  } catch (e) {
    res.status(400).json(e)
  }
}

getAll = async (req, res) => {
  try {
    const institutions = await Institution.find({})
    res.json(institutions)
  } catch (e) {
    res.status(400).json(e)
  }
}

find = async (req, res) => {
  const ins_code = req.body.ins_code
  const name = req.body.name ? new RegExp(req.body.name, 'i') : null
  const school_type = req.body.school_type
  const county = req.body.county
  const main_type = req.body.main_type

  const find = {}
  if (ins_code) find.ins_code = ins_code
  if (name) find.name = { "$regex": name }
  if (school_type) find.school_type = school_type
  if (county) find.county = county
  if (main_type) find.main_type = main_type

  try {
    const found = await Institution.find(find)
    res.json(found)
  } catch (e) {
    res.status(400).json(e)
  }
}

function transport() {
  const institutions = require('../institutions.json')
  institutions.institution.forEach((ins) => {
    const modified = {...ins, confirmed: true}
    const inst = new Institution(modified)
    inst.save()
  })
}

getFilters = async (req, res) => {
  const filtered = {
    school_type: [],
    county: [],
    main_type: []
  }
  
  try {
    const institutions = await Institution.find({})
    institutions.forEach(e => {
      const { school_type, county, main_type} = e
      if (!filtered.school_type.includes(school_type) && school_type) {
        filtered.school_type = [...filtered.school_type, school_type]
      }
      if (!filtered.county.includes(county)  && county) {
        filtered.county = [...filtered.county, county]
      }
      if (!filtered.main_type.includes(main_type) && main_type) {
        filtered.main_type = [...filtered.main_type, main_type]
      }
    })

    res.json(filtered)
  } catch (e) {
    res.status(400).json(e)
  }
  
}

module.exports = {
  createInstitution,
  getAll,
  find,
  transport,
  getFilters,
  confirmInstitution
}
