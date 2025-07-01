const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Admin = require('./models/admin');
require('dotenv').config();

const updateAllAdmins = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        
        // Find all admins
        const admins = await Admin.find({});
        console.log(`Found ${admins.length} admin users`);

        for (const admin of admins) {
            // If password is not hashed (doesn't start with $2a$)
            if (!admin.password.startsWith('$2a$')) {
                console.log(`Updating admin: ${admin.email}`);
                
                // Hash the existing password
                const salt = await bcrypt.genSalt(10);
                const hashedPassword = await bcrypt.hash(admin.password, salt);
                
                // Update the admin
                admin.password = hashedPassword;
                admin.plainPassword = admin.password; // Store the original password
                await admin.save();
                
                console.log(`Updated admin: ${admin.email}`);
                console.log(`Plain password: ${admin.plainPassword}`);
            } else {
                console.log(`Admin ${admin.email} already has hashed password`);
            }
        }

        console.log('All admins updated successfully');
    } catch (error) {
        console.error('Error updating admins:', error);
    } finally {
        mongoose.disconnect();
    }
};

updateAllAdmins(); 