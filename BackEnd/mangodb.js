const mongoose = require('mongoose');
require('dotenv').config();

const mongoURI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster.mrbar.mongodb.net/?retryWrites=true&w=majority&appName=Cluster`;

const connectToMongo = async () => {
    try {
        if (mongoose.connections[0].readyState) {
            console.log('Using existing MongoDB connection');
            return;
        }
        
        const conn = await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000,
            socketTimeoutMS: 45000,
        });

        console.log('MongoDB Connected');
        return conn;
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
        throw error; // Propagate error for handling
    }
};

module.exports = connectToMongo;                    