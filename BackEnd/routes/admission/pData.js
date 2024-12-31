const express = require('express');
const router = express.Router();
const PersonalDetail = require('../../models/admission/personalDetails');
const { body, validationResult } = require('express-validator');
const fetchPersonalDetails = require('../../middlewear/admission/fetchPersonalDeatils');

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
    let pemail = await PersonalDetail.findOne({ email: req.body.email });
    if (pemail) {
        return res.status(400).json({ error: 'Applicant already exists' });
    }
    let pcontact = await PersonalDetail.findOne({ contact: req.body.contact });
    if (pcontact) {
        return res.status(400).josn({ error: 'Please enter a valid Contact number' });
    }

    const pd = await PersonalDetail.create({
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
    res.send(pd)
})
module.exports = router;