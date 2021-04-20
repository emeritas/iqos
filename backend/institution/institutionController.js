const Institution = require('./Institution');
const jwt = require('jsonwebtoken');

createInstitution = async (req, res) => {
  try {
    const inst = new Institution(req.body);
    const createdInst = await inst.save();
    res.json(createdInst);
  } catch (e) {
    res.status(400).json(e);
  }
};

getAll = async (req, res) => {
  try {
    const institutions = await Institution.find({});
    res.json(institutions);
  } catch (e) {
    res.status(400).json(e);
  }
};

find = async (req, res) => {
  const input = req.body.input;

  try {
    const found = await Institution.find({});
    const filtered = found.filter((e) => {
      if (
        String(e.ins_code).toLowerCase().includes(String(input).toLowerCase())
      )
        return true;
      if (String(e.name).toLowerCase().includes(String(input).toLowerCase()))
        return true;
      if (String(e.address).toLowerCase().includes(String(input).toLowerCase()))
        return true;
      if (String(e.phone).toLowerCase().includes(String(input).toLowerCase()))
        return true;
      if (
        String(e.school_type)
          .toLowerCase()
          .includes(String(input).toLowerCase())
      )
        return true;
      if (String(e.email).toLowerCase().includes(String(input).toLowerCase()))
        return true;
      if (
        String(e.legal_status)
          .toLowerCase()
          .includes(String(input).toLowerCase())
      )
        return true;
    });
    res.json(filtered);
  } catch (e) {
    res.status(400).json(e);
  }
};

function transport() {
  const institutions = require('../institutions.json');
  institutions.institution.forEach((ins) => {
    const inst = new Institution(ins);
    inst.save();
  });
}
module.exports = {
  createInstitution,
  getAll,
  find,
  transport,
};
