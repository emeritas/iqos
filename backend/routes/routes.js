const router = require('express').Router()

const institutionController = require('../institution/institutionController')

router.get('/getall', institutionController.getAll)
router.post('/create', institutionController.createInstitution)
router.post('/search')

module.exports = router