const mongoose =  require('mongoose');
const courseDetailSchema = mongoose.Schema({
    courseName:{
        type: String ,
        required: true
    },
     year:{
        type: String ,
        required: true
    },
    fees:{
        type: String ,
        required: true
    }
})
module.exports = mongoose.model('coursedetails', courseDetailSchema);