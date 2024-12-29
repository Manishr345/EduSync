const express = require('express')
const router = express.Router();
const Student = require('../models/Student');
const { body, validationResult } = require('express-validator');

router.post('/signup', [
    body('name', 'Name should be of atleast 3 characters').isLength({ min: 3 }),
    body('email', 'Please enter a valid email').isEmail(),
    body('uid', 'uid should be of 8 characters').isLength({min: 8, max: 8}),
    body('password', 'Password should be of atleast 8 characters').isLength({ min: 8 })
], async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({error: errors.array()});
    }
    let student = Student.findOne({email: req.body.email});
    if(student){
        return res.status(400).json({error: 'Student already exists'});
    }
    student = await Student.create({
        name: req.body.name,
        email: req.body.email,
        uid: req.body.uid,
        password: req.body.password,
    });
    res.json({ Successfull: "Student signed up" });
})
module.exports = router;