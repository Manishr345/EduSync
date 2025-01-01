import React, { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Logging in with:', { username, email, password });
    };

    return (
        <>
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
                                        htmlFor="username"
                                        className="font-semibold text-sm text-gray-400 pb-1 block"
                                    >
                                        Username
                                    </label>
                                    <input
                                        id="username"
                                        type="text"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
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
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
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
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                        className="outline-none border-1 rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full bg-gray-700 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
                                    />
                                </div>
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
                                    href="#"
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
        </>
    );
};

export default Login;
