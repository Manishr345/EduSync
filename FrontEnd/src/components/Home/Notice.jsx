import React from 'react';

const Notice = () => {
    return (
        <>
            <div className="w-full flex justify-center items-center">
                <hr className="w-11/12 border-t-2 border-white opacity-40 mb-6 mt-8" />
            </div>
            <div className='px-5 py-5 bg-black flex flex-col gap-20 sm:flex-row sm:gap-5 sm:justify-center items-center md:gap-[30px] lg:gap-[100px] xl:gap-[300px]'>
                {/* Notice Card */}
                <div className='flex flex-col justify-center items-center px-8 py-8 bg-gradient-to-br from-[#021D3C] via-[#0a2a4d] to-[#021D3C] text-white shadow-lg border border-white/20 h-auto w-full max-w-[750px] rounded-2xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl'>
                    <h2 className='text-center font-extrabold tracking-wide text-2xl sm:text-3xl md:text-4xl xl:text-5xl mb-6 font-serif drop-shadow-lg'>Institute Notices</h2>
                    <ul className='list-disc pl-6 flex flex-col gap-5 px-3 py-5 text-base sm:text-lg md:text-xl xl:text-2xl font-medium leading-relaxed font-sans'>
                        <li>Online webinar on <span className="text-yellow-300 font-semibold">12th Jan 2025</span> for admission</li>
                        <li>Registration deadline for admission is <span className="text-red-400 font-semibold">30th March 2025</span></li>
                        <li>Tour started <a href='#' className='text-green-400 underline font-semibold hover:text-green-300 transition-colors'>Book now!</a></li>
                    </ul>
                </div>
                {/* Recruiters Card */}
                <div className='flex flex-col justify-center items-center px-8 py-8 bg-gradient-to-br from-[#021D3C] via-[#0a2a4d] to-[#021D3C] shadow-lg border border-white/20 rounded-2xl w-full max-w-[400px] transition-transform duration-300 hover:scale-105 hover:shadow-2xl'>
                    <h3 className='text-center font-bold text-xl sm:text-2xl mb-4 tracking-wide text-white'>Top Recruiters</h3>
                    <hr className="w-11/12 border-t-2 border-white opacity-30" />

                    <div className='relative h-[300px] w-[300px] overflow-hidden flex flex-col items-center mt-5'>
                        <div className='animate-vertical-scroll flex flex-col items-center gap-6'>
                            <img src="https://imgs.search.brave.com/hvbP_QGDF2fyftH4OH0Sge0Zhk7ipUmtsQk2cNK7mZs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zZWVr/dmVjdG9ycy5jb20v/c3RvcmFnZS9pbWFn/ZXMvNmMzZmJkYWMw/NDlmY2JmZGJmY2Qx/ZjgxZTIyMGZkZjEu/c3Zn" alt="Company A" className='border-2 border-white w-[220px] h-[90px] rounded-lg object-cover' />
                            <img src="https://i.pinimg.com/736x/ab/e2/33/abe2339ef7fc1363d7fbf910085a945c.jpg" alt="Company C" className='border-2 border-white w-[220px] h-[90px] rounded-lg object-cover' />
                            <img src="https://cdn.prod.website-files.com/63f6e52346a353ca1752970e/644fb7a5f64fb5cb87a5beaa_20230501T1259-9f1793fc-a440-492c-a2b5-c01eba32c7f4.jpeg" alt="Company D" className='border-2 border-white w-[220px] h-[90px] rounded-lg object-cover' />
                            <img src="https://cdn2.hubspot.net/hubfs/53/image8-2.jpg" alt="Company E" className='border-2 border-white w-[220px] h-[90px] rounded-lg object-cover' />
                            <img src="https://www.shutterstock.com/image-vector/chattogram-bangladesh-april-24-2023-600nw-2292992631.jpg" alt="Company F" className='border-2 border-white w-[220px] h-[90px] rounded-lg object-cover' />
                        </div>
                    </div>
                </div>
            </div>
            {/* Vertical scroll animation */}
            <style>{`
                @keyframes vertical-scroll {
                    0% { transform: translateY(0); }
                    100% { transform: translateY(-60%); }
                }
                .animate-vertical-scroll {
                    animation: vertical-scroll 12s linear infinite;
                }
            `}</style>
            <br />
        </>
    );
}

export default Notice;