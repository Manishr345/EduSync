const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Admin = require('./models/admin');
require('dotenv').config();

const updateAdminPassword = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        
        // Find the admin
        const admin = await Admin.findOne({ email: 'ak@gmail.com' });
        if (!admin) {
            console.log('Admin not found');
            return;
        }

        const plainPassword = '12345678';
        
        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(plainPassword, salt);
        
        // Update the admin's passwords
        admin.password = hashedPassword;
        admin.plainPassword = plainPassword;
        await admin.save();
        
        console.log('Admin passwords updated successfully');
    } catch (error) {
        console.error('Error updating admin passwords:', error);
    } finally {
        mongoose.disconnect();
    }
};

updateAdminPassword(); 