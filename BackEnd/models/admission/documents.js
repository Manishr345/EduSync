const mongoose = require('mongoose');

const documentSchema = mongoose.Schema({
    passportSizePhoto: {
        type: String,
        required: true
    },
    marksheet10th: {
        type: String,
        required: false
    },
    marksheet12th: {
        type: String,
        required: false
    },
    certificate10th: {
        type: String,
        required: false
    },
    certificate12th: {
        type: String,
        required: false
    },
    indentityProof: {
        type: String,
        required: false
    },
    birthCertificate: {
        type: String,
        required: false
    },
    addressProof: {
        type: String,
        required: false
    }
})
module.exports = mongoose.model('documents', documentSchema);