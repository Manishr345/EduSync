const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://edusync345:EKzsbuC9rX6J487b@cluster.mrbar.mongodb.net/?retryWrites=true&w=majority&appName=Cluster';

const connectToMongo = () => {
    mongoose.connect(mongoURI).then(console.log('Connected to Mongo'))
    .catch((error) => console.log(error.message));
}

module.exports = connectToMongo;