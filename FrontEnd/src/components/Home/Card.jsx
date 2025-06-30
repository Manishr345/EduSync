import React from 'react'

const Card = () => {
    return (
        <>
            {/* <div className='w-full h-[90vh] bg-gray-500 min-[768px]:max-[1023px]:w-[110%]'></div> */}
            <div className="w-full flex justify-center items-center">
                <hr className="w-11/12 border-t-2 border-white opacity-40 mb-3 mt-8" />
            </div>
            <div className='w-full sm:max-[800px]:h-[130vh] sm:h-[90vh] text-white flex flex-col justify-center items-center mb-7'>
                <div>
                    <h1 className='text-4xl font-extrabold text-center tracking-wide mb-2 drop-shadow-lg'>Features</h1>
                    <p className='text-center text-lg text-gray-300 mb-6'>What makes EduSync Institute stand out</p>
                </div>
                <div className='w-full grid sm:grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-8 sm:px-10 md:px-20 mt-6 px-4'>
                    <div className='rounded-2xl p-7 bg-gradient-to-br from-[#021D3C] via-[#0a2a4d] to-[#021D3C] border border-white/20 shadow-lg text-center flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl'>
                        <h2 className='text-2xl font-bold mb-2 tracking-wide'>FACULTIES</h2>
                        <ul className='mt-3 space-y-1 text-base text-gray-200'>
                            <li>PHD</li>
                            <li>CEO</li>
                            <li>Ex-FANG</li>
                        </ul>
                    </div>
                    <div className='rounded-2xl p-7 bg-gradient-to-br from-[#021D3C] via-[#0a2a4d] to-[#021D3C] border border-white/20 shadow-lg text-center flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl'>
                        <h2 className='text-2xl font-bold mb-2 tracking-wide'>PLACEMENT</h2>
                        <ul className='mt-3 space-y-1 text-base text-gray-200'>
                            <li>FANG</li>
                            <li>Wipro</li>
                            <li>JP Morgan</li>
                        </ul>
                    </div>
                    <div className='rounded-2xl p-7 bg-gradient-to-br from-[#021D3C] via-[#0a2a4d] to-[#021D3C] border border-white/20 shadow-lg text-center flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl'>
                        <h2 className='text-2xl font-bold mb-2 tracking-wide'>INFRASTRUCTURE</h2>
                        <ul className='mt-3 space-y-1 text-base text-gray-200'>
                            <li>Turf</li>
                            <li>Adv Library</li>
                            <li>Adv Seminar Halls</li>
                            <li>Adv Labs/Classrooms</li>
                        </ul>
                    </div>
                    <div className='rounded-2xl p-7 bg-gradient-to-br from-[#021D3C] via-[#0a2a4d] to-[#021D3C] border border-white/20 shadow-lg text-center flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl'>
                        <h2 className='text-2xl font-bold mb-2 tracking-wide'>SCHOLARSHIPS</h2>
                        <ul className='mt-3 space-y-1 text-base text-gray-200'>
                            <li>EWS</li>
                            <li>Others</li>
                            <li>Minority</li>
                            <li>Grade based</li>
                        </ul>
                    </div>
                    <div className='rounded-2xl p-7 bg-gradient-to-br from-[#021D3C] via-[#0a2a4d] to-[#021D3C] border border-white/20 shadow-lg text-center flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl'>
                        <h2 className='text-2xl font-bold mb-2 tracking-wide'>PROGRAMS</h2>
                        <ul className='mt-3 space-y-1 text-base text-gray-200'>
                            <li>Workshop</li>
                            <li>Hackathon</li>
                            <li>Dual-Degree</li>
                            <li>International Exchange Program</li>
                        </ul>
                    </div>
                    <div className='rounded-2xl p-7 bg-gradient-to-br from-[#021D3C] via-[#0a2a4d] to-[#021D3C] border border-white/20 shadow-lg text-center flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl'>
                        <h2 className='text-2xl font-bold mb-2 tracking-wide'>COMMITTEES</h2>
                        <ul className='mt-3 space-y-1 text-base text-gray-200'>
                            <li>Tech</li>
                            <li>NSS</li>
                            <li>NCC</li>
                            <li>Finance</li>
                            <li>Cultural</li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* <div className='w-full h-[90vh] bg-gray-500 mt-9 min-[768px]:max-[1023px]:w-[110%]'></div> */}
        </>
    )
}
export default Card
