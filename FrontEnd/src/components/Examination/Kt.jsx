import React, { useState } from 'react';
import Header from '../Home/Header'
const Kt = () => {
    const [courseName, setCourseName] = useState('');
    const [ktSubjects, setKtSubjects] = useState([]);
    const [subjectInput, setSubjectInput] = useState('');
    const [paymentInitiated, setPaymentInitiated] = useState(false);
    const ktFeePerSubject = 1000; 

    const allowedCourses = ['CS', 'IT', 'ANIMATION', 'PHYSICS', 'MATHS'];

    const addSubject = () => {
        if (subjectInput.trim() !== '') {
            setKtSubjects([...ktSubjects, subjectInput.trim()]);
            setSubjectInput('');
        }
    };

    const removeSubject = (index) => {
        const updatedSubjects = ktSubjects.filter((_, i) => i !== index);
        setKtSubjects(updatedSubjects);
    };

    const totalFee = ktSubjects.length * ktFeePerSubject;

    const handleSubmit = () => {
        if (!courseName || ktSubjects.length === 0) {
            alert('Please fill out the form completely!');
            return;
        }
     
        setPaymentInitiated(true);
    };

    const handlePaymentSuccess = () => {
       
        setPaymentInitiated(false);
        alert('Payment successful! Your form has been submitted.');
    };

    return (
        <>
        <Header></Header>
          <div className="w-full p-4 bg-black min-h-screen">
            <div className="bg-gray-900 shadow-md rounded-lg p-6">
                <h2 className="text-3xl font-bold text-white mb-4 text-center">KT Form</h2>
                <p className="text-gray-400 mb-4">
                    Please fill out the form below to register for your re-examination.
                </p>

               
                <div className="mb-4">
                    <label className="block text-gray-400 mb-2">Course Name</label>
                    <select
                        value={courseName}
                        onChange={(e) => setCourseName(e.target.value)}
                        className={`w-full px-4 py-2 rounded-lg bg-gray-800 text-white border ${
                            !courseName ? 'border-red-500' : 'border-gray-700'
                        }`}
                    >
                        <option value="">Select your course</option>
                        {allowedCourses.map((course) => (
                            <option key={course} value={course}>
                                {course}
                            </option>
                        ))}
                    </select>
                    {!courseName && (
                        <p className="text-red-500 text-sm mt-2">
                            Please select a course to proceed.
                        </p>
                    )}
                </div>

                {/* KT Subjects Input */}
                <div className="mb-4">
                    <label className="block text-gray-400 mb-2">Subjects with KT</label>
                    <div className="flex space-x-2">
                        <input
                            type="text"
                            value={subjectInput}
                            onChange={(e) => setSubjectInput(e.target.value)}
                            className="flex-grow px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700"
                            placeholder="Enter a subject"
                            disabled={!courseName}
                        />
                        <button
                            onClick={addSubject}
                            className="px-4 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600"
                            disabled={!courseName}
                        >
                            Add
                        </button>
                    </div>
                </div>

                {/* List of KT Subjects */}
                {ktSubjects.length > 0 && (
                    <div className="mb-4">
                        <label className="block text-gray-400 mb-2">Added Subjects</label>
                        <ul className="list-disc pl-5 text-white">
                            {ktSubjects.map((subject, index) => (
                                <li key={index} className="flex justify-between">
                                    <span>{subject}</span>
                                    <button
                                        onClick={() => removeSubject(index)}
                                        className="text-red-500 hover:underline"
                                    >
                                        Remove
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Total Fee */}
                <div className="mb-4">
                    <label className="block text-gray-400 mb-2">Total KT Fee</label>
                    <div className="text-white font-bold text-lg">₹{totalFee}</div>
                </div>

                {/* Submit Button */}
                {!paymentInitiated ? (
                    <div>
                        <button
                            onClick={handleSubmit}
                            className="px-6 py-3 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600"
                            disabled={!courseName || ktSubjects.length === 0}
                        >
                            Submit KT Form
                        </button>
                    </div>
                ) : (
                    <div className="text-center">
                        <p className="text-gray-400 mb-4">
                            Redirecting to payment gateway...
                        </p>
                        <button
                            onClick={handlePaymentSuccess}
                            className="px-6 py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600"
                        >
                            Complete Payment
                        </button>
                    </div>
                )}
            </div>
        </div>
        </>
       
    );
};

export default Kt;
