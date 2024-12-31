const express = require('express')
const router = express.Router();
const Admin = require('../models/admin');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fetchAdmin = require('../middlewear/fetchAdmin');

router.post('/signup', [
    body('name', 'Name should be of atleast 3 characters').isLength({ min: 3 }),
    body('email', 'Please enter a valid email').isEmail(),
    body('password', 'Password should be of atleast 8 characters').isLength({ min: 8 })
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ error: errors.array() });
    }
    let admin = await Admin.findOne({ email: req.body.email });
    if (admin) {
        return res.status(400).json({ error: 'Admin already exists' });
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.password, salt);
    admin = await Admin.create({
        name: req.body.name,
        email: req.body.email,
        aid: req.body.aid,
        password: hash
    });
    res.json({ Successfull: "Admin signed up" });
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
    let admin = await Admin.findOne({ email: req.body.email });
    if (!admin) {
        return res.status(400).json({ error: 'Please enter valid credentials' })
    }
    const verifyPassword = await bcrypt.compare(req.body.password, admin.password);
    if (!verifyPassword) {
        return res.status(400).json({ error: 'Please enter valid credentials' });
    }
    const adminID = {
        admin: { id: admin.id }
    }
    const jwtSecret = 'Nothing';
    const token = jwt.sign(adminID, jwtSecret);
    res.json({ token });
})

router.post('/fetchadmin', fetchAdmin, async (req, res) => {
    const adminID = req.admin.id;
    const admin = await Admin.findById(adminID);
    res.send(admin);
})

module.exports = router;