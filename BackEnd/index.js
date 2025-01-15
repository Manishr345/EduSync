const express = require('express');
const app = express();
const connectToMongo = require('./mangodb');
const cors = require('cors');
const bodyParser = require('body-parser');

connectToMongo();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/student', require('./routes/studentAuth'));

app.use('/admin', require('./routes/adminAuth'));

app.use('/admission' , require('./routes/admission'));

app.use('/course', require('./routes/courseDetails'));

app.use('/', require('./routes/attendence'));

app.listen(5000, () => {
    console.log('App is running at http://localhost:5000')
})