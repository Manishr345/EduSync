import React from 'react'
import Header from '../components/Home/Header'

const Achievement = () => {
  return (
    <>
    <Header/>
    <div className="p-10">
      <section className="mb-12 p-5 sm:py-10 sm:px-10 bg-gray-900 text-white rounded-lg flex flex-col gap-10 sm:flex-row lg:gap-20">
        <div className='h-[200px] w-full rounded-lg sm:h-[250px] lg:h-[350px] xl:h-[420px]' style={{ backgroundImage: "url(academic.webp)", backgroundSize: "cover" }}>
        </div>
        <div className='flex  flex-col justify-center w-full'>
          <h2 className="text-3xl font-bold mb-4 xl:text-5xl">Academic Achievements</h2>
          <ul className="list-disc list-inside space-y-2 xl:text-2xl">
            <li>Accreditations and Rankings</li>
            <li>Graduation and Placement Rates</li>
            <li>Awards and Recognitions</li>
            <li>Collaborations</li>
          </ul>
        </div>

      </section>
      
      <section className="mb-12 p-5 sm:py-10 sm:px-10 bg-gray-900 text-white rounded-lg flex flex-col-reverse gap-10 sm:flex-row lg:gap-20">
      <div className='flex flex-col justify-center  w-full'>
          <h2 className="text-3xl font-bold mb-4 xl:text-5xl">Student Achievements</h2>
          <ul className="list-disc list-inside space-y-2 xl:text-2xl">
            <li>Scholarships and Fellowships</li>
            <li>Competitions and Events</li>
            <li>Innovations and Startups</li>
          </ul>
        </div>
        
        <div className='h-[200px] w-full rounded-lg sm:h-[250px] lg:h-[350px] xl:h-[420px]' style={{ backgroundImage: "url(student.avif)", backgroundSize: "cover" }}>
        </div>
        
      </section>

      <section className="mb-12 p-5 sm:py-10 sm:px-10 bg-gray-900 text-white rounded-lg flex flex-col gap-10 sm:flex-row lg:gap-20">
        <div className='h-[200px] w-full rounded-lg sm:h-[250px] lg:h-[350px] xl:h-[420px]' style={{ backgroundImage: "url(research.jpg)", backgroundSize: "cover" }}>
        </div>
        <div className='flex flex-col justify-center w-full'>
          <h2 className="text-3xl font-bold mb-4 xl:text-5xl">Research and Development</h2>
          <ul className="list-disc list-inside space-y-2 xl:text-2xl">
          <li>Research Grants and Publications</li>
          <li>Patents and Inventions</li>
          <li>Research Centers and Labs</li>
          </ul>
        </div>

      </section>
      
      <section className="mb-12 p-5 sm:py-10 sm:px-10 bg-gray-900 text-white rounded-lg flex flex-col-reverse gap-10 sm:flex-row lg:gap-20">
      <div className='flex flex-col justify-center  w-full'>
          <h2 className="text-3xl font-bold mb-4 xl:text-5xl">Infrastructure and Facilities</h2>
          <ul className="list-disc list-inside space-y-2 xl:text-2xl">
          <li>Campus Development</li>
          <li>Technological Advancements</li>
          </ul>
        </div>
        <div className='h-[200px] w-full rounded-lg sm:h-[250px] lg:h-[350px] xl:h-[420px]' style={{ backgroundImage: "url(infrastructure.jpg)", backgroundSize: "cover" }}>
        </div>
        
      </section>
      <section className="mb-12 p-5 sm:py-10 sm:px-10 bg-gray-900 text-white rounded-lg flex flex-col gap-10 sm:flex-row lg:gap-20">
        <div className='h-[200px] w-full rounded-lg sm:h-[250px] lg:h-[350px] xl:h-[420px]' style={{ backgroundImage: "url(cummunity.jpg)", backgroundSize: "cover" }}>
        </div>
        <div className='flex  flex-col justify-center w-full'>
          <h2 className="text-3xl font-bold mb-4 xl:text-5xl">Community and Social Impact</h2>
          <ul className="list-disc list-inside space-y-2 xl:text-2xl">
          <li>Community Service Initiatives</li>
          <li>Sustainability Efforts</li>
          <li>Inclusive Programs</li>
          </ul>
        </div>

      </section>
      
      <section className="mb-12 p-5 sm:py-10 sm:px-10 bg-gray-900 text-white rounded-lg flex flex-col-reverse gap-10 sm:flex-row lg:gap-20">
      <div className='flex flex-col justify-center  w-full'>
          <h2 className="text-3xl font-bold mb-4 xl:text-5xl">Alumni Achievements</h2>
          <ul className="list-disc list-inside space-y-2 xl:text-2xl">
          <li>Successful Alumni</li>
          <li>Alumni Networks</li>
          </ul>
        </div>
        
        <div className='h-[200px] w-full rounded-lg sm:h-[250px] lg:h-[350px] xl:h-[420px]' style={{ backgroundImage: "url(alumni.jpg)", backgroundSize: "cover" }}>
        </div>
        
      </section>
      <section className="mb-12 p-5 sm:py-10 sm:px-10 bg-gray-900 text-white rounded-lg flex flex-col gap-10 sm:flex-row lg:gap-20">
        <div className='h-[200px] w-full rounded-lg sm:h-[250px] lg:h-[350px] xl:h-[420px]' style={{ backgroundImage: "url(function.jpg)", backgroundSize: "cover" }}>
        </div>
        <div className='flex flex-col justify-center w-full'>
          <h2 className="text-3xl font-bold mb-4 xl:text-5xl">Cultural and Extracurricular Milestones</h2>
          <ul className="list-disc list-inside space-y-2 xl:text-2xl">
          <li>Cultural Festivities</li>
          <li>Extracurricular Programs</li>
          </ul>
        </div>

      </section>

    </div >
    
  </>
  )
}

    


export default Achievement;
