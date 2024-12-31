const mongoose = require('mongoose');

const educationalDetailsSchema = mongoose.Schema({
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'personaldetails'
    },
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
    highestQualification:{
        type: String,
        required: true
    }
})
module.exports = mongoose.model('educationDetails', educationalDetailsSchema);