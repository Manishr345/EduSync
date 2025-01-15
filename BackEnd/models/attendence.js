const mongoose = require('mongoose');

const attendenceSchema = mongoose.Schema({
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'students',
        required: false
    },
    day: {
        type: String,
        required: false
    },
    subject: {
        type: String,
        required: false
    },
    isPresent: {
        type: Boolean,
        required: false
    }
})

module.exports = mongoose.model('attendence', attendenceSchema);