import React, { useState, useEffect, useContext } from 'react';
import AdmissionNav from './AdmissionNav';
import { useNavigate } from 'react-router-dom';
import AdmissionContext from '../../contexts/admission/AdmissionContext';
import Header from '../Home/Header';

const AdmissionCourse = () => {
  localStorage.setItem('cddone', "false");

  const context = useContext(AdmissionContext);
  const navigate = useNavigate();
  const [courseDetails, setCourseDetails] = useState({
    courseName: '',
    year: '',
    fees: '',
    duration: false,
    modeOfStudy: false,
    attendance: false,
  });
  const [fee, setFee] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCourseDetails({
      ...courseDetails,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handlePrev = () => {
    console.log('Navigating to Educational page...');
    navigate('/admission/educational');
  };

  const fetchFees = async () => {
    if (courseDetails.courseName && courseDetails.year) {
      const fetchedFee = await context.courseDetails(courseDetails.courseName, courseDetails.year);
      setFee(fetchedFee);
    }
  };

  useEffect(() => {
    fetchFees();
  }, [courseDetails.courseName, courseDetails.year]); 

  const handleSubmit = async () => {
    localStorage.setItem('cddone', "true");
    console.log('Form submitted:', courseDetails);
    console.log('Fee:', fee);
    navigate('/admission/document');
  };

  return (
    <div>
      <Header/>
      <AdmissionNav />
      <div className="min-h-screen bg-black py-12 flex justify-center items-center">
        <div className="sm:w-[90%] p-6 bg-gray-900 rounded-lg shadow-md hover:shadow-[-5px_-5px_15px_#0ea5e9] transition ease-in-out duration-700">
          <div className="flex justify-center items-center gap-2 mb-6">
            <h2 className="text-2xl font-bold text-white">
              <i className="fa-solid fa-graduation-cap"></i>&nbsp;Course Details
            </h2>
          </div>

          <form className="space-y-6">
            <div>
              <label className="text-white" htmlFor="courseName">Course Name</label>
              <select
                name="courseName"
                onChange={handleChange}
                value={courseDetails.courseName}
                className="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1"
                required
              >
                <option value="">Select Course</option>
                <option value="BSC CS">BSC CS</option>
                <option value="BSC IT">BSC IT</option>
                <option value="BSC Animation">Animation</option>
                <option value="BSC Physics">Physics</option>
                <option value="BSC Maths">Maths</option>
              </select>
            </div>

            <div>
              <label className="text-white" htmlFor="year">Year</label>
              <select
                name="year"
                onChange={handleChange}
                value={courseDetails.year}
                className="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1"
                required
              >
                <option value="">Select Year</option>
                <option value="1">1st </option>
                <option value="2">2nd</option>
                <option value="3">3rd</option>
              </select>
            </div>

            <div>
              <label className="text-white" htmlFor="fees">Fees</label>
              <div className="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1">
                This is the amount you have to pay: {fee || 'Select course and year'} 
              </div>
            </div>

            <div className="space-y-2">
              <div>
                <label className="text-white flex items-center">
                  <input
                    type="checkbox"
                    name="duration"
                    required="true"
                    onChange={handleChange}
                    checked={courseDetails.duration}
                    className="mr-2"
                  />
                  *I acknowledge that this course has a duration of 3 years, and I will receive a degree upon successful completion.*
                </label>
              </div>
              <div>
                <label className="text-white flex items-center">
                  <input
                    type="checkbox"
                    name="modeOfStudy"
                    required="true"
                    onChange={handleChange}
                    checked={courseDetails.modeOfStudy}
                    className="mr-2"
                  />
                  *I acknowledge that this is a 3-year, full-time program conducted in physical mode, and I will receive a degree upon successful completion.*
                </label>
              </div>
              <div>
                <label className="text-white flex items-center">
                  <input
                    type="checkbox"
                    name="attendance"
                    required="true"
                    onChange={handleChange}
                    checked={courseDetails.attendance}
                    className="mr-2"
                  />
                  *I acknowledge that this is a 3-year, full-time program conducted in physical mode. A minimum of 75% attendance is compulsory to be eligible for the degree upon successful completion.*
                </label>
              </div>
            </div>

            <div className="w-full flex justify-between">
              <button
                type="button"
                onClick={handlePrev}
                className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
              >
                Prev
              </button>
              <button
                type="button"
                onClick={handleSubmit}
                className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdmissionCourse;
