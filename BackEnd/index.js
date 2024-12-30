const express = require('express');
const app = express();
const connectToMongo = require('./mangodb');

connectToMongo();

app.use(express.json());

app.use('/student', require('./routes/studentAuth'));

app.use('/admin', require('./routes/adminAuth'));

app.listen(5000, () => {
    console.log('App is running at http://localhost:5000')
})