const express = require('express')
const router = express.Router();
const Student = require('../models/Student');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fetchStudent = require('../middlewear/fetchStudent');

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
    let student = await Student.findOne({email: req.body.email});
    if(student){
        return res.status(400).json({error: 'Student already exists'});
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.password, salt);
    student = await Student.create({
        name: req.body.name,
        email: req.body.email,
        uid: req.body.uid,
        password: hash
    });
    res.json({ Successfull: "Student signed up" });
})
router.post('/login',[
     body('name' , 'Name should be of atleast 3 characters').isLength({min : 3}),
     body('email','Please enter a valid email').isEmail(),
     body('password','Password should be of atleast 8 characters').isLength({min : 8})
], async (req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({error: errors.array()});
    }
    let student = await Student.findOne({email : req.body.email});
    if(!student){
    return res.status(400).json({error :'Please enter valid credentials'})
    }
    const studentID = {
        student: {id: student.id}
    }
    const jwtSecret = 'Nothing';
    const token = jwt.sign(studentID, jwtSecret);
    res.json({token});
})

router.post('/fetchstudent', fetchStudent, async (req, res) => {
    const studentID = req.student.id;
    const student = await Student.findById(studentID);
    res.send(student);
})

module.exports = router;