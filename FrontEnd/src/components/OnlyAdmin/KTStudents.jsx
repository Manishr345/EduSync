import React, { useEffect, useState } from 'react';
import Header from '../Home/Header';

const API_URL = import.meta.env.VITE_API_URL;

export default function KTStudents() {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await fetch(`${API_URL}/admin/fetchstudents`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                const json = await response.json();
                
                console.log('Fetched Students:', json);
                
                if (Array.isArray(json)) {
                    setStudents(json);
                } else {
                    console.error('Invalid data format');
                }
            } catch (error) {
                console.error('Error fetching students:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchStudents();
    }, []);

    // Filter students with KT subjects (non-empty)
    const studentsWithKT = students.filter(student => Array.isArray(student.ktSubjects) && student.ktSubjects.length > 0);

    // Debug: Log the students with KT subjects
    console.log('Students with KT subjects:', studentsWithKT);

    const categories = ['BSC IT', 'BSC CS', 'BSC Animation', 'BSC Physics', 'BSC Maths'];
    const categorizedStudents = categories.reduce((acc, course) => {
        acc[course] = studentsWithKT.filter(student => student.courseName === course);
        return acc;
    }, {});

    return (
        <>
            <Header />
            <div className="min-h-screen bg-black text-white flex flex-col items-center py-10">
                {loading ? (
                    <div className="flex justify-center items-center h-screen">
                        <p className="text-xl font-semibold">Loading students data...</p>
                    </div>
                ) : (
                    <>
                        {categories.map((course) => (
                            <div key={course} className="w-full max-w-4xl bg-gray-900 rounded-lg shadow-lg p-6 mb-10">
                                <h2 className="text-2xl font-semibold text-center mb-6">{course} Students</h2>
                                {categorizedStudents[course]?.length > 0 ? (
                                    categorizedStudents[course].map((student) => (
                                        <div key={student.id} className="mb-6 p-4 border-b border-gray-700">
                                            <div className="flex justify-center mb-6">
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
                                                        ['Gender', student?.gender],
                                                        ['Contact', student?.contact],
                                                        ['Email', student?.email],
                                                        ['Course Name', student?.courseName],
                                                        ['Year', student?.year],
                                                        ['KT Subjects', student.ktSubjects.join(', ')],
                                                    ].map(([label, value]) => (
                                                        <p key={label} className="text-lg font-medium">
                                                            <span className="text-gray-400">{label}:</span> {value || 'N/A'}
                                                        </p>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="text-center">
                                        <p className="text-2xl font-semibold">No Students with KT subjects</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </>
                )}
            </div>
        </>
    );
}
