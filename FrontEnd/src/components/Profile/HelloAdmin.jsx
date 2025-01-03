import { useEffect, useState } from 'react';
import React from 'react';

const HelloAdmin = () => {
    const [admin, setAdmin] = useState(null);

    // Fetch admin data from localStorage when the component mounts
    useEffect(() => {
        const adminData = localStorage.getItem('admin');
        if (adminData) {
            setAdmin(JSON.parse(adminData));  // Store the admin data in state
        }
    }, []);

    if (!admin) {
        return <div className="text-white text-3xl font-bold">Loading...</div>;
    }

    return (
        <div className="text-white text-3xl font-bold">
            Hello {admin.name}
            <br />
            Email: {admin.email}
            <br />
            Password:{admin.password}
        </div>
    );
};

export default HelloAdmin;