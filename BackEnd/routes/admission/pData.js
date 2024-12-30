const express = require('express');
const router = express.Router();
const PersonalDetail = require('../../models/admission/personalDetails');

router.post('/personaldetails',async (req,res)=>{
    const pd = await PersonalDetail.create({
        fullName : req.body.fullName,
        dob : req.body.dob ,
        gender: req.body.gender ,
        nationality : req.body.nationality ,
        contact : req.body.contact,
        email : req.body.email ,
        address : req.body.address,
        parentName : req.body.parentName ,
        relation : req.body.relation,
        parentContact : req.body.parentContact,
        parentEmail : req.body.parentEmail,
        occupation: req.body.occupation
    })
    res.send(pd)
})
module.exports =router;