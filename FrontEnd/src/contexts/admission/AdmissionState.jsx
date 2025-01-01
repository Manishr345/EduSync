import { useState } from "react";
import AdmissionContext from "./AdmissionContext";

const AdmissionState = (props) => {
    const [personal, setPersonal] = useState({});
    const personalDetails = async (fullName, dob, gender, nationality, contact, email, address, parentName, relation, parentContact, parentEmail, occupation) => {
        const response = await fetch('http://localhost:5000/admission/personaldetails', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({fullName, dob, gender, nationality, contact, email, address, parentName, relation, parentContact, parentEmail, occupation})
        })
        const json = await response.json();
        console.log(json);
    }
    return (
        <AdmissionContext.Provider value={{personal, setPersonal, personalDetails}}>
            {props.children}
        </AdmissionContext.Provider>
    )
}

export default AdmissionState;