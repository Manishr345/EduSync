import React, { useState } from 'react';
import AdmissionNav from './AdmissionNav';
import { useContext } from 'react';
import AdmissionContext from '../../contexts/admission/AdmissionContext';
import { useNavigate } from 'react-router-dom'
import Header from '../Home/Header';

const Educational = () => {
  localStorage.setItem('eddone', "false");

  const navigate = useNavigate();
  const [educational, setEducational] = useState({ schoolName: '', collegeName: '', schoolGrade: '', collegeGrade: '', highestQualification: '' })
  const context = useContext(AdmissionContext);
  const changeMe = (e) => {
    // console.log(e.target.name, e.target.value); // Debugging
    setEducational({ ...educational, [e.target.name]: e.target.value });
  };

  const submitMe = () => {
    localStorage.setItem('eddone', "true");
    console.log(educational);
    context.educationalDetails(educational.schoolName, educational.collegeName, educational.schoolGrade, educational.collegeGrade, educational.highestQualification);
    navigate('/admission/course')  
  }

  const handleClick = () => {
    navigate('/admission/personal');
  };


  return (
    <>
    <Header/>
      <AdmissionNav />
      <div className="min-h-screen bg-black py-12 flex justify-center items-center">
        <div className="sm:w-[90%] p-6 bg-gray-900 rounded-lg shadow-md hover:shadow-[-5px_-5px_15px_#0ea5e9] transition ease-in-out duration-700">
          <div className="flex justify-center items-center gap-2 mb-6">
            <h2 className="text-2xl font-bold text-white"><i className="fa-solid fa-graduation-cap"></i>&nbsp;Educational Background</h2>
          </div>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-white mb-1">
                School name
              </label>
              <input value={educational.schoolName} onChange={changeMe} name="schoolName"
                type="text"
                className="w-full px-4 py-2 bg-gray-800 rounded-md border-gray-700 text-white"
                placeholder="Enter school name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-1">
                College name
              </label>
              <input value={educational.collegeName} onChange={changeMe} name="collegeName"
                type="text"
                className="w-full px-4 py-2 bg-gray-800 rounded-md border-gray-700 text-white"
                placeholder="Enter college name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-1">
                Grades Obtained in 10th class
              </label>
              <input value={educational.schoolGrade} onChange={changeMe} name="schoolGrade"
                type="text"
                className="w-full px-4 py-2 bg-gray-800 rounded-md border-gray-700 text-white"
                placeholder="Enter grades"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-1">
                Grades Obtained in 12th class
              </label>
              <input value={educational.collegeGrade} onChange={changeMe} name="collegeGrade"
                type="text"
                className="w-full px-4 py-2 bg-gray-800 rounded-md border-gray-700 text-white"
                placeholder="Enter grades"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-1">
                Highest Qualification
              </label>
              <input value={educational.highestQualification} onChange={changeMe} name="highestQualification"
                type="text"
                className="w-full px-4 py-2 bg-gray-800 rounded-md border-gray-700 text-white"
                placeholder="Enter your highest qualification"
              />
            </div>
            <div className='w-full flex justify-between'>
              <button
                type="button"
                onClick={handleClick}
                className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
              >
                Prev
              </button>
              <button
                type="button"
                onClick={submitMe}
                className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
              >
                Submit
              </button>
            </div>

          </form>
        </div>
      </div>
    </>
  )
}

export default Educational
