const express = require('express')
const router = express.Router();
const Student = require('../models/student');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fetchStudent = require('../middlewear/fetchStudent');

router.post('/signup', async (req, res) => {
   let student = await Student.findOne({ email: req.body.email });
    if (student) {
        return res.status(400).json({ error: 'Student already exists' });
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.password, salt);
    student = await Student.create({
        fullName : req.body.fullName ,
        dob : req.body.dob,
        dob : req.body.dob,
        gender : req.body.gender,
        nationality : req.body.nationality,
        contact : req.body.contact,
        email : req.body.email,
        address : req.body.address,
        parentName : req.body.parentName,
        relation : req.body.relation,
        parentContact : req.body.parentContact,
        parentEmail : req.body.parentEmail,
        occupation : req.body.occupation,
        schoolName : req.body.schoolName,
        collegeName : req.body.collegeName,
        schoolGrade : req.body.schoolGrade,
        collegeGrade : req.body.collegeGrade,
        highestQualification : req.body.highestQualification,
        courseName : req.body.courseName,
        year : req.body.year,
        fees : req.body.fees,
        passportSizePhoto : req.body.passportSizePhoto,
        marksheet10th : req.body.marksheet10th,
        marksheet12th : req.body.marksheet12th,
        certificate10th : req.body.certificate10th,
        indentityProof : req.body.indentityProof,
        birthCertificate : req.body.birthCertificate,
        addressProof : req.body.addressProof,
        studentSign : req.body.studentSign,
        parentSign : req.body.parentSign
    });
    res.json({ Successfull: "Student signed up" });
})
router.post('/login', [
    body('name', 'Name should be of atleast 3 characters').isLength({ min: 3 }),
    body('email', 'Please enter a valid email').isEmail(),
    body('password', 'Password should be of atleast 8 characters').isLength({ min: 8 })
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ error: errors.array() });
    }
    let student = await Student.findOne({ email: req.body.email });
    if (!student) {
        return res.status(400).json({ error: 'Please enter valid credentials' })
    }
    const verifyPassword = await bcrypt.compare(req.body.password, student.password);
    if (!verifyPassword) {
        return res.status(400).json({ error: 'Please enter valid credentials' });
    }
    const studentID = {
        student: { id: student.id }
    }
    const jwtSecret = 'Nothing';
    const token = jwt.sign(studentID, jwtSecret);
    res.json({ token });
})

router.post('/student', fetchStudent, async (req, res) => {
    const studentID = req.student.id;
    const student = await Student.findById(studentID);
    res.send(student);
})

module.exports = router;