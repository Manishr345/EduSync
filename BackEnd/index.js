const express = require('express');
const app = express();
const connectToMongo = require('./mangodb');

connectToMongo();

app.use(express.json());

app.use('/auth', require('./Routes/auth'));

app.listen(5000, () => {
    console.log('App is running at http://localhost:5000')
})