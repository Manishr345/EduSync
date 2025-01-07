import React from 'react';

const Notice = () => {
    return (
        <>
            <div className='px-5 py-5 bg-gray-900 flex flex-col gap-10 sm:flex-row sm:gap-5 sm:justify-center items-center md:gap-[30px] lg:gap-[70px]'>
                <div className='flex flex-col justify-center items-center px-5 py-5 bg-gray-800 text-white h-[250px] w-[250px] rounded-lg sm:h-[300px] sm:w-[300px] md:w-[400px] lg:w-[600px] xl:w-[750px] xl:h-[500px] xl:gap-[50px]'>
                    <h2 className='font-bold text-xl mt-4 font-serif xl:text-4xl'>Institute Notices</h2>
                    <ul className='list-disc pl-5 flex flex-col gap-3 px-3 py-5 xl:text-2xl'>
                        <li>Online webinar on 12th Jan 2025 for admission</li>
                        <li>Registration deadline for admission is 30th March 2025</li>
                        <li>Tour started <a href='#' className='text-green-400'>Book now!</a></li>
                    </ul>
                </div>
                <div className='flex flex-col justify-center items-center px-5 py-5 bg-gray-800 h-[250px] w-[250px] rounded-lg sm:h-[300px] sm:w-[300px] xl:w-[400px] xl:h-[500px]'>
                    <marquee behavior="scroll" direction="down" className='text-lg flex flex-col justify-center items-center'>
                        <img src="https://1000logos.net/wp-content/uploads/2020/04/J.P.-Morgan-Chase-Logo-500x281.jpg" alt="Company A" className='w-[300px] h-[140px]' />
                        <br></br>
                        <img src="https://1000logos.net/wp-content/uploads/2018/04/Mercedes-logo-500x281.jpg" alt="Company C" className='w-[300px] h-[140px]' />
                        <br></br>
                        <img src="https://1000logos.net/wp-content/uploads/2020/09/Real-Madrid-logo-500x357.jpg" alt="Company D" className='w-[300px] h-[140px]' />
                        <br></br>
                        <img src="https://1000logos.net/wp-content/uploads/2016/12/Starbucks-logo-500x350.jpg" alt="Company E" className='w-[300px] h-[140px]' />
                    </marquee>
                </div>
            </div>
            <br />
        </>
    );
}

export default Notice;