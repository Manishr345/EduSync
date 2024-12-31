import { useState } from "react";
import AdminContext from "./AdminContext";

const AdminState = (props) => {
    const [admin, setAdmin] = useState({});
    const adminSignup = async (name, email, password) => {
        const response = await fetch('http://localhost:5000/admin/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password })
        })
        const json = await response.json();
        console.log(json);
    }
    return (
        <AdminContext.Provider value={{ admin, setAdmin, adminSignup }}>
            {props.children}
        </AdminContext.Provider>
    )
}

export default AdminState;