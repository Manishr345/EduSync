const express = require('express');
const app = express();
const connectToMongo = require('./mangodb');
const cors = require('cors');
const bodyParser = require('body-parser');

require('dotenv').config();

// Increase payload size limit
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// CORS configuration
app.use(cors({
  origin: '*', // For testing. Change to your frontend URL in production
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'token', 'id'],
  credentials: true
}));

// Connect to MongoDB
let isConnected = false;
const connectDB = async () => {
  if (isConnected) return;
  try {
    await connectToMongo();
    isConnected = true;
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
};

// Ensure database connection before handling requests
app.use(async (req, res, next) => {
  await connectDB();
  next();
});

// Routes
app.use('/student', require('./routes/studentAuth'));
app.use('/admin', require('./routes/adminAuth'));
app.use('/admission', require('./routes/admission'));
app.use('/course', require('./routes/courseDetails'));
app.use('/', require('./routes/attendence'));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    error: 'Something went wrong!',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
  });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Handle root route
app.get('/', (req, res) => {
  res.json({ message: 'Server is running' });
});

// For local development
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

module.exports = app;