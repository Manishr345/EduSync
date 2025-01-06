import React from 'react';

const Achievement = () => {
  return (
    <div className="p-10">
      <section className="mb-12 p-5 sm:py-10 sm:px-10 bg-gray-900 text-white rounded-lg flex flex-col gap-10 sm:flex-row lg:gap-20">
        <div className='h-[200px] w-full rounded-lg sm:h-[250px] lg:h-[350px] xl:h-[420px]' style={{ backgroundImage: "url(https://mmo.aiircdn.com/428/6626b16a2ea61.png)", backgroundSize: "cover" }}>
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
        
        <div className='h-[200px] w-full rounded-lg sm:h-[250px] lg:h-[350px] xl:h-[420px]' style={{ backgroundImage: "url(https://img.freepik.com/premium-photo/graduation-is-cause-celebration-low-angle-shot-happy-group-students-jumping-celebration-graduation-day_590464-34215.jpg)", backgroundSize: "cover" }}>
        </div>
        
      </section>

      <section className="mb-12 p-5 sm:py-10 sm:px-10 bg-gray-900 text-white rounded-lg flex flex-col gap-10 sm:flex-row lg:gap-20">
        <div className='h-[200px] w-full rounded-lg sm:h-[250px] lg:h-[350px] xl:h-[420px]' style={{ backgroundImage: "url(https://www.tieonline.com/images/socialmedia/newsletter_2021_02_03.jpg)", backgroundSize: "cover" }}>
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
        <div className='h-[200px] w-full rounded-lg sm:h-[250px] lg:h-[350px] xl:h-[420px]' style={{ backgroundImage: "url(https://mymedschool.org/wp-content/uploads/2020/11/Hassan-Institute-of-Medical-Sciences-12-compress.jpg)", backgroundSize: "cover" }}>
        </div>
        
      </section>
      <section className="mb-12 p-5 sm:py-10 sm:px-10 bg-gray-900 text-white rounded-lg flex flex-col gap-10 sm:flex-row lg:gap-20">
        <div className='h-[200px] w-full rounded-lg sm:h-[250px] lg:h-[350px] xl:h-[420px]' style={{ backgroundImage: "url(https://www.waldenu.edu/media/4894/seo-1354-bs-volunteering-problem-cheerful-243564697-1200x675)", backgroundSize: "cover" }}>
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
        
        <div className='h-[200px] w-full rounded-lg sm:h-[250px] lg:h-[350px] xl:h-[420px]' style={{ backgroundImage: "url(https://live.staticflickr.com/3933/15431714259_7bab5b40cf_b.jpg)", backgroundSize: "cover" }}>
        </div>
        
      </section>
      <section className="mb-12 p-5 sm:py-10 sm:px-10 bg-gray-900 text-white rounded-lg flex flex-col gap-10 sm:flex-row lg:gap-20">
        <div className='h-[200px] w-full rounded-lg sm:h-[250px] lg:h-[350px] xl:h-[420px]' style={{ backgroundImage: "url(https://gardenhighschool.in/wp-content/uploads/2016/04/Annual-Concert-13-e1464769528899.jpg)", backgroundSize: "cover" }}>
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
  );
};

export default Achievement;
