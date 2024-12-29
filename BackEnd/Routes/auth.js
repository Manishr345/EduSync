const express = require('express')
const router = express.Router();
const Student = require('../models/Student')

    router.post('/Student', async (req, res) => {
        const student = await Student.create({
            name: req.body.name,
            email: req.body.email,
            uid: req.body.uid,
            password: req.body.password,
           
        });
        res.send("Student is ready");
    })

module.exports = router ;


