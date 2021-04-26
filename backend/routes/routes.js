const router = require('express').Router()

const institutionController = require('../institution/institutionController')
const adminController = require('../admin/adminController')
const auth = require('../admin/auth')

// admin
router.post('/login', adminController.logIn)


// institutions
router.get('/getall', institutionController.getAll)
router.post('/create', institutionController.createInstitution)
router.post('/find', institutionController.find)
router.get('/getfilters', institutionController.getFilters)
router.patch('/confirm', auth, institutionController.confirmInstitution)
router.get('/unconfirmed', auth, institutionController.getUnconfirmedInstitutions)
router.post('/delete', auth, institutionController.deleteInstitution)

module.exports = router