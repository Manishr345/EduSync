import { useState } from "react";
import AdmissionContext from "./AdmissionContext";

const AdmissionState = (props) => {
    const [id, setId] = useState(() => {
        return localStorage.getItem('studentid') || '';
    })
    const [fees, setFees] = useState(() => {
        return localStorage.getItem('fees') || '';
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
    const uploadDocuments = async (formData) => {
        const response = await fetch('http://localhost:5000/admission/documents', {
            method: 'POST',
            body: formData,
        });
        const json = await response.json();
        console.log(json);
    }
    const uploadStatement = async (formData) => {
        const response = await fetch('http://localhost:5000/admission/statement', {
            method: 'POST',
            body: formData,
        });
        const json = await response.json();
        console.log(json);
    }
    const courseDetails = async (courseName, year) => {
        const response = await fetch('http://localhost:5000/course/coursedetails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({courseName, year})
        });
        const json = await response.json();
        if(json[0].fees){
            setFees(json[0].fees);
            localStorage.setItem('fees', json[0].fees);
        }
        return localStorage.getItem('fees');
    }
    const payFee = () => {
        return localStorage.getItem('fees');
    }
    return (
        <AdmissionContext.Provider value={{personal, setPersonal, personalDetails, educationalDetails, uploadDocuments, uploadStatement, courseDetails, payFee}}>
            {props.children}
        </AdmissionContext.Provider>
    )
}

export default AdmissionState;