const mongoose = require('mongoose');

const educatonDetailsSchema = mongoose.Schema({
    schoolName:{
        type: String,
        required: true
    },
    collegeName:{
        type: String,
        required: true
    },
    schoolGrade:{
        type: String,
        required: true
    },
    collegeGrade:{
        type: String,
        required: true
    },
    highetsQualification:{
        type: String,
        required: true
    }
})
module.exports = educatonDetailsSchema();