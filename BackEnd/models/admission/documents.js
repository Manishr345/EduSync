const mongoose = require('mongoose');

const documentSchema = mongoose.Schema({
    passportSizePhoto: {
        type: String,
        required: true
    },
    marksheet10th: {
        type: String,
        required: true
    },
    marksheet12th: {
        type: String,
        required: true
    },
    certificate10th: {
        type: String,
        required: true
    },
    certificate12th: {
        type: String,
        required: true
    },
    indentityProof: {
        type: String,
        required: true
    },
    birthCertificate: {
        type: String,
        required: true
    },
    addressProof: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model('documents', documentSchema);