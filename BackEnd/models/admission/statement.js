const mongoose = require('mongoose');

const statementSchema = mongoose.Schema({
    student: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'personaldetails'
        },
    studentSign: {
        type: String,
        required: false
    },
    parentSign: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('statement', statementSchema);