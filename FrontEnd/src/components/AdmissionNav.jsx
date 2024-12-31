import React from 'react'

const AdmissionNav = () => {
    return (
        <>
            <div className='w-full grid grid-cols-6  text-white font-bold text-xl '>
                <a className='px-11 py-3  hover:text-blue-500 flex justify-center items-center hover:border-b hover:border-l hover:border-r hover:rounded-lg' href="">Personal</a>
                <a className='px-11 py-3  hover:text-blue-500 flex justify-center items-center hover:border-b hover:border-l hover:border-r hover:rounded-lg' href="">Education</a>
                <a className='px-11 py-3  hover:text-blue-500 flex justify-center items-center hover:border-b hover:border-l hover:border-r hover:rounded-lg' href="">Course</a>
                <a className='px-11 py-3  hover:text-blue-500 flex justify-center items-center hover:border-b hover:border-l hover:border-r hover:rounded-lg' href="">Document</a>
                <a className='px-11 py-3  hover:text-blue-500 flex justify-center items-center hover:border-b hover:border-l hover:border-r hover:rounded-lg' href="">Declaration</a>
                <a className='px-11 py-3  hover:text-blue-500 flex justify-center items-center hover:border-b hover:border-l hover:border-r hover:rounded-lg' href="">Payment</a>
            </div>

        </>
    )
}

export default AdmissionNav
