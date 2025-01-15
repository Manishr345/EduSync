const express = require('express');
const router = express.Router();
const Attendence = require('../models/attendence');

router.post('/attendence', async (req, res) => {
    const id = req.header('id');
    const attendence = await Attendence.create({
        student: id,
        day: req.body.day,
        isPresent: req.body.isPresent,
        subject: req.body.subject
    })
    res.send(attendence);
})

router.post('/fetchattendence', async (req, res) => { 
    const studnentId = req.header('id');
    const attendence = await Attendence.find({student: studnentId});
    res.send(attendence);
})

module.exports = router;
