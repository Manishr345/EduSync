const express = require('express')
const router = express.Router();
const Student = require('../models/Student');
const PersonalDetails = require('../models/admission/personalDetails');
const EducationDetails = require('../models/admission/educationalDetails');
const Documents = require('../models/admission/documents');
const Statement = require('../models/admission/statement');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchStudent = require('../middlewear/fetchStudent');

router.post('/signup/:id', async (req, res) => {
   let student = await Student.findOne({ email: req.body.email });
    if (student) {
        return res.status(400).json({ error: 'Student already exists' });
    }
    const pd = await PersonalDetails.findById(req.params.id);
    const ed = await EducationDetails.findOne({student: req.params.id});
    const docs = await Documents.findOne({student: req.params.id});
    const stats = await Statement.findOne({student: req.params.id});

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.password, salt);
    student = await Student.create({
        fullName : pd.fullName,
        dob : pd.dob,
        gender : pd.gender,
        nationality : pd.nationality,
        contact : pd.contact,
        email : pd.email,
        address : pd.address,
        parentName : pd.parentName,
        relation : pd.relation,
        parentContact : pd.parentContact,
        parentEmail : pd.parentEmail,
        occupation : pd.occupation,
        schoolName : ed.schoolName,
        collegeName : ed.collegeName,
        schoolGrade : ed.schoolGrade,
        collegeGrade : ed.collegeGrade,
        highestQualification : ed.highestQualification,
        courseName : req.body.courseName,
        year : req.body.year,
        fees : req.body.fees,
        passportSizePhoto : docs.passportSizePhoto,
        marksheet10th : docs.marksheet10th,
        marksheet12th : docs.marksheet12th,
        certificate10th : docs.certificate10th,
        indentityProof : docs.indentityProof,
        birthCertificate : docs.birthCertificate,
        addressProof : docs.addressProof,
        studentSign : stats.studentSign,
        parentSign : stats.parentSign,
        password: hash
    });
    await PersonalDetails.collection.drop();
    await EducationDetails.collection.drop();
    await Documents.collection.drop();
    await Statement.collection.drop();
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
    let student = await Student.findOne({ 
        email: req.body.email,
        fullName: req.body.name 
    });
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

router.post('/fetchstudent', fetchStudent, async (req, res) => {
    const studentID = req.student.id;
    const student = await Student.findById(studentID);
    res.send(student);
})

router.post('/addkt', async (req, res) => {
    const { ktSubjects } = req.body;
    const id = req.header('id');
    const student = await Student.findByIdAndUpdate(
        id,
        { $addToSet: { ktSubjects: { $each: ktSubjects } } },
        { new: true }
      );
      res.send(student);
})

module.exports = router;