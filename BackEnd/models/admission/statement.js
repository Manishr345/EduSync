const mongoose = require('mongoose');

const statementSchema = mongoose.Schema({
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