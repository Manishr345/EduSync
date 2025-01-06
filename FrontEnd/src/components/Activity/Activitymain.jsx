import React from 'react'

const Activitymain = () => {
  return (
    <>
      <div className='relative mt-10 h-[200px]'>
        {/* Background Image */}
        <div
          className='absolute inset-0'
          style={{
            backgroundImage: 'url(https://img.freepik.com/premium-photo/quotvibrant-hackathon-event-with-young-codersquot_1168612-415576.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>

        {/* Overlay with backdrop-filter */}
        <div
          className='absolute inset-0 bg-black bg-opacity-50 backdrop-brightness-20'
        ></div>

        {/* Header text */}
        <h1 className='relative px-2 py-2 text-xl text-center text-white'>
          DISCOVER WHAT'S HAPPENING ON CAMPUS
        </h1>
      </div>
    </>
  )
}

export default Activitymain
