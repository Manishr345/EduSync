const express = require('express');
const router = express.Router();
const PersonalDetails = require('../models/admission/personalDetails');
const EducationDetails = require('../models/admission/educationalDetails');
const Documents = require('../models/admission/documents');
const Statement = require('../models/admission/statement');
const { body, validationResult } = require('express-validator');
const multer = require('multer');
const { default: Statement } = require('../../FrontEnd/src/components/Admission/Statement');


router.post('/personaldetails', [
    body('fullName', 'Full Name should be of atleast 8 characters ').isLength({ min: 8 }),
    body('contact', 'Contact number should be of 10 numbers').isLength({min: 10, max: 10 }),
    body('email', 'Please enter a valid email').isEmail(),
    body('parentName', 'Parent name should be of atleast 8 characters').isLength({ min: 8 }),
    body('parentContact', 'Contact number should be of 10 numbers').isLength({ min: 10, max: 10 }),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    let pemail = await PersonalDetails.findOne({ email: req.body.email });
    if (pemail) {
        return res.status(400).json({ error: 'Applicant already exists' });
    }
    let pcontact = await PersonalDetails.findOne({ contact: req.body.contact });
    if (pcontact) {
        return res.status(400).json({ error: 'Please enter a valid Contact number' });
    }

    const pd = await PersonalDetails.create({
        fullName: req.body.fullName,
        dob: req.body.dob,
        gender: req.body.gender,
        nationality: req.body.nationality,
        contact: req.body.contact,
        email: req.body.email,
        address: req.body.address,
        parentName: req.body.parentName,
        relation: req.body.relation,
        parentContact: req.body.parentContact,
        parentEmail: req.body.parentEmail,
        occupation: req.body.occupation
    })
    res.send(pd);
});

router.post('/educationaldetails/:id', async (req, res) => {
    const pd = await PersonalDetails.findOne({_id: req.params.id});
    if(!pd) {
        return res.status(400).json({error: 'Please fill your personal details first'});
    }
    const ed = await EducationDetails.create({
        student: pd._id,
        schoolName: req.body.schoolName,
        collegeName: req.body.collegeName,
        schoolGrade: req.body.schoolGrade,
        collegeGrade: req.body.collegeGrade,
        highestQualification: req.body.highestQualification
    })
    res.send(ed);
})

const storage = multer.memoryStorage();

const upload = multer({ storage });

router.post('/documents', upload.fields([
  { name: 'passportSizePhoto', maxCount: 1 },
  { name: 'marksheet10th', maxCount: 1 },
  { name: 'marksheet12th', maxCount: 1 },
  { name: 'certificate10th', maxCount: 1 },
  { name: 'certificate12th', maxCount: 1 },
  { name: 'identityProof', maxCount: 1 },
  { name: 'birthCertificate', maxCount: 1 },
  { name: 'addressProof', maxCount: 1 },
]), async (req, res) => {
  try {
    // Check if files were uploaded
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).json({ message: 'No files uploaded' });
    }

    // Convert uploaded files to base64 and prepare data for the database
    const documentsData = {};
    for (const [fieldName, fileArray] of Object.entries(req.files)) {
      if (fileArray && fileArray[0]) {
        documentsData[fieldName] = fileArray[0].buffer.toString('base64');
      }
    }

    // Save document data to the database
    const documents = await Documents.create(documentsData);

    res.status(201).json({ message: 'Documents uploaded successfully', documents });
  } catch (error) {
    console.error('Error uploading documents:', error);
    res.status(500).json({ message: 'Internal server error', error });
  }
});

router.post('/statement', upload.fields([
  { name: 'studentSign', maxCount: 1 },
  { name: 'parentSign', maxCount: 1 }
]), async (req, res) => {
  try {
    // Check if files were uploaded
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).json({ message: 'No files uploaded' });
    }

    // Convert uploaded files to base64 and prepare data for the database
    const statementData = {};
    for (const [fieldName, fileArray] of Object.entries(req.files)) {
      if (fileArray && fileArray[0]) {
        statementData[fieldName] = fileArray[0].buffer.toString('base64');
      }
    }

    // Save document data to the database
    const statement = await Statement.create(statementData);

    res.status(201).json({ message: 'Statement uploaded successfully', statement });
  } catch (error) {
    console.error('Error uploading statement:', error);
    res.status(500).json({ message: 'Internal server error', error });
  }
});

module.exports = router;
