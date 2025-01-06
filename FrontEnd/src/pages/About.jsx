
import React from 'react';
import Header from '../components/Home/Header';

const About = () => {
  return (
  <>
  <Header/>
    <div className='w-[100%] flex justify-center '>
      <div className="w-[95%] about-page ">
        <section className="py-10 bg-gray-800 text-white">
          <div className="container mx-auto">
            <h1 className="text-4xl font-bold text-center ">Welcome to EduSync</h1>
            <p className="text-lg text-center mt-4">Our college is dedicated to providing quality education, fostering innovation, and building a diverse and inclusive academic community.</p>
            <div className="mission-vision text-center mt-8">
              <h2 className="text-2xl font-semibold">Mission Statement</h2>
              <p className="mt-4">To empower students with knowledge, skills, and values necessary to thrive in a dynamic global environment.</p>
              <h2 className="text-2xl font-semibold mt-8">Vision Statement</h2>
              <p className="mt-4">To be a leading institution recognized for academic excellence, research, and societal impact.</p>
            </div>
          </div>
        </section>

        <section className="py-10 bg-gray-800 text-white mt-8">
          <div className="container mx-auto">
            <h2 className="text-2xl font-semibold text-center">History and Background</h2>
            <p className="mt-4 text-center">[College Name] was founded in [Year], with a mission to provide top-tier education and make a difference in the academic world.</p>
            <p className="mt-4 text-center">Over the years, we have achieved many notable milestones, such as [List of Milestones].</p>
          </div>
        </section>

        <section className="py-10 bg-gray-800 text-white mt-8">
          <div className="container mx-auto">
            <h2 className="text-2xl font-semibold text-center">Core Values</h2>
            <ul className="list-disc list-inside mt-4 text-center flex flex-col justify-center items-center">
              <li>Inclusivity</li>
              <li>Innovation</li>
              <li>Integrity</li>
              <li>Sustainability</li>
            </ul>
          </div>
        </section>

        <section className="py-10 bg-gray-800 text-white mt-8">
          <div className="container mx-auto">
            <h2 className="text-2xl font-semibold text-center">Academic Excellence</h2>
            <p className="mt-4 text-center">Our college offers a wide range of academic programs, accredited by [Accreditation Bodies], and has affiliations with [Affiliated Institutions].</p>
            <p className="mt-4 text-center">Our dedicated faculty and talented students have achieved remarkable success in both academia and industry.</p>
          </div>
        </section>

        <section className="py-10 bg-gray-800 text-white mt-8">
          <div className="container mx-auto">
            <h2 className="text-2xl font-semibold text-center">Campus and Facilities</h2>
            <p className="mt-4 text-center">Our campus is equipped with state-of-the-art facilities, including modern libraries, advanced labs, and extensive sports complexes.</p>
            <p className="mt-4 text-center"> We pride ourselves on providing a green and sustainable environment.</p>
          </div>
        </section>

        <section className="py-10 bg-gray-800 text-white mt-8">
          <div className="container mx-auto">
            <h2 className="text-2xl font-semibold text-center">Community and Diversity</h2>
            <p className="mt-4 text-center">We are committed to fostering a vibrant and inclusive community. Students from diverse backgrounds participate in a range of activities, <br />including cultural events and volunteer programs.</p>
          </div>
        </section>

        <section className="py-10 bg-gray-800 text-white mt-8">
          <div className="container mx-auto">
            <h2 className="text-2xl font-semibold text-center">Leadership</h2>
            <p className="mt-4 text-center">Meet our leadership team, led by [Principal Name], [President Name], and other distinguished figures who guide the vision and <br />mission of the college.</p>
          </div>
        </section>

        <section className="py-10 bg-gray-800 text-white mt-8">
          <div className="container mx-auto">
            <h2 className="text-2xl font-semibold text-center">Why Choose Us?</h2>
            <ul className="list-disc list-inside mt-4 text-center">
              <li>High placement rates with top companies.</li>
              <li>World-class faculty and research opportunities.</li>
              <li>Global partnerships and collaborations.</li>
              <li>Scholarships and financial aid for eligible students.</li>
            </ul>
          </div>
        </section>

        <section className="py-10 bg-gray-800 text-white mt-8">
          <div className="container mx-auto">
            <h2 className="text-2xl font-semibold text-center">Future Goals and Projects</h2>
            <p className="mt-4 text-center">We are constantly working on new initiatives to enhance the academic experience, including research projects and <br /> infrastructural developments.</p>
          </div>
        </section>

        <section className="py-10 bg-gray-800 text-white mt-8">
          <div className="container mx-auto text-center">
            <h2 className="text-2xl font-semibold">Get in Touch</h2>
            <p className="mt-4">Ready to join us? <a href='/apply' className="text-blue-500 underline">Apply now</a> or <a href='/schedule-tour' className="text-blue-500 underline">Schedule a campus tour</a> today!</p>
            <p className="mt-4">For more information, <a href='/contact' className="text-blue-500 underline">contact us</a>.</p>
          </div>
        </section>
      </div>

    </div>

  </>
  
  );
};

export default About;
