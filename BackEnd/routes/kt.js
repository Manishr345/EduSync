const express = require('express');
const router = express.Router();
const Kt = require('../models/kt');

// Endpoint to fetch data by student ID
router.post('/kt', async (req, res) => {
    const id = req.header('id');
    console.log('Received ID:', id);
    try {
        const kt = await Kt.find({ student: id });
        res.status(200).send(kt);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send({ message: 'Error fetching data' });
    }
});

// Endpoint to store data in the collection
router.post('/kt/store', async (req, res) => {
    const { student, subject } = req.body;

    try {
        const newKt = new Kt({ student, subject });
        await newKt.save();
        res.status(201).send({ message: 'Data stored successfully', data: newKt });
    } catch (error) {
        console.error('Error storing data:', error);
        res.status(500).send({ message: 'Error storing data', error });
    }
});

module.exports = router;
