import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import AdmissionContext from '../../contexts/admission/AdmissionContext';

const Login = () => {
    const context = useContext(AdmissionContext);
    const navigate = useNavigate();

    const [student, setStudent] = useState({ name: '', email: '', password: '' });
    const [error, setError] = useState('');

    // useEffect(() => {
    //     const studentToken = sessionStorage.getItem('studentToken');
    //     if (studentToken) {
    //         // If token exists, navigate to the student dashboard
    //         navigate('/hellostudent');
    //     }
    // }, [navigate]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setStudent((prevState) => ({
            ...prevState,
            [name]: value,
        }));
        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const token = await context.studentLogin(student.name, student.email, student.password);
            if (token) {
                sessionStorage.setItem('studentToken', token);
                navigate('/hellostudent');
            }
        } catch (err) {
            setError(err.message || 'Something went wrong. Please try again.');
        }
    };

    return (
        <div className="w-full h-[100vh] flex justify-center items-center bg-black">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto w-full">
                <div
                    className="relative px-4 py-10 bg-[#021D3C] mx-8 md:mx-0 rounded-3xl sm:p-10 border shadow-none transition-all duration-500 cursor-pointer hover:shadow-[-6px_-6px_15px_#0ea5e9]"
                >
                    <div className="max-w-md mx-auto text-white">
                        <div className="flex items-center space-x-5 justify-center">
                            <h1 className="text-2xl font-bold">Student Login</h1>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="mt-5">
                                <label
                                    htmlFor="name"
                                    className="font-semibold text-sm text-gray-400 pb-1 block"
                                >
                                    Username
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    value={student.name}
                                    onChange={handleInputChange}
                                    required
                                    className="outline-none border-1 rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full bg-gray-700 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
                                />
                                <label
                                    htmlFor="email"
                                    className="font-semibold text-sm text-gray-400 pb-1 block"
                                >
                                    E-mail
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={student.email}
                                    onChange={handleInputChange}
                                    required
                                    className="outline-none border-1 rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full bg-gray-700 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
                                />
                                <label
                                    htmlFor="password"
                                    className="font-semibold text-sm text-gray-400 pb-1 block"
                                >
                                    Password
                                </label>
                                <input
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={student.password}
                                    onChange={handleInputChange}
                                    required
                                    className="outline-none border-1 rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full bg-gray-700 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
                                />
                            </div>
                            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                            <div className="mt-5">
                                <button
                                    type="submit"
                                    className="mt-4 py-2 px-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                                >
                                    Log in
                                </button>
                            </div>
                        </form>
                        <div className="flex items-center justify-between mt-4">
                            <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                            <a
                                href="/admission/personal"
                                className="text-sm text-gray-500 dark:text-gray-400 hover:underline"
                            >
                                or ENROLL
                            </a>
                            <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
