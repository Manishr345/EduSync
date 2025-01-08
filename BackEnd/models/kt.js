const mongoose = require('mongoose');

const ktSchema = mongoose.Schema({
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'students'
    },
    subject: {
        type: String,
        required: false
    }
})

module.exports = mongoose.model('kts', ktSchema);