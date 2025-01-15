import { useState } from "react";
import AdmissionContext from "./AdmissionContext";

const AdmissionState = (props) => {
    const [user, setUser] = useState(null);
    const [id, setId] = useState(() => {
        return sessionStorage.getItem('studentid') || '';
    })
    const [fees, setFees] = useState(() => {
        return sessionStorage.getItem('fees') || '';
    })
    const [courseName, setCN] = useState(() => {
        return sessionStorage.getItem('courseName') || '';
    })
    const [year, setYear] = useState(() => {
        return sessionStorage.getItem('year') || '';
    })
    const [student, setStudent] = useState(() => {
        return sessionStorage.getItem('student') || '';
    })
    const [studentToken, setStudentToken] = useState(() => {
        return sessionStorage.getItem('studentToken') || '';
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
            sessionStorage.setItem('studentid', json._id);
        }
    }
    const educationalDetails = async (schoolName, collegeName, schoolGrade, collegeGrade, highestQualification) => {
        const studentId = sessionStorage.getItem('studentid');
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
        const studentId = sessionStorage.getItem('studentid');
        const response = await fetch(`http://localhost:5000/admission/documents/${studentId}`, {
            method: 'POST',
            body: formData,
        });
        const json = await response.json();
        console.log(json);
    }
    const uploadStatement = async (formData) => {
        const studentId = sessionStorage.getItem('studentid');
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
            sessionStorage.setItem('fees', json[0].fees);
        }
        if (json[0].courseName) {
            setCN(json[0].courseName);
            sessionStorage.setItem('courseName', json[0].courseName);
        }
        if (json[0].year) {
            setYear(json[0].year);
            sessionStorage.setItem('year', json[0].year);
        }
        return sessionStorage.getItem('fees');
    }
    const payFee = () => {
        return sessionStorage.getItem('fees');
    }
    const studentSignup = async () => {
        const studentId = sessionStorage.getItem('studentid');
        const courseName = sessionStorage.getItem('courseName');
        const year = sessionStorage.getItem('year');
        const response = await fetch(`http://localhost:5000/student/signup/${studentId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ courseName, year, fees })
        })
        const json = response.json();
        setUser(json);
        console.log(json);
        console.log('Student admission successfull');
    }
    const studentLogin = async (name, email, password) => {
        const response = await fetch('http://localhost:5000/student/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, email, password})
        })
        const json = await response.json();
        sessionStorage.setItem('studentToken', json.token);
        setStudentToken(json.token);
        console.log(studentToken);
        return await json.token;
    }
    const showPassword = () => {
        return sessionStorage.getItem('studentid');
    }

    const showStudent = async ()=>{
        const token = sessionStorage.getItem('studentToken');
        const response=await fetch('http://localhost:5000/student/fetchstudent',
            {
                method : 'POST',
                headers: {
                    'Content-Type':'application/json',
                    'token': token
                }
            }
        )
        const json = await response.json();
        console.log(json);
        sessionStorage.setItem('student', JSON.stringify(json))
    }
        
    
    return (
        <AdmissionContext.Provider value={{ personal, setPersonal, personalDetails, educationalDetails, uploadDocuments, uploadStatement, courseDetails, payFee, studentSignup, showPassword, showStudent, studentLogin }}>
            {props.children}
        </AdmissionContext.Provider>
    )
}

export default AdmissionState;