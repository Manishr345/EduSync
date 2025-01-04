const express = require('express')
const router= express.Router();
const CourseDetails = require('../models/courseDetais')

router.post('/coursedetails',async(req,res)=>{
     const coursedetails = await CourseDetails.find({
        courseName: req.body.courseName,
        year : req.body.year
})
    res.send(coursedetails);
})
module.exports = router;