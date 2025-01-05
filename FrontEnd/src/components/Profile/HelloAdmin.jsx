import { useEffect, useState } from 'react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const HelloAdmin = () => {
    const [admin, setAdmin] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showForgotPassword, setShowForgotPassword] = useState(false);
    const [showResetPassword, setShowResetPassword] = useState(false);
    const [uid, setUid] = useState('');
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const navigate = useNavigate();

    // Fetch admin details from the backend
    useEffect(() => {
        const fetchAdmin = async () => {
            try {
                const token = localStorage.getItem('adminToken');
                if (!token) {
                    navigate('/');
                    return;
                }

                const response = await fetch('http://localhost:5000/admin/fetchadmin', {
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
                setAdmin(data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchAdmin();
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('adminToken');
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

    // Handle password reset
    const handlePasswordResetSubmit = () => {
        if (newPassword) {
            // Update backend with the new password and UID
            const updatedAdminData = {
                ...admin,
                password: newPassword,  // Replace with new password
                uid: uid,  // Store UID with the updated data
            };

            // Assuming you have an endpoint to update the password on the backend
            fetch('http://localhost:5000/admin/reset-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('adminToken')}`,
                },
                body: JSON.stringify(updatedAdminData),
            })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to reset password.');
                }
                setAdmin(updatedAdminData); // Update state with new credentials
                alert('Password has been successfully updated.');
                setShowResetPassword(false);  // Hide the reset password panel
            })
            .catch((error) => {
                alert(error.message);
            });
        } else {
            alert('Please enter a new password.');
        }
    };

    // Toggle password visibility
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    if (loading) {
        return <div className="text-white text-3xl font-bold">Loading...</div>;
    }

    if (error) {
        return <div className="text-red-500 text-lg font-bold">{error}</div>;
    }

    if (!admin) {
        return <div className="text-white text-3xl font-bold">No Admin Data Available</div>;
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
                            <p className="mr-2">Password: {passwordVisible ? admin.password : '•'.repeat(admin.password.length)}</p>
                            <button
                                onClick={togglePasswordVisibility}
                                className="text-gray-500 hover:text-gray-300"
                            >
                                {passwordVisible ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#fff">
                                        <path d="M0 0h24v24H0z" fill="none" />
                                        <path d="M12 4.5c-7 0-10 6-10 6s3 6 10 6 10-6 10-6-3-6-10-6zm0 10c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm0-6.5c-1.4 0-2.5 1.1-2.5 2.5S10.6 13 12 13s2.5-1.1 2.5-2.5S13.4 8 12 8z" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#fff">
                                        <path d="M0 0h24v24H0z" fill="none" />
                                        <path d="M12 6.5c-5.33 0-8 4.5-8 4.5s2.67 4.5 8 4.5 8-4.5 8-4.5-2.67-4.5-8-4.5zm0 7c-1.38 0-2.5-1.12-2.5-2.5S10.62 8.5 12 8.5s2.5 1.12 2.5 2.5S13.38 13.5 12 13.5zm-7-2.88c-.15.13-.28.27-.41.42 1.45 1.34 3.49 2.88 7.41 2.88 3.93 0 5.97-1.54 7.41-2.88-.13-.15-.26-.29-.41-.42-1.35 1.21-3.32 2.38-7 2.38-3.68 0-5.65-1.17-7-2.38z" />
                                    </svg>
                                )}
                            </button>
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
                            <h3 className="text-lg font-bold mb-2">Set New Password</h3>
                            <label className="text-sm">New Password</label>
                            <input
                                type="password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                className="w-full p-2 mb-2 text-black rounded-md"
                                placeholder="Enter New Password"
                            />
                            <button
                                onClick={handlePasswordResetSubmit}
                                className="bg-green-600 text-white rounded-md px-3 py-1 mt-2"
                            >
                                Update Password
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default HelloAdmin;
