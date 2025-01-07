import React, { useEffect, useState } from 'react';
import Header from '../Home/Header';

export default function StudentsLog() {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true); // Loading state

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await fetch('http://localhost:5000/admin/fetchstudents', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                const json = await response.json();
                setStudents(json);
            } catch (error) {
                console.error('Error fetching students:', error);
            } finally {
                setLoading(false); // Stop loading when data is fetched
            }
        };
        fetchStudents();
    }, []);

    return (
        <>
            <Header />
            <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-10">
                {loading ? (
                    <div className="flex justify-center items-center h-screen">
                        <p className="text-xl font-semibold">Loading students data...</p>
                    </div>
                ) : (
                    students.map((student) => (
                        <div
                            key={student.id} // Assuming each student has a unique ID
                            className="w-full max-w-4xl bg-gray-800 rounded-lg shadow-lg p-6 mb-10"
                        >
                            <div className="flex justify-center mb-10">
                                <img
                                    src={`data:image/png;base64,${student?.passportSizePhoto || ''}`}
                                    alt="Student"
                                    className="w-40 h-40 rounded-full object-cover border-4 border-blue-500"
                                />
                            </div>
                            <div className="flex justify-center">
                                <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6 w-full max-w-2xl">
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
                        </div>
                    ))
                )}
            </div>
        </>
    );
}
