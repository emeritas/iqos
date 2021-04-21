const mongoose = require('mongoose')
const validator = require('validator')

const InstitutionSchema = mongoose.Schema({
    ins_code: {
        type: Number,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    school_type: {
        type: String,
        required: true
    },
    county: {
        type: String,
        required: true
    },
    main_type: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, 'invalid email'],
        unique: true
    },
    legal_status: {
        type: String,
        required: true
    }
})

const Institution = mongoose.model('institution', InstitutionSchema)

module.exports = Institution