const express = require('express')
const router = express.Router();
const Admin = require('../models/admin');
const Student = require('../models/Student');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchAdmin = require('../middlewear/fetchAdmin');

router.post('/login', [
    body('name', 'Name should be of atleast 3 characters').isLength({ min: 3 }),
    body('email', 'Please enter a valid email').isEmail(),
    body('password', 'Password should be of atleast 8 characters').isLength({ min: 8 })
], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ error: errors.array() });
        }

        const { name, email, password } = req.body;
        
        // Find admin by email
        const admin = await Admin.findOne({ email });
        if (!admin) {
            return res.status(400).json({ error: 'Please enter valid credentials' });
        }

        // Verify password
        const isPasswordValid = await bcrypt.compare(password, admin.password);
        if (!isPasswordValid) {
            return res.status(400).json({ error: 'Please enter valid credentials' });
        }

        // Create JWT token
        const adminID = {
            admin: { id: admin.id }
        };
        const jwtSecret = process.env.JWT_SECRET || 'Nothing';
        const token = jwt.sign(adminID, jwtSecret);
        
        res.json({ token });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.post('/fetchadmin', fetchAdmin, async (req, res) => {
    const adminID = req.admin.id;
    const admin = await Admin.findById(adminID);
    res.send(admin);
})

router.post('/fetchstudents', async (req, res) => {
    const students = await Student.find();
    res.send(students);
})

module.exports = router;