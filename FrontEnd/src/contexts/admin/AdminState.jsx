import { useState } from "react";
import AdminContext from "./AdminContext";

const AdminState = (props) => {
    const [admin, setAdmin] = useState({});
    let token = '';
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

    const adminLogin = async (name,email,password) =>{
       const response = await fetch('http://localhost:5000/admin/login',{
        method : "POST",
        headers:{
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify({name , email , password})
    })
     const json = await response.json();
     
     token= await json.token;
     console.log(token)
    }
    const fetchAdmin = async()=>{
        const response =await fetch('http://localhost:5000/admin/fetchadmin',{
            method : "POST",
            headers:{
                'Content-Type' : 'application/json',
                'token' : `${token}` 
            },
        })
        console.log(response.json)
    }
    
    return (
        <AdminContext.Provider value={{ admin, setAdmin, adminSignup , adminLogin ,fetchAdmin}}>
            {props.children}
        </AdminContext.Provider>
    )
}

export default AdminState;