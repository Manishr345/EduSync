import React, { useEffect, useState, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import AdmissionContext from '../../contexts/admission/AdmissionContext';
import Header from '../Home/Header';
import jsPDF from 'jspdf';

const HelloStudent = () => {
    const downloadReceipt = () => {

        // Create a new PDF document
        const doc = new jsPDF();

        // Add receipt details to the PDF
        doc.setFontSize(18);
        doc.text('Fee Receipt', 105, 20, { align: 'center' });

        doc.setFontSize(12);
        doc.text(`Name: ${student.fullName}`, 20, 40);
        doc.text(`Email: ${student.email}`, 20, 50);
        doc.text(`Course: ${student.courseName}`, 20, 60);
        doc.text(`Year: ${student.year}`, 20, 70);
        doc.text(`Amount: ${student.fees}`, 20, 80);
        doc.text('College: HOGWARTS INSTITUTE', 20, 90);

        doc.setFontSize(10);
        doc.text('Thank you for your payment!', 105, 110, { align: 'center' });

        // Save the PDF
        doc.save('Fee_Receipt.pdf');
    }
        const navigate = useNavigate();
        const location = useLocation();
        const context = useContext(AdmissionContext);

        const [student, setStudent] = useState(null);
        const [uid, setUid] = useState('');
        const [email, setEmail] = useState('');
        const [errorMessage, setErrorMessage] = useState('');
        const [showForgotPassword, setShowForgotPassword] = useState(false);
        const [showResetPassword, setShowResetPassword] = useState(false);
        const [isResetComplete, setIsResetComplete] = useState(false);

        useEffect(() => {
            const fetchStudentData = async () => {
                const token = localStorage.getItem('studentToken');
                if (!token) {
                    navigate('/');
                    return;
                }

                try {
                    const response = await fetch('http://localhost:5000/student/fetchstudent', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            token,
                        },
                    });

                    if (!response.ok) {
                        throw new Error('Failed to fetch student details.');
                    }

                    const data = await response.json();
                    setStudent(data);
                    localStorage.setItem('studentPresence', 'true');
                } catch (error) {
                    console.error('Error fetching student data:', error);
                    navigate('/');
                }
            };

            fetchStudentData();
        }, [navigate]);

        const handleLogout = () => {
            localStorage.removeItem('studentPresence');
            localStorage.removeItem('studentToken');
            navigate('/');
        };

        const handleForgotPasswordSubmit = () => {
            setErrorMessage('');
            if (uid && email && student?.email === email) {
                setShowResetPassword(true);
                setShowForgotPassword(false);
            } else {
                setErrorMessage('Invalid UID or Email.');
            }
        };

        return (
            <>
                <Header />
                <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-10">
                    <div className="w-full max-w-4xl bg-gray-800 rounded-lg shadow-lg p-6">
                        <h1 className="text-3xl font-bold text-center mb-6">Welcome, {student?.fullName || 'Student'}</h1>
                        <div className="flex justify-center mb-10">
                            <img
                                src={`data:image/png;base64,${student?.passportSizePhoto || ''}`}
                                alt="Student"
                                className="w-40 h-40 rounded-full object-cover border-4 border-blue-500"
                            />
                        </div>
                        <div className="flex justify-center">
                            <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6 mb-10 w-full max-w-2xl">
                                {[
                                    ['Name', student?.fullName],
                                    ['Date of Birth', student?.dob],
                                    ['Gender', student?.gender],
                                    ['Nationality', student?.nationality],
                                    ['Contact', student?.contact],
                                    ['Email', student?.email],
                                    ['Address', student?.address],
                                    ['Parent Name', student?.parentName],
                                    ['Relation', student?.relation],
                                    ['Parent Contact', student?.parentContact],
                                    ['School Name', student?.schoolName],
                                    ['College Name', student?.collegeName],
                                    ['School Grade', student?.schoolGrade],
                                    ['College Grade', student?.collegeGrade],
                                    ['Course Name', student?.courseName],
                                    ['Year', student?.year],
                                    ['Fees', student?.fees],
                                ].map(([label, value]) => (
                                    <p key={label} className="text-lg font-medium">
                                        <span className="text-gray-400">{label}:</span> {value || 'N/A'}
                                    </p>
                                ))}
                            </div>
                        </div>

                        <div className="flex justify-between">
                            <button
                                onClick={() => setShowForgotPassword(true)}
                                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold"
                            >
                                Change Password
                            </button>
                            <button
                                onClick={downloadReceipt}
                                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold"
                            >
                                Download Fee Receipt
                            </button>
                            <button
                                onClick={handleLogout}
                                className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg text-white font-semibold"
                            >
                                Log Out
                            </button>
                        </div>
                    </div>

                    {showForgotPassword && (
                        <div className="mt-8 w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg">
                            <h3 className="text-lg font-bold mb-4">Reset Password</h3>
                            <label className="block mb-2">UID</label>
                            <input
                                type="text"
                                value={uid}
                                onChange={(e) => setUid(e.target.value)}
                                className="w-full p-2 mb-4 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring focus:ring-blue-500"
                            />
                            <label className="block mb-2">Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full p-2 mb-4 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring focus:ring-blue-500"
                            />
                            {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
                            <button
                                onClick={handleForgotPasswordSubmit}
                                className="w-full py-2 bg-green-600 hover:bg-green-700 rounded-lg text-white font-semibold"
                            >
                                Submit
                            </button>
                        </div>
                    )}

                    {showResetPassword && !isResetComplete && (
                        <div className="mt-8 w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg">
                            <h3 className="text-lg font-bold text-green-500">Password reset instructions sent to your email.</h3>
                        </div>
                    )}
                </div>
            </>
        );
    };

    export default HelloStudent;
