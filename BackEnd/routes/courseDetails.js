const express = require('express')
const router= express.Router();
const CourseDetails = require('../models/courseDetais')

router.post('/coursedetails',async(req,res)=>{
     const coursedetails = await CourseDetails.find({
        courseName: "BSC Animation",
        year : "3"
})
    res.send(coursedetails);
})
module.exports = router;