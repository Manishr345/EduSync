const express = require('express');
const router = express.Router();
const Kt = require('../models/kt');

router.post('/kt', async (req, res) => {
    const id = req.header('id');
    console.log('Received ID:', id);
    const kt = await Kt.find({ student: id });
    console.log(kt);
    res.send(kt);
});


module.exports = router;