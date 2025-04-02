import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AdmissionContext from '../../contexts/admission/AdmissionContext';
import Header from '../Home/Header';
import jsPDF from 'jspdf';

const API_URL = import.meta.env.VITE_API_URL;

const HelloStudent = () => {

    const handleattendance = () => {
        navigate('/attendance');
    };

    const navigate = useNavigate();
    const context = useContext(AdmissionContext);

    const [student, setStudent] = useState(null);
    const [modeOfTransport, setModeOfTransport] = useState('');
    const [source, setSource] = useState('');
    const [destination, setDestination] = useState('');
    const [tenure, setTenure] = useState('');
    const [railwayClass, setRailwayClass] = useState('');
    const [concessionAmount, setConcessionAmount] = useState(0);
    const [showConcessionForm, setShowConcessionForm] = useState(false);

    useEffect(() => {
        const fetchStudentData = async () => {
            const token = sessionStorage.getItem('studentToken');
            if (!token) {
                navigate('/');
                return;
            }

            try {
                const response = await fetch(`${API_URL}/student/fetchstudent`, {
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
                sessionStorage.setItem('studentPresence', 'true');
            } catch (error) {
                console.error('Error fetching student data:', error);
                navigate('/');
            }
        };

        fetchStudentData();
    }, [navigate]);

    const handleLogout = () => {
        sessionStorage.removeItem('studentPresence');
        sessionStorage.removeItem('studentToken');
        navigate('/');
    };

    const calculateConcession = () => {
        let amount = 0;

        if (modeOfTransport === 'Railway') {
            if (railwayClass === 'First Class') {
                amount = 100;
            } else if (railwayClass === 'Second Class') {
                amount = 50;
            }
        }

        if (modeOfTransport === 'Bus') {
            amount = 20;
        }

        if (tenure === '3 Months') {
            amount += 10;
        } else if (tenure === '6 Months') {
            amount += 20;
        }

        setConcessionAmount(amount);
    };

    useEffect(() => {
        calculateConcession();
    }, [modeOfTransport, source, destination, tenure, railwayClass]);
    const downloadConcessionForm = () => {
        const doc = new jsPDF();
        const collegeLogo = '/Hogwarts logo.png';
        const collegeName = "HOGWARTS INSTITUTE";
        const collegeAddress = "123 Wizarding Way, Magical Town, Fantasyland";


        try {
            doc.addImage(collegeLogo, 'PNG', 10, 10, 30, 30);
        } catch (error) {
            console.error('Error adding college logo:', error);
        }

        doc.setFontSize(16);
        doc.text(collegeName, 105, 15, { align: 'center' });
        doc.setFontSize(12);
        doc.text(collegeAddress, 105, 25, { align: 'center' });

        doc.setFontSize(16);
        doc.text('Concession Form', 105, 40, { align: 'center' });

        doc.setFontSize(12);

        const fields = [
            ['Name', student?.fullName],
            ['Course Name', student?.courseName],
            ['Mode of Transport', modeOfTransport],
            ['Concession Amount', concessionAmount],
            ['Tenure', tenure],
        ];

        let yOffset = 50;
        fields.forEach(([label, value]) => {
            doc.text(`${label}: ${value || 'N/A'}`, 20, yOffset);
            yOffset += 10;
            if (yOffset > 280) {
                doc.addPage();
                yOffset = 20;
            }
        });

        doc.save('Concession_Form.pdf');
    };

    const downloadFeeReceipt = () => {
        const doc = new jsPDF();
        const collegeLogo = '/Hogwarts logo.png';
        const collegeName = "HOGWARTS INSTITUTE";
        const collegeAddress = "123 Wizarding Way, Magical Town, Fantasyland";


        try {
            doc.addImage(collegeLogo, 'PNG', 10, 10, 30, 30);
        } catch (error) {
            console.error('Error adding college logo:', error);
        }


        doc.setFontSize(16);
        doc.text(collegeName, 105, 15, { align: 'center' });
        doc.setFontSize(12);
        doc.text(collegeAddress, 105, 25, { align: 'center' });
        doc.setFontSize(18);
        doc.text('Fee Receipt', 105, 40, { align: 'center' });

        doc.setFontSize(12);
        doc.text(`Name: ${student.fullName}`, 20, 50);
        doc.text(`Email: ${student.email}`, 20, 60);
        doc.text(`Course: ${student.courseName}`, 20, 70);
        doc.text(`Year: ${student.year}`, 20, 80);
        doc.text(`Amount: ${student.fees}`, 20, 90);
        doc.text('College: HOGWARTS INSTITUTE', 20, 100);

        doc.setFontSize(10);
        doc.text('Thank you for your payment!', 105, 120, { align: 'center' });

        doc.save('Fee_Receipt.pdf');
    };


    const downloadAdmissionForm = () => {
        const doc = new jsPDF();
        const collegeLogo = '/Hogwarts logo.png';
        const collegeName = "HOGWARTS INSTITUTE";
        const collegeAddress = "123 Wizarding Way, Magical Town, Fantasyland";
        if (!student) {
            alert('Student data is not available.');
            return;
        }
        try {
            doc.addImage(collegeLogo, 'PNG', 10, 10, 30, 30);
        } catch (error) {
            console.error('Error adding college logo:', error);
        }
        doc.setFontSize(16);
        doc.text(collegeName, 105, 20, { align: 'center' });
        doc.setFontSize(12);
        doc.text(collegeAddress, 105, 30, { align: 'center' });

        try {
            const applicantPhoto = `data:image/png;base64,${student.passportSizePhoto || ''}`;
            doc.addImage(applicantPhoto, 'PNG', 160, 10, 30, 30);
        } catch (error) {
            console.error('Error adding applicant photo:', error);
        }

        let yOffset = 50;
        const fields = [
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
            ['Parent Signature', '________________'],
            ['Student Signature', '________________'],
        ];

        fields.forEach(([label, value]) => {
            doc.text(`${label}: ${value || 'N/A'}`, 20, yOffset);
            yOffset += 10;
            if (yOffset > 280) {
                doc.addPage();
                yOffset = 20;
            }
        });

        doc.save('Admission_Form.pdf');
    };

    return (
        <>
            <Header />
            <div className="min-h-screen bg-black text-white flex flex-col items-center py-10">
                <div className="w-full max-w-4xl bg-gray-900 rounded-lg shadow-lg p-6">
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
                                ...(student?.ktSubjects?.length > 0 ? [['KT Subjects', student.ktSubjects.join(', ')]] : []),
                            ].map(([label, value]) => (
                                <p key={label} className="text-lg font-medium">
                                    <span className="text-gray-400">{label}:</span> {value || 'N/A'}
                                </p>
                            ))}
                        </div>
                    </div>


                    <div className="flex flex-wrap justify-between">
                        <button
                            onClick={() => setShowConcessionForm(!showConcessionForm)}
                            className="px-4 m-2 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold"
                        >
                            {showConcessionForm ? 'Close Concession Form' : 'Fill Concession Form'}
                        </button>
                        <button
                            onClick={downloadFeeReceipt}
                            className="px-4 m-2 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold"
                        >
                            Download Fee Receipt
                        </button>
                        <button
                            onClick={downloadAdmissionForm}
                            className="px-4 m-2 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold"
                        >
                            Download Admission Form
                        </button>
                        <button
                            onClick={handleLogout}
                            className="px-4 m-2 py-2 bg-red-600 hover:bg-red-700 rounded-lg text-white font-semibold"
                        >
                            Log Out
                        </button>
                    </div>

                    <div className='mt-5'>
                        <button className='bg-green-500 py-3 rounded-md px-5' onClick={handleattendance}>
                            subject attendance and docs upload
                        </button>
                    </div>

                    {showConcessionForm && (
                        <div className="mt-6 p-6 bg-gray-800 rounded-lg">
                            <h2 className="text-xl font-semibold mb-4">Concession Form</h2>
                            <div className="mb-4">
                                <label className="block text-gray-400">Mode of Transport</label>
                                <select
                                    value={modeOfTransport}
                                    onChange={(e) => setModeOfTransport(e.target.value)}
                                    className="w-full p-2 bg-gray-700 text-white rounded"
                                >
                                    <option value="">Select Mode</option>
                                    <option value="Railway">Railway</option>
                                    <option value="Bus">Bus</option>
                                </select>
                            </div>

                            {modeOfTransport === 'Railway' && (
                                <>
                                    <div className="mb-4">
                                        <label className="block text-gray-400">Source Station</label>
                                        <input
                                            type="text"
                                            value={source}
                                            onChange={(e) => setSource(e.target.value)}
                                            className="w-full p-2 bg-gray-700 text-white rounded"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-400">Destination Station</label>
                                        <input
                                            type="text"
                                            value={destination}
                                            onChange={(e) => setDestination(e.target.value)}
                                            className="w-full p-2 bg-gray-700 text-white rounded"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-400">Class</label>
                                        <select
                                            value={railwayClass}
                                            onChange={(e) => setRailwayClass(e.target.value)}
                                            className="w-full p-2 bg-gray-700 text-white rounded"
                                        >
                                            <option value="">Select Class</option>
                                            <option value="First Class">First Class</option>
                                            <option value="Second Class">Second Class</option>
                                        </select>
                                    </div>
                                </>
                            )}

                            {modeOfTransport === 'Bus' && (
                                <>
                                    <div className="mb-4">
                                        <label className="block text-gray-400">Source Location</label>
                                        <input
                                            type="text"
                                            value={source}
                                            onChange={(e) => setSource(e.target.value)}
                                            className="w-full p-2 bg-gray-700 text-white rounded"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-400">Destination Location</label>
                                        <input
                                            type="text"
                                            value={destination}
                                            onChange={(e) => setDestination(e.target.value)}
                                            className="w-full p-2 bg-gray-700 text-white rounded"
                                        />
                                    </div>
                                </>
                            )}

                            <div className="mb-4">
                                <label className="block text-gray-400">Tenure</label>
                                <select
                                    value={tenure}
                                    onChange={(e) => setTenure(e.target.value)}
                                    className="w-full p-2 bg-gray-700 text-white rounded"
                                >
                                    <option value="">Select Tenure</option>
                                    <option value="3 Months">3 Months</option>
                                    <option value="6 Months">6 Months</option>
                                </select>
                            </div>

                            <div className="mb-4">
                                <p className="text-lg font-medium">
                                    <span className="text-gray-400">Concession Amount:</span> {concessionAmount} INR
                                </p>
                            </div>

                            <button
                                onClick={downloadConcessionForm}
                                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold"
                            >
                                Submit Concession Form
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default HelloStudent;
