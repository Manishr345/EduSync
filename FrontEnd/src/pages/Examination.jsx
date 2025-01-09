import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import Header from '../components/Home/Header';

const Examination = () => {
    const exams = [
        { subject: 'Mathematics', date: '2025-02-15', time: '10:00 AM' },
        { subject: 'Physics', date: '2025-02-18', time: '10:00 AM' },
        { subject: 'Chemistry', date: '2025-02-20', time: '10:00 AM' },
        { subject: 'Computer Science', date: '2025-02-22', time: '10:00 AM' },
        { subject: 'English', date: '2025-02-25', time: '10:00 AM' },
    ];

    const ktExams = [
        { subject: 'Mathematics', date: '2025-03-05', time: '2:00 PM' },
        { subject: 'Physics', date: '2025-03-08', time: '2:00 PM' },
    ];

    const navigate = useNavigate(); // Hook for navigation

    const handleKtFormClick = () => {
        navigate('/kt-form'); // Navigate to KT Form route
    };

    return (
        <>
            <Header />
            <div className="w-full p-4 bg-black min-h-screen">
                <div className="bg-gray-900 shadow-md rounded-lg p-6">
                    <h2 className="text-2xl font-bold text-white mb-4">Examination Schedule</h2>
                    <table className="min-w-full table-auto">
                        <thead>
                            <tr className="bg-gray-800">
                                <th className="py-2 px-4 text-left text-gray-400">Subject</th>
                                <th className="py-2 px-4 text-left text-gray-400">Date</th>
                                <th className="py-2 px-4 text-left text-gray-400">Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {exams.map((exam, index) => (
                                <tr key={index} className="border-b border-gray-700">
                                    <td className="py-2 px-4 text-white">{exam.subject}</td>
                                    <td className="py-2 px-4 text-white">{exam.date}</td>
                                    <td className="py-2 px-4 text-white">{exam.time}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="mt-8 bg-gray-900 shadow-md rounded-lg p-6">
                    <h2 className="text-2xl font-bold text-white mb-4">KT Students Re-Examination</h2>
                    <p className="text-gray-400 mb-4">
                        Students who have KT (failed subjects) need to appear for re-examination on the following dates:
                    </p>
                    <table className="min-w-full table-auto">
                        <thead>
                            <tr className="bg-gray-800">
                                <th className="py-2 px-4 text-left text-gray-400">Subject</th>
                                <th className="py-2 px-4 text-left text-gray-400">Re-Exam Date</th>
                                <th className="py-2 px-4 text-left text-gray-400">Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ktExams.map((exam, index) => (
                                <tr key={index} className="border-b border-gray-700">
                                    <td className="py-2 px-4 text-white">{exam.subject}</td>
                                    <td className="py-2 px-4 text-white">{exam.date}</td>
                                    <td className="py-2 px-4 text-white">{exam.time}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="mt-8 bg-gray-900 shadow-md rounded-lg p-6">
                    <h2 className="text-2xl font-bold text-white mb-4">KT Form Submission</h2>
                    <p className="text-gray-400 mb-4">
                        If you have KT and need to register for the re-examination, click the button below to fill out the KT form.
                    </p>
                    <button
                        onClick={handleKtFormClick}
                        className="px-6 py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600"
                    >
                        Go to KT Form
                    </button>
                </div>
            </div>
        </>
    );
};

export default Examination;
