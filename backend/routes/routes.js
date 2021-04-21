const router = require('express').Router()

const institutionController = require('../institution/institutionController')

// admin


// institutions
router.get('/getall', institutionController.getAll)
router.post('/create', institutionController.createInstitution)
router.post('/find', institutionController.find)
router.get('/getfilters', institutionController.getFilters)

module.exports = router