const mongoose = require('mongoose');
require('dotenv').config();

const mongoURI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster.mrbar.mongodb.net/?retryWrites=true&w=majority&appName=Cluster`;

const connectToMongo = async () => {
    try {
        if (mongoose.connections[0].readyState) {
            return;
        }
        
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
    }
};

module.exports = connectToMongo;                    