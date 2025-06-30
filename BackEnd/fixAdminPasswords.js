const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Admin = require('./models/admin');
require('dotenv').config();

const fixAdminPasswords = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        
        // Find all admins
        const admins = await Admin.find({});
        console.log(`Found ${admins.length} admin users`);

        // Set default passwords for each admin
        const adminPasswords = {
            'ak@gmail.com': '12345678',
            'manishr@gmail.com': '12345678',
            'tokyo@gmail.com': '12345678'
        };

        for (const admin of admins) {
            const plainPassword = adminPasswords[admin.email] || '12345678';
            console.log(`Updating admin: ${admin.email}`);
            
            // Hash the password
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(plainPassword, salt);
            
            // Update the admin
            admin.password = hashedPassword;
            admin.plainPassword = plainPassword;
            await admin.save();
            
            console.log(`Updated admin: ${admin.email}`);
            console.log(`Plain password: ${plainPassword}`);
        }

        console.log('All admin passwords fixed successfully');
    } catch (error) {
        console.error('Error fixing admin passwords:', error);
    } finally {
        mongoose.disconnect();
    }
};

fixAdminPasswords(); 