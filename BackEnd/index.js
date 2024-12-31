const express = require('express');
const app = express();
const connectToMongo = require('./mangodb');
const cors = require('cors');

connectToMongo();

app.use(cors());

app.use(express.json());

app.use('/student', require('./routes/studentAuth'));

app.use('/admin', require('./routes/adminAuth'));

app.use('/admission' , require('./routes/admission'));

app.listen(5000, () => {
    console.log('App is running at http://localhost:5000')
})