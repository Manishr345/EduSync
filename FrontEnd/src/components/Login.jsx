import React from 'react'

const Login = () => {
    return (
        <>
            <div className='w-full h-[100vh] flex justify-center items-center bg-black'>
                <div className="relative py-3 sm:max-w-xl sm:mx-auto w-full">
                    <div
                        className="relative px-4 py-10 bg-[#0d3645ba] mx-8 md:mx-0  rounded-3xl sm:p-10 border  shadow-none transition-all duration-500 cursor-pointer   hover:shadow-[-6px_-6px_15px_#0ea5e9] "
                    >
                        <div className="max-w-md mx-auto text-white">
                            <div className="flex items-center space-x-5 justify-center">
                                <h1 className='text-2xl font-bold'>Login</h1>
                            </div>
                            <div className="mt-5">
                                <label
                                    for="login"
                                    className="font-semibold text-sm text-gray-400 pb-1 block"
                                >UID</label
                                >
                                <input
                                    id="login"
                                    type="text"
                                    required
                                    class="border-2 rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full bg-gray-700 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
                                />
                                <label
                                    for="login"
                                    class="font-semibold text-sm text-gray-400 pb-1 block"
                                >Username</label
                                >
                                <input
                                    id="login"
                                    type="text"
                                    required
                                    class="border-2 rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full bg-gray-700 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
                                />
                                <label
                                    for="login"
                                    class="font-semibold text-sm text-gray-400 pb-1 block"
                                >E-mail</label
                                >
                                <input
                                    id="login"
                                    type="email"
                                    class="border-2 rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full bg-gray-700 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
                                />
                                <label
                                    for="password"
                                    class="font-semibold text-sm text-gray-400 pb-1 block"
                                >Password</label
                                >
                                <input
                                    id="password"
                                    type="password"
                                    class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full bg-gray-700 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
                                />
                            </div>
                            <div class="mt-5">
                                <button
                                    type="submit"
                                    class="py-2 px-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                                >
                                    Log in
                                </button>
                            </div>
                            <div class="flex items-center justify-between mt-4">
                                <span class="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                                <a
                                    href="#"
                                    class="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
                                >or sign up</a
                                >
                                <span class="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login