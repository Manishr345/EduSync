import { useState, useEffect } from "react";
import AdminContext from "./AdminContext";

const API_URL = import.meta.env.VITE_API_URL;

const AdminState = (props) => {
    const [admin, setAdmin] = useState({});
    const [token, setToken] = useState(() => {
        return sessionStorage.getItem('adminToken') || '';
    });

    const adminLogin = async (name, email, password) => {
        try {
            const response = await fetch(`${API_URL}/admin/login`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, password })
            });
            
            const data = await response.json();
            
            if (!response.ok) {
                return { error: data.error || 'Login failed' };
            }
            
            return data;
        } catch (error) {
            console.error('Login error:', error);
            return { error: 'Failed to connect to server' };
        }
    };
    

    const fetchAdmin = async () => {
        const storedToken = sessionStorage.getItem('adminToken'); // Use token from Local Storage
        if (!storedToken) {
            console.error("No token found. Please log in.");
            return;
        }

        const response = await fetch(`${API_URL}/admin/fetchadmin`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'token': storedToken
            },
        });
        const json = await response.json();
        console.log(json);
        setAdmin(json);
    };

    useEffect(() => {
        // If token changes, update Local Storage
        if (token) {
            sessionStorage.setItem('adminToken', token);
        } else {
            sessionStorage.removeItem('adminToken'); // Clear token if it becomes empty
        }
    }, [token]);

    return (
        <AdminContext.Provider value={{ admin, setAdmin, adminLogin, fetchAdmin, token }}>
            {props.children}
        </AdminContext.Provider>
    );
};

export default AdminState;
