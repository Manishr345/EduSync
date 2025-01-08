import React, { useState } from 'react'
import Header from '../Home/Header'

const Activitymain = () => {
  // State to handle which event is being hovered
  const [hovered, setHovered] = useState(null)

  return (
    <>
      <Header />
      <div className='mt-5 relative h-[300px] flex justify-center items-center lg:h-[500px] xl:h-[700px]'>
        {/* Background Image */}
        <div
          className='absolute inset-0 brightness-50'
          style={{
            backgroundImage: 'url(https://img.freepik.com/premium-photo/quotvibrant-hackathon-event-with-young-codersquot_1168612-415576.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        {/* Header text */}
        <h1 className='relative px-2 py-5 text-2xl text-center text-white font-bold'>
          DISCOVER WHAT'S HAPPENING ON CAMPUS
        </h1>
      </div>
      <br />

      <div className='flex flex-col'>

        {/* Event Section: Hackathon */}
        <div
          className='h-[70px] flex justify-center items-start bg-cover bg-center transition-all ease-in-out duration-75 hover:h-[400px] lg:h-[100px]'
          style={{
            backgroundImage: 'url(https://www.sih.gov.in/img1/software-result-bg.jpg)',
          }}
          onMouseEnter={() => setHovered('hackathon')}
          onMouseLeave={() => setHovered(null)}
        >
          {/* Header text */}
          <div className='flex flex-col gap-5'>
            <h1 className='px-2 py-5 text-2xl text-center text-white font-semibold'>
              Hackathon
            </h1>
            {/* Event details */}
            {hovered === 'hackathon' && (
              <ul className='text-white flex flex-col gap-5 justify-center items-center font-bold'>
                <li>Venue: Computer Labs</li>
                <li>Timing: 11:00 a.m</li>
                <li>Prizepool: 20k</li>
                <li>Contact: +91 8591973339</li>
                <li>Host: Mark Zuckerbucks</li>
                <li className='text-green-500'>
                  <a href='#'>Visit</a>
                </li>
              </ul>
            )}
          </div>
        </div>

        {/* Event Section: E-sports */}
        <div
          className='h-[70px] flex justify-center items-start bg-cover bg-center transition-all ease-in-out duration-100 hover:h-[400px] lg:h-[100px]'
          style={{
            backgroundImage: 'url(https://i.pinimg.com/736x/16/50/cb/1650cb4a41f0938e9fa58ee809a9233e.jpg)',
            backgroundSize: 'cover',
          }}
          onMouseEnter={() => setHovered('esports')}
          onMouseLeave={() => setHovered(null)}
        >
          {/* Header text */}
          <div className='flex flex-col gap-5'>
            <h1 className='px-2 py-5 text-2xl text-center text-white font-semibold'>
              E-sports
            </h1>
            {/* Event details */}
            {hovered === 'esports' && (
              <ul className='text-white flex flex-col gap-5 font-bold justify-center items-center'>
                <li>Venue: Arena</li>
                <li>Timing: 2:00 p.m</li>
                <li>Prizepool: 50k</li>
                <li>Contact: +91 8591973339</li>
                <li>Host: Tenz</li>
                <li className='text-green-500'>
                  <a href='#'>Visit</a>
                </li>
              </ul>
            )}
          </div>
        </div>

        {/* Event Section: Cultural */}
        <div
          className='h-[70px] flex justify-center items-start bg-cover bg-center transition-all ease-in-out duration-100 hover:h-[400px] lg:h-[100px]'
          style={{
            backgroundImage: 'url(https://i.pinimg.com/736x/9d/df/8e/9ddf8ed957a99f9ed603d40f8680e5e7.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          onMouseEnter={() => setHovered('cultural')}
          onMouseLeave={() => setHovered(null)}
        >
          {/* Header text */}
          <div className='flex flex-col gap-5'>
            <h1 className='px-2 py-5 text-2xl text-center text-white font-semibold'>
              Cultural
            </h1>
            {/* Event details */}
            {hovered === 'cultural' && (
              <ul className='text-white flex flex-col gap-5 font-bold justify-center items-center'>
                <li>Venue: Auditorium</li>
                <li>Timing: 5:00 p.m</li>
                <li>Prizepool: 10k</li>
                <li>Contact: +91 8591973339</li>
                <li>Host: Antony Star</li>
                <li className='text-green-500'>
                  <a href='#'>Visit</a>
                </li>
              </ul>
            )}
          </div>
        </div>


        {/* Event Section: Sports */}
        <div
          className='h-[70px] flex justify-center items-start bg-cover bg-center transition-all ease-in-out duration-100 hover:h-[400px] lg:h-[100px]'
          style={{
            backgroundImage: 'url(https://i.pinimg.com/736x/dc/9f/0e/dc9f0ea1a49e80ab8f50391df42fafac.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          onMouseEnter={() => setHovered('sports')}
          onMouseLeave={() => setHovered(null)}
        >
          {/* Header text */}
          <div className='flex flex-col gap-5'>
            <h1 className='px-2 py-5 text-2xl text-center text-white font-semibold'>
              Sports
            </h1>
            {/* Event details */}
            {hovered === 'sports' && (
              <ul className='text-white flex flex-col gap-5 font-bold justify-center items-center'>
                <li>Venue: Auditorium</li>
                <li>Timing: 5:00 p.m</li>
                <li>Prizepool: 10k</li>
                <li>Contact: +91 8591973339</li>
                <li>Host: Lionel Messi</li>
                <li className='text-green-500'>
                  <a href='#'>Visit</a>
                </li>
              </ul>
            )}
          </div>
        </div>


        {/* Event Section: Coming soon */}
        <div
          className='h-[70px] flex justify-center items-start bg-cover bg-center transition-all ease-in-out duration-100 hover:h-[400px] lg:h-[100px]'
          style={{
            backgroundImage: 'url(#)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          onMouseEnter={() => setHovered('comingsoon')}
          onMouseLeave={() => setHovered(null)}
        >
          {/* Header text */}
          <div className='flex flex-col gap-5'>
            <h1 className='px-2 py-5 text-2xl text-center text-white font-semibold'>
              Coming soon
            </h1>
          </div>
        </div>

      </div>
    </>
  )
}

export default Activitymain
