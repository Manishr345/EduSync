const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Admin = require('./models/admin');
require('dotenv').config();

const createNewAdmin = async (name, email, password) => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        
        // Check if admin already exists
        const existingAdmin = await Admin.findOne({ email });
        if (existingAdmin) {
            console.log('Admin with this email already exists');
            return;
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        
        // Create new admin
        const admin = new Admin({
            name,
            email,
            password: hashedPassword,
            plainPassword: password
        });

        await admin.save();
        console.log('New admin created successfully');
        console.log('Email:', email);
        console.log('Password:', password);
    } catch (error) {
        console.error('Error creating admin:', error);
    } finally {
        mongoose.disconnect();
    }
};

// Example usage:
// Replace these values with the new admin's details
const newAdminName = "New Admin";
const newAdminEmail = "newadmin@example.com";
const newAdminPassword = "12345678";

createNewAdmin(newAdminName, newAdminEmail, newAdminPassword); 