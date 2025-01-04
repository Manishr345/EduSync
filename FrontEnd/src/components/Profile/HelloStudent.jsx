import { useEffect, useState } from 'react';
import React from 'react';
import { useNavigate } from 'react-router-dom';



//  assume admin as student we are to lazy to replace the admin by student



const HelloStudent = () => {
    const [admin, setAdmin] = useState(null);
    const [showForgotPassword, setShowForgotPassword] = useState(false);
    const [showResetPassword, setShowResetPassword] = useState(false);
    const [uid, setUid] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    // Fetch admin data from localStorage 
    useEffect(() => {
        const adminData = localStorage.getItem('admin');
        if (adminData) {
            setAdmin(JSON.parse(adminData));
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('admin');
        navigate('/');
    };

    // Handle forgot password
    const handleForgotPasswordSubmit = () => {
        if (uid && email) {
            if (admin?.email === email) {
                setShowResetPassword(true);
                setShowForgotPassword(false);
            } else {
                alert('Invalid UID or Email.');
            }
        } else {
            alert('Please fill out both fields.');
        }
    };

    
    if (!admin) {
        return <div className="text-white text-3xl font-bold">All credentials are deleted from the local storage. please insert your credentials to login </div>;
    }

    return (
        <>
            <div className='w-full h-[100vh] flex justify-center items-center p-5'>
                <div className="mt-4 flex flex-col bg-gray-900 rounded-xl p-4 shadow-sm w-[500px] text-white overflow-hidden">
                    <div className="flex justify-center" style={{ filter: 'drop-shadow(-5px -5px 4px #0ea5e9)' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="120px" viewBox="0 -960 960 960" width="120px" fill="#ffff">
                            <path d="M480-440q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0-80q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0 440q-139-35-229.5-159.5T160-516v-244l320-120 320 120v244q0 152-90.5 276.5T480-80Zm0-400Zm0-315-240 90v189q0 54 15 105t41 96q42-21 88-33t96-12q50 0 96 12t88 33q26-45 41-96t15-105v-189l-240-90Zm0 515q-36 0-70 8t-65 22q29 30 63 52t72 34q38-12 72-34t63-52q-31-14-65-22t-70-8Z" />
                        </svg>
                    </div>
                    <div className="mt-4">
                        <p className="text-lg font-bold">Name: {admin.name}</p>
                        <p className="mt-2">Email: {admin.email}</p>

                        <div className="mt-2 flex items-center w-full justify-between">
                            <p className="mr-2">Password: {'•'.repeat(admin.password.length)}</p>
                            
                        </div>
                    </div>

                    <div className='mt-4 flex justify-between'>
                        <button
                            onClick={() => setShowForgotPassword(true)}
                            className='bg-blue-600 text-white rounded-md px-3 py-1 font-bold hover:bg-blue-700'
                        >
                            Change Password
                        </button>
                        <button
                            onClick={handleLogout}
                            className='bg-red-600 text-white rounded-md px-3 py-1 font-bold hover:bg-red-700'
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
