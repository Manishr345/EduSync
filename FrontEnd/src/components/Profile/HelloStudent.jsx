import { useEffect, useState } from 'react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import AdmissionContext from '../../contexts/admission/AdmissionContext';

const HelloStudent = () => {
    const [student, setStudent] = useState(() => {
            return localStorage.getItem('studentPresence') || 'true';
        });
    const location = useLocation();
    const [render, setRender] = useState(location.pathname);
    const [showForgotPassword, setShowForgotPassword] = useState(false);
    const [showResetPassword, setShowResetPassword] = useState(false);
    const [uid, setUid] = useState('');
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isResetComplete, setIsResetComplete] = useState(false);
    const navigate = useNavigate();
    const context = useContext(AdmissionContext);

    useEffect(() => {
            const fetchAdmin = async () => {
                try { 
                    const token = localStorage.getItem('studentToken');
                    const response = await fetch('http://localhost:5000/student/fetchstudent', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'token': token
                        },
                    });
    
                    if (!response.ok) {
                        throw new Error('Failed to fetch admin details.');
                    }
    
                    const data = await response.json();
                    setStudent(data);
                    localStorage.setItem('studentPresence' , 'true')
                    setLoading(false);
                } catch (err) {
                    setError(err.message);
                    setLoading(false);
                }
            };
    
            fetchAdmin();
        }, [navigate]);

    const handleLogout = () => {
        localStorage.setItem('studentPresence', 'false');
        navigate('/');
    };

    const handleForgotPasswordSubmit = () => {
        setErrorMessage('');
        const studentData = JSON.parse(localStorage.getItem('student') || '{}');
        if (uid && email) {
            if (studentData?.email === email) {
                setShowResetPassword(true);
                setShowForgotPassword(false);
                setIsResetComplete(false);
            } else {
                setErrorMessage('Invalid UID or Email.');
            }
        } else {
            setErrorMessage('Please fill out both fields.');
        }
    };

    const handlePasswordResetSubmit = () => {
        if (newPassword) {
            setIsResetComplete(true);
            setShowResetPassword(false);
        } else {
            alert('Please enter a new password.');
        }
    };

    return (
        <>
            <div className='w-full flex flex-col justify-center items-center p-5'>
                <div className="mt-4 flex flex-col bg-gray-900 rounded-xl p-4 shadow-sm w-full text-white overflow-hidden justify-center items-center">
                    <div className="flex justify-center" style={{ filter: 'drop-shadow(-1px -1px 1px #0ea5e9)' }}>
                        <img src='https://i.scdn.co/image/ab67616d0000b2736f5610a62dc5d83e4d5cef0d' className='rounded-full w-[200px] h-[200px] xl:w-[400px] xl:h-[400px] lg:w-[300px] lg:h-[300px]'></img>
                    </div>
                    <div className="mt-16 grid grid-cols-1 gap-7 xl:gap-14 sm:grid-cols-2 sm:gap-x-28 md:gap-x-[200px] lg:gap-x-[400px] xl:gap-x-[500px]">
                        <p className="text-xl font-bold xl:text-3xl xl:font-bold">Name: {student.fullName || "N/A"}</p>
                        <p className="text-xl font-bold xl:font-bold xl:text-3xl">Date of Birth: {student.dob || "N/A"}</p>
                        <p className="text-xl font-bold xl:font-bold xl:text-3xl">Gender: {student.gender || "N/A"}</p>
                        <p className="text-xl font-bold xl:font-bold xl:text-3xl">Nationality: {student.nationality || "N/A"}</p>
                        <p className="text-xl font-bold xl:font-bold xl:text-3xl">Contact: {student.contact || "N/A"}</p>
                        <p className="text-xl font-bold xl:font-bold xl:text-3xl">Email: {student.email || "N/A"}</p>
                        <p className="text-xl font-bold xl:font-bold xl:text-3xl">Address: {student.address || "N/A"}</p>
                        <p className="text-lg font-bold xl:font-bold xl:text-3xl">Parent Name: {student.parentName || "N/A"}</p>
                        <p className="text-xl font-bold xl:font-bold xl:text-3xl">Relation: {student.relation || "N/A"}</p>
                        <p className="text-xl font-bold xl:font-bold xl:text-3xl">Parent Contact: {student.parentContact || "N/A"}</p>
                        <p className="text-xl font-bold xl:font-bold xl:text-3xl">Parent Email: {student.parentEmail || "N/A"}</p>
                        <p className="text-xl font-bold xl:font-bold xl:text-3xl">Occupation: {student.occupation || "N/A"}</p>
                        <p className="text-xl font-bold xl:font-bold xl:text-3xl">School Name: {student.schoolName || "N/A"}</p>
                        <p className="text-xl font-bold xl:font-bold xl:text-3xl">College Name: {student.collegeName || "N/A"}</p>
                        <p className="text-xl font-bold xl:font-bold xl:text-3xl">School Grade: {student.schoolGrade || "N/A"}</p>
                        <p className="text-xl font-bold xl:font-bold xl:text-3xl">College Grade: {student.collegeGrade || "N/A"}</p>
                        <p className="text-xl font-bold xl:font-bold xl:text-3xl">Highest Qualification: {student.highestQualification || "N/A"}</p>
                        <p className="text-xl font-bold xl:font-bold xl:text-3xl">Course Name: {student.courseName || "N/A"}</p>
                        <p className="text-xl font-bold xl:font-bold xl:text-3xl">Year: {student.year || "N/A"}</p>
                        <p className="text-xl font-bold xl:font-bold xl:text-3xl">Fees: {student.fees || "N/A"}</p>
                    </div>

                    <div className='mt-14 flex justify-between gap-5 sm:gap-[320px] md:gap-[455px] lg:gap-[660px] xl:gap-[1000px]'>
                        <button
                            onClick={() => setShowForgotPassword(true)}
                            className='bg-blue-600 text-white rounded-md px-3 py-1 font-bold hover:bg-blue-700 w-full'
                        >
                            Change Password
                        </button>
                        <button
                            onClick={handleLogout}
                            className='bg-red-600 text-white rounded-md px-3 py-1 font-bold hover:bg-red-700 w-full'
                        >
                            Log Out
                        </button>
                    </div>

                    {/* Forgot Password Panel */}
                    {showForgotPassword && (
                        <div className="mt-4 p-4 bg-gray-800 rounded-md">
                            <h3 className="text-lg font-bold mb-2">Reset Password</h3>
                            <label className="text-sm">UID</label>
                            <input
                                type="text"
                                value={uid}
                                onChange={(e) => setUid(e.target.value)}
                                className="w-full p-2 mb-2 text-black rounded-md"
                                placeholder="Enter UID"
                            />
                            <label className="text-sm">Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full p-2 mb-2 text-black rounded-md"
                                placeholder="Enter Email"
                            />
                            <button
                                onClick={handleForgotPasswordSubmit}
                                className="bg-green-600 text-white rounded-md px-3 py-1 mt-2"
                            >
                                Submit
                            </button>
                        </div>
                    )}

                    {/* Error Message */}
                    {errorMessage && <div className="text-red-500 mt-2">{errorMessage}</div>}

                    {/* Reset Password Panel */}
                    {showResetPassword && !isResetComplete ? (
                        <div className="mt-4 p-4 bg-gray-800 rounded-md">
                            <h3 className="text-lg font-bold mb-2 text-green-400">Your Password Has Been Forwarded To Your Email</h3>
                        </div>
                    ) : null}
                </div>
            </div>
        </>
    );
};

export default HelloStudent;
