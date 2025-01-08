import React from 'react';
import Header from '../components/Home/Header';

const About = () => {
  return (
    <>
      <Header />
      <div className="w-full flex justify-center bg-black">
        <div className="w-[95%] about-page py-10">
          <section className="py-12  text-white rounded-lg shadow-lg" style={{ backgroundColor: '#021D3C' }}>
            <div className="container mx-auto text-center">
              <h1 className="text-5xl font-extrabold mb-4">Welcome to EduSync</h1>
              <p className="text-lg font-light">
                Our college is dedicated to providing quality education, fostering innovation, and building a diverse and inclusive academic community.
              </p>
            </div>
          </section>

          <section className="py-12  bg-gray-900 text-white mt-8 rounded-lg shadow-lg">
            <div className="container mx-auto text-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <h2 className="text-3xl font-semibold mb-4">Mission Statement</h2>
                  <p>
                    To empower students with knowledge, skills, and values necessary to thrive in a dynamic global environment.
                  </p>
                </div>
                <div>
                  <h2 className="text-3xl font-semibold mb-4">Vision Statement</h2>
                  <p>
                    To be a leading institution recognized for academic excellence, research, and societal impact.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-12  text-white mt-8 rounded-lg shadow-lg" style={{ backgroundColor: '#021D3C' }}>
            <div className="container mx-auto">
              <h2 className="text-3xl font-semibold text-center mb-6">History and Background</h2>
              <p className="text-center">
                EduSync was founded in [Year], with a mission to provide top-tier education and make a difference in the academic world.
              </p>
              <p className="text-center mt-4">
                Over the years, we have achieved many notable milestones, such as [List of Milestones].
              </p>
            </div>
          </section>

          <section className="py-12 bg-gray-900 text-white mt-8 rounded-lg shadow-lg">
            <div className="container mx-auto text-center">
              <h2 className="text-3xl font-semibold mb-6">Core Values</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {['Inclusivity', 'Innovation', 'Integrity', 'Sustainability'].map((value) => (
                  <div
                    key={value}
                    className="bg-gray-700 p-4 rounded-lg hover:scale-105 transform transition-transform duration-300"
                  >
                    <p className="text-xl font-semibold">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-12  text-white mt-8 rounded-lg shadow-lg" style={{ backgroundColor: '#021D3C' }}>
            <div className="container mx-auto">
              <h2 className="text-3xl font-semibold text-center mb-6">Academic Excellence</h2>
              <p className="text-center">
                Our college offers a wide range of academic programs, accredited by [Accreditation Bodies], and has affiliations with [Affiliated Institutions].
              </p>
              <p className="text-center mt-4">
                Our dedicated faculty and talented students have achieved remarkable success in both academia and industry.
              </p>
            </div>
          </section>

          <section className="py-12 bg-gray-900 text-white mt-8 rounded-lg shadow-lg">
            <div className="container mx-auto">
              <h2 className="text-3xl font-semibold text-center mb-6">Why Choose Us?</h2>
              <ul className="list-none space-y-4 text-center" >
                {[
                  'High placement rates with top companies.',
                  'World-class faculty and research opportunities.',
                  'Global partnerships and collaborations.',
                  'Scholarships and financial aid for eligible students.',
                ].map((reason, index) => (
                  <li key={index} className="p-4 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg hover:scale-105 transform transition-transform duration-200">
                    {reason}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="py-12  text-white mt-8 rounded-lg shadow-lg" style={{ backgroundColor: '#021D3C' }}>
            <div className="container mx-auto text-center">
              <h2 className="text-3xl font-semibold mb-6">Future Goals and Projects</h2>
              <p>
                We are constantly working on new initiatives to enhance the academic experience, including research projects and infrastructural developments.
              </p>
            </div>
          </section>

          <section className="py-12 bg-gray-900 text-white mt-8 mb-8 rounded-lg shadow-lg">
            <div className="container mx-auto text-center">
              <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>
              <p>
                Ready to join us?{' '}
                <a href="/apply" className="text-blue-500 underline hover:text-blue-400">
                  Apply now
                </a>{' '}
                or{' '}
                <a href="/schedule-tour" className="text-blue-500 underline hover:text-blue-400">
                  Schedule a campus tour
                </a>{' '}
                today!
              </p>
              <p className="mt-4">
                For more information,{' '}
                <a href="/contact" className="text-blue-500 underline hover:text-blue-400">
                  contact us
                </a>.
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default About;
