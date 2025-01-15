const mongoose = require('mongoose');
require('dotenv').config();

const mongoURI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster.mrbar.mongodb.net/?retryWrites=true&w=majority&appName=Cluster`;

const connectToMongo = () => {
    mongoose.connect(mongoURI).then(console.log('Connected to Mongo'))
    .catch((error) => console.log(error.message));
}

module.exports = connectToMongo;                    