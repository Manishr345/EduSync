const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique : true

    },
    password: {
        type: String,
        required: true
    },
    uid: {
        type: String,
        required: true,
        unique : true
    },
   
});

module.exports = mongoose.model('Student', studentSchema);