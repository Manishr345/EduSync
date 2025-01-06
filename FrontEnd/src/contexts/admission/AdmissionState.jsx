import { useState } from "react";
import AdmissionContext from "./AdmissionContext";

const AdmissionState = (props) => {
    const [id, setId] = useState(() => {
        return localStorage.getItem('studentid') || '';
    })
    const [fees, setFees] = useState(() => {
        return localStorage.getItem('fees') || '';
    })
    const [courseName, setCN] = useState(() => {
        return localStorage.getItem('courseName') || '';
    })
    const [year, setYear] = useState(() => {
        return localStorage.getItem('year') || '';
    })
    const [student, setStudent] = useState(() => {
        return localStorage.getItem('student') || '';
    })
    const [personal, setPersonal] = useState({});
    const personalDetails = async (fullName, dob, gender, nationality, contact, email, address, parentName, relation, parentContact, parentEmail, occupation) => {
        const response = await fetch('http://localhost:5000/admission/personaldetails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ fullName, dob, gender, nationality, contact, email, address, parentName, relation, parentContact, parentEmail, occupation })
        })
        const json = await response.json();
        if (json._id) {
            setId(json._id);
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
            body: JSON.stringify({ schoolName, collegeName, schoolGrade, collegeGrade, highestQualification })
        })
        const json = await response.json();
        console.log(json);
    }
    const uploadDocuments = async (formData) => {
        const studentId = localStorage.getItem('studentid');
        const response = await fetch(`http://localhost:5000/admission/documents/${studentId}`, {
            method: 'POST',
            body: formData,
        });
        const json = await response.json();
        console.log(json);
    }
    const uploadStatement = async (formData) => {
        const studentId = localStorage.getItem('studentid');
        const response = await fetch(`http://localhost:5000/admission/statement/${studentId}`, {
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
            body: JSON.stringify({ courseName, year })
        });
        const json = await response.json();
        if (json[0].fees) {
            setFees(json[0].fees);
            localStorage.setItem('fees', json[0].fees);
        }
        if (json[0].courseName) {
            setCN(json[0].courseName);
            localStorage.setItem('courseName', json[0].courseName);
        }
        if (json[0].year) {
            setYear(json[0].year);
            localStorage.setItem('year', json[0].year);
        }
        return localStorage.getItem('fees');
    }
    const payFee = () => {
        return localStorage.getItem('fees');
    }
    const studentSignup = async () => {
        const studentId = localStorage.getItem('studentid');
        const courseName = localStorage.getItem('courseName');
        const year = localStorage.getItem('year');
        const response = await fetch(`http://localhost:5000/student/signup/${studentId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ courseName, year, fees })
        })
        const json = response.json();
        console.log(json);
        console.log('Student admission successfull');
    }
    const showPassword = () => {
        return localStorage.getItem('studentid');
    }
    const studentLogin = async () => {

    }
    const showStudent = async ()=>{
        const response=await fetch('http://localhost:5000/student/fetchstudent',
            {
                method : 'POST',
                headers: {
                    'Content-Type':'application/json',
                    'token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdHVkZW50Ijp7ImlkIjoiNjc3YmE3OTdiN2ZjMTE2MWY1ZDFiOGQ0In0sImlhdCI6MTczNjE1NzEyMn0.y1v1TRW2PDNtJJb2OgtuRoHIBAbTheiClTEftlxzjpc'
                }
            }
        )
        const json = await response.json();
        console.log(json);
        localStorage.setItem('student', JSON.stringify(json))
    }
        
    
    return (
        <AdmissionContext.Provider value={{ personal, setPersonal, personalDetails, educationalDetails, uploadDocuments, uploadStatement, courseDetails, payFee, studentSignup, showPassword, showStudent }}>
            {props.children}
        </AdmissionContext.Provider>
    )
}

export default AdmissionState;