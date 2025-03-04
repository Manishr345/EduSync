const express = require('express');
const app = express();
const connectToMongo = require('./mangodb');
const cors = require('cors');
const bodyParser = require('body-parser');

require('dotenv').config();

connectToMongo();

app.use(cors({
  origin: process.env.FRONTEND_URL || '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/student', require('./routes/studentAuth'));

app.use('/admin', require('./routes/adminAuth'));

app.use('/admission' , require('./routes/admission'));

app.use('/course', require('./routes/courseDetails'));

app.use('/', require('./routes/attendence'));

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

const PORT = process.env.PORT || 5000;

// For local development
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
  });
}

// For Vercel
module.exports = app;