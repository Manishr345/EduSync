// dont delete this comment it is a backup
// import { useEffect, useState } from 'react';
// import React from 'react';
// import { useNavigate } from 'react-router-dom';


// const HelloStudent = () => {
//     const [student, setstudent] = useState(null);
//     const [showForgotPassword, setShowForgotPassword] = useState(false);
//     const [showResetPassword, setShowResetPassword] = useState(false);
//     const [uid, setUid] = useState('');
//     const [email, setEmail] = useState('');
//     const navigate = useNavigate();

//     // Fetch student data from localStorage 
//     useEffect(() => {
//         const studentData = localStorage.getItem('student');
//         if (studentData) {
//             setstudent(JSON.parse(studentData));
//         }
//     }, []);

//     const handleLogout = () => {
//         localStorage.removeItem('student');
//         navigate('/');
//     };

//     // Handle forgot password
//     const handleForgotPasswordSubmit = () => {
//         if (uid && email) {
//             if (student?.email === email) {
//                 setShowResetPassword(true);
//                 setShowForgotPassword(false);
//             } else {
//                 alert('Invalid UID or Email.');
//             }
//         } else {
//             alert('Please fill out both fields.');
//         }
//     };


//     if (!student) {
//         return <div className="text-white text-3xl font-bold">All credentials are deleted from the local storage. please insert your credentials to login </div>;
//     }

//     return (
//         <>
//             <div className='w-full flex flex-col justify-center items-center p-5 gap-20'>
//                 <div className="mt-4 flex flex-col bg-gray-900 rounded-xl p-4 shadow-sm w-[500px] text-white overflow-hidden">
//                     <div className="flex justify-center" style={{ filter: 'drop-shadow(-5px -5px 4px #0ea5e9)' }}>
//                         <svg xmlns="http://www.w3.org/2000/svg" height="120px" viewBox="0 -960 960 960" width="120px" fill="#ffff">
//                             <path d="M480-440q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0-80q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0 440q-139-35-229.5-159.5T160-516v-244l320-120 320 120v244q0 152-90.5 276.5T480-80Zm0-400Zm0-315-240 90v189q0 54 15 105t41 96q42-21 88-33t96-12q50 0 96 12t88 33q26-45 41-96t15-105v-189l-240-90Zm0 515q-36 0-70 8t-65 22q29 30 63 52t72 34q38-12 72-34t63-52q-31-14-65-22t-70-8Z" />
//                         </svg>
//                     </div>
//                     <div className="mt-4">
//                         <p className="text-lg font-bold">Name: {student.name}</p>
//                         <p className="mt-2">Email: {student.email}</p>

//                         <div className="mt-2 flex items-center w-full justify-between">
//                             <p className="mr-2">Password: {'•'.repeat(student.password.length)}</p>

//                         </div>
//                     </div>

//                     <div className='mt-4 flex justify-between'>
//                         <button
//                             onClick={() => setShowForgotPassword(true)}
//                             className='bg-blue-600 text-white rounded-md px-3 py-1 font-bold hover:bg-blue-700'
//                         >
//                             Change Password
//                         </button>
//                         <button
//                             onClick={handleLogout}
//                             className='bg-red-600 text-white rounded-md px-3 py-1 font-bold hover:bg-red-700'
//                         >
//                             Log Out
//                         </button>
//                     </div>

//                     {/* Forgot Password Panel */}
//                     {showForgotPassword && (
//                         <div className="mt-4 p-4 bg-gray-800 rounded-md">
//                             <h3 className="text-lg font-bold mb-2">Reset Password</h3>
//                             <label className="text-sm">UID</label>
//                             <input
//                                 type="text"
//                                 value={uid}
//                                 onChange={(e) => setUid(e.target.value)}
//                                 className="w-full p-2 mb-2 text-black rounded-md"
//                                 placeholder="Enter UID"
//                             />
//                             <label className="text-sm">Email</label>
//                             <input
//                                 type="email"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                                 className="w-full p-2 mb-2 text-black rounded-md"
//                                 placeholder="Enter Email"
//                             />
//                             <button
//                                 onClick={handleForgotPasswordSubmit}
//                                 className="bg-green-600 text-white rounded-md px-3 py-1 mt-2"
//                             >
//                                 Submit
//                             </button>
//                         </div>
//                     )}

//                     {/* Reset Password Panel */}
//                     {showResetPassword && (
//                         <div className="mt-4 p-4 bg-gray-800 rounded-md">
//                             <h3 className="text-lg font-bold mb-2 text-green-400">Your Password Has Been Forwarded To Your Email</h3>
//                         </div>
//                     )}
//                 </div>


//                 <div className="mt-4 flex  flex-col bg-gray-500 rounded-lg p-4 shadow-sm w-auto">
//                     <div className="flex justify-center items-center gap-2 mb-6">
//                         <h2 className="text-2xl font-bold text-white"><i className="fa-solid fa-graduation-cap"></i>&nbsp;Personal Details</h2>
//                     </div>

//                     <div class='flex flex-col gap-7'>
//                         <div className='flex gap-3'>
//                             <label className="text-white" for="contact">Contact: </label>
//                             <label className="bg-gray-800 rounded-md border-gray-700 text-white px-2 w-full" for="contact">Contact</label>
//                         </div>
//                         <div className='flex gap-3'>
//                             <label className="text-white" for="email">Email:</label>
//                             <label className="bg-gray-800 rounded-md border-gray-700 text-white px-2 w-full" for="contact">Email</label>
//                         </div>
//                     </div>

//                     <div className="mt-7 flex flex-col gap-7">
//                         <div className='flex gap-3'>
//                             <label className="text-white" for="relation">Relation:</label>
//                             <label className="bg-gray-800 rounded-md border-gray-700 text-white px-2 w-full" for="contact">Relation</label>

//                         </div>
//                         <div className='flex gap-3'>
//                             <label className="text-white" for="parentcontact">Parent Contact:</label>
//                             <label className="bg-gray-800 rounded-md border-gray-700 text-white px-2 w-max" for="contact">Contact</label>
//                         </div>
//                     </div>

//                     <div className="mt-7 flex flex-col gap-7">
//                         <div className="flex gap-3" >
//                             <label className="text-white" for="parentemail">Parent Email:</label>
//                             <label className="bg-gray-800 rounded-md border-gray-700 text-white px-2 w-max" for="contact">Parent Email</label>
//                         </div>
//                         <div className="flex gap-3" >
//                             <label className="text-white" for="occupation">Occupation</label>
//                             <label className="bg-gray-800 rounded-md border-gray-700 text-white px-2 w-full" for="contact">Occupation</label>
//                         </div>
//                     </div>

//                 </div>

//             </div>

//         </>
//     );
// };

// export default HelloStudent;

import { useEffect, useState } from 'react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const HelloStudent = () => {
    const [student, setstudent] = useState(null);
    const [showForgotPassword, setShowForgotPassword] = useState(false);
    const [showResetPassword, setShowResetPassword] = useState(false);
    const [uid, setUid] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    // Fetch student data from localStorage 
    useEffect(() => {
        const studentData = localStorage.getItem('student');
        if (studentData) {
            setstudent(JSON.parse(studentData));
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('student');
        navigate('/');
    };

    // Handle forgot password
    const handleForgotPasswordSubmit = () => {
        if (uid && email) {
            if (student?.email === email) {
                setShowResetPassword(true);
                setShowForgotPassword(false);
            } else {
                alert('Invalid UID or Email.');
            }
        } else {
            alert('Please fill out both fields.');
        }
    };

    if (!student) {
        return <div className="text-white text-3xl font-bold">All credentials are deleted from the local storage. Please insert your credentials to login.</div>;
    }

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

                    {/* Reset Password Panel */}
                    {showResetPassword && (
                        <div className="mt-4 p-4 bg-gray-800 rounded-md">
                            <h3 className="text-lg font-bold mb-2 text-green-400">Your Password Has Been Forwarded To Your Email</h3>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default HelloStudent;


