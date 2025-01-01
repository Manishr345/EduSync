const mongoose = require('mongoose');

const personalDetailSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    dob: {
        type: String,
        required : true
    },
    gender:{
        type: String,
        required : true
    },
    nationality :{
        type: String,
        reuired : true
    },
    contact:{
        type: String,
        required : true,
        unique : true
    },
    email: {
        type: String,
        required: true,
        unique : true
    },
    address:{
        type: String,
        required : true
    },
    parentName: {
        type: String,
        required: true
    },
    relation: {
        type: String,
        required: true,
    },
    parentContact:{
        type: String,
        required : true,
    },
    parentEmail:{
        type: String,
        required: true,
    },
    occupation:{
        type: String,
        required : true,
    }
})

module.exports = mongoose.model('personalDetail', personalDetailSchema);