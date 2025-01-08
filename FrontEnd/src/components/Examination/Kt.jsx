import React, { useState } from 'react';

const Kt = () => {
    const [courseName, setCourseName] = useState('');
    const [ktSubjects, setKtSubjects] = useState([]);
    const [subjectInput, setSubjectInput] = useState('');
    const [paymentInitiated, setPaymentInitiated] = useState(false);
    const ktFeePerSubject = 1000; // Fee for each subject

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
            alert("Please fill out the form completely!");
            return;
        }
        // Trigger the payment gateway
        setPaymentInitiated(true);
    };

    const handlePaymentSuccess = () => {
        // Simulate payment success
        setPaymentInitiated(false);
        alert("Payment successful! Your form has been submitted.");
    };

    return (
        <div className="w-full p-4 bg-black min-h-screen">
            <div className="bg-gray-900 shadow-md rounded-lg p-6">
                <h2 className="text-2xl font-bold text-white mb-4">KT Form</h2>
                <p className="text-gray-400 mb-4">
                    Please fill out the form below to register for your re-examination.
                </p>

                {/* Course Name Input */}
                <div className="mb-4">
                    <label className="block text-gray-400 mb-2">Course Name</label>
                    <input
                        type="text"
                        value={courseName}
                        onChange={(e) => setCourseName(e.target.value)}
                        className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700"
                        placeholder="Enter your course name"
                    />
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
                        />
                        <button
                            onClick={addSubject}
                            className="px-4 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600"
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
<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#EA3323"><path d="M312-144q-29.7 0-50.85-21.15Q240-186.3 240-216v-480h-48v-72h192v-48h192v48h192v72h-48v479.57Q720-186 698.85-165T648-144H312Zm336-552H312v480h336v-480ZM384-288h72v-336h-72v336Zm120 0h72v-336h-72v336ZM312-696v480-480Z"/></svg>                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Total Fee */}
                <div className="mb-4">
                    <label className="block text-gray-400 mb-2">Total KT Fee</label>
                    <div className="text-white font-bold text-lg">
                        ₹{totalFee}
                    </div>
                </div>

                {/* Submit Button */}
                {!paymentInitiated ? (
                    <div>
                        <button
                            onClick={handleSubmit}
                            className="px-6 py-3 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600"
                        >
                            Submit KT Form
                        </button>
                    </div>
                ) : (
                    <div className="text-center">
                        <p className="text-gray-400 mb-4">
                            Redirecting to payment gateway...
                        </p>
                        {/* Simulated Payment Button */}
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
    );
};

export default Kt;
