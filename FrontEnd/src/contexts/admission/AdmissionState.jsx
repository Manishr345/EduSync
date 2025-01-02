import { useState } from "react";
import AdmissionContext from "./AdmissionContext";

const AdmissionState = (props) => {
    const [id, setId] = useState(() => {
        return localStorage.getItem('studentid') || '';
    })
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
        if(json._id){
            setId(json._id); // Update state
            localStorage.setItem('studentid', json._id);
        }
    }
    const educationalDetails = async (schoolName, collegeName, schoolGrade, collegeGrade, highestQualification) => {
        const studentId = localStorage.getItem('studentid');
        const response = await fetch(`http://localhost:5000/admission/educationaldetails/${studentId}`, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({schoolName, collegeName, schoolGrade, collegeGrade, highestQualification})
        })
        const json = await response.json();
        console.log(json);
    }
    return (
        <AdmissionContext.Provider value={{personal, setPersonal, personalDetails, educationalDetails}}>
            {props.children}
        </AdmissionContext.Provider>
    )
}

export default AdmissionState;