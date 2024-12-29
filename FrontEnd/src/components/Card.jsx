import React from 'react'

const Card = () => {
    return (
        <>
            <div className='w-full h-[90vh]  bg-red-500 '></div>
            <div className='w-full sm:max-[800px]:h-[130vh] sm:h-[90vh]  mt-7 text-white sm:flex flex-col justify-center items-center'>
                <div>
                    <h1 className='text-3xl font-bold text-center'>Features</h1>
                </div>
                <div className='w-full sm:h-[clac(90vh-36px)] grid sm:grid-cols-3 sm:gap-x-[3vw] lg:gap-x-25 gap-y-20 sm:px-20 px-10 mt-10 grid-cols-1 sm:max-[800px]:grid-cols-2'>
                    <div className=' rounded-xl sm:p-6 py-5 border-l-4 border-b-4 border-white text-center flex flex-col  items-center' style={{ backgroundColor: '#0d3645' }}>
                        <h2 className='text-xl font-bold text-center'>FACULTIES</h2>
                        <p className='mt-4'>PHD <br />CEO <br />Ex-FANG</p>
                    </div>
                    <div className=' rounded-xl p-6 border-l-4 border-b-4 border-white text-center flex flex-col  items-center' style={{ backgroundColor: '#0d3645' }}>
                        <h2 className='text-xl font-bold text-center'>PLACEMENT</h2>
                        <p className='mt-4'>FANG <br />Wipro<br />JP Morgan</p>
                    </div>
                    <div className=' rounded-xl  sm:p-6 py-5 border-l-4 border-b-4 border-white text-center flex flex-col  items-center' style={{ backgroundColor: '#0d3645' }}>
                        <h2 className='text-xl font-bold text-center '>INFRASTRUCTURE</h2>
                        <p className='mt-4 '>Turf <br />Adv Library<br /> Adv Seminar Halls<br />Adv Labs/Classrooms</p>
                    </div>
                    <div className=' rounded-xl p-6 border-l-4 border-b-4 border-white text-center flex flex-col  items-center' style={{ backgroundColor: '#0d3645' }}>
                        <h2 className='text-xl font-bold text-center'>SCHOLARSHIPS</h2>
                        <p className='mt-4'>Ews<br />Others<br /> Minority <br />Grade based </p>
                    </div>
                    <div className=' rounded-xl p-6 border-l-4 border-b-4 border-white text-center flex flex-col  items-center' style={{ backgroundColor: '#0d3645' }}>
                        <h2 className='text-xl font-bold text-center'>PROGRAMS</h2>
                        <p className='mt-4'>Workshop <br />hackathon <br />Dual-Degree <br />International exachange program</p>
                    </div>
                    <div className=' rounded-xl p-6 border-l-4 border-b-4 border-white text-center flex flex-col  items-center' style={{ backgroundColor: '#0d3645' }}>
                        <h2 className='text-xl font-bold text-center'>COMMITTEES</h2>
                        <p className='mt-4'>Tech <br />NSS<br />NCC <br /> Finance <br />Cultural</p>
                    </div>
                </div>
            </div>
            <div className='w-full h-[90vh] bg-blue-500 mt-9'></div>
        </>
    )
}
export default Card
