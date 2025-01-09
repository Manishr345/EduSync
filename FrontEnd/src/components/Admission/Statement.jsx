import React, { useState } from 'react';
import AdmissionNav from './AdmissionNav';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import AdmissionContext from '../../contexts/admission/AdmissionContext';
import Header from '../Home/Header';

const Statement = () => {
  sessionStorage.setItem('sddone', "false");
  const context = useContext(AdmissionContext);
  const navigate = useNavigate();

  const [files, setFiles] = useState({
    studentSign: null,
    parentSign: null,
  });
  const [error, setError] = useState(null);

  const handleFileChange = (e) => {
    const { name, files: fileList } = e.target;
    setFiles((prevFiles) => ({
      ...prevFiles,
      [name]: fileList[0], // Store the selected file
    }));
  };

  const handlePrev = () => {
    navigate('/admission/document');
  };

  const handleSubmit = async () => {
    sessionStorage.setItem('sddone', "true");
    const formData = new FormData();

    // Append all files to the FormData object
    Object.entries(files).forEach(([key, file]) => {
      if (file) {
        formData.append(key, file);
      } else {
        setError(`Please upload ${key === 'studentSign' ? 'student' : 'parent'} signature.`);
      }
    });

    if (!error) {
      try {
        await context.uploadStatement(formData);
        navigate('/admission/payment');
      } catch (error) {
        setError('Error uploading statement. Please try again.');
      }
    }
  };

  return (
    <>
    <Header/>
      <AdmissionNav />
      <div className="w-full flex justify-center">
        <div className="mt-8 mb-10 flex flex-col bg-gray-900 rounded-lg p-4 shadow-sm w-[90%]">
          <h2 className="text-white font-bold text-lg text-center">
            <i className="fa-solid fa-graduation-cap"></i>&nbsp;Statement
          </h2>

          <form className="space-y-6 mt-4">
          <div className="space-y-4">
              <label className="text-white flex items-start">
                <input type="checkbox" required className="mr-2"/>
                <div className="ml-6 text-white">
                <p>I hereby declare that the information and documents I have submitted are true and accurate to the best of my knowledge.</p>
                <p>I agree to abide by the rules and regulations of the college and understand that any false information or misconduct on my part may result in appropriate actions being taken against me.</p>
                <p>I understand that the submission of this application does not guarantee approval.</p>
                <p>I agree to abide by the policies and rules set by the institution.</p>
                <p>I confirm that I have reviewed all the information provided and understand that the application is final upon submission.</p>
              </div>
              </label>
            </div>

            <div className="space-y-4">
              <label className="text-white flex items-start">
                <input type="checkbox" required className="mr-2" />
              <div className="ml-6 text-white">
                <p>I have read and agreed to the Terms and Conditions.</p>
                <p>I consent to the processing of my data in accordance with the Privacy Policy.</p>
              </div>
              </label>
            </div>

            <div className="space-y-4">
              <label className="text-white flex items-start">
                <input type="checkbox" required className="mr-2" />
               <div className="ml-6 text-white">
                <p>As the parent/guardian of the applicant, I agree to the above declaration.</p>
                <p>I agree to abide by the policies and rules set by the institution.</p>
              </div>
              </label>
            </div>

            <div className="mt-4">
              <label className="text-white block mb-2">Upload E-Signature of Yourself (PNG only):</label>
              <input
                type="file"
                name="studentSign"
                accept="image/png"
                onChange={handleFileChange}
                className="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1"
              />
            </div>

            <div className="mt-4">
              <label className="text-white block mb-2">Upload E-Signature of Parent/Guardian (PNG only):</label>
              <input
                type="file"
                name="parentSign"
                accept="image/png"
                onChange={handleFileChange}
                className="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1"
              />
            </div>

            {error && <p className="text-red-500">{error}</p>}

            <div className="mt-4 flex justify-between">
              <button
                type="button"
                onClick={handlePrev}
                className="rounded-md bg-blue-600 text-white py-2 px-4 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Prev
              </button>
              <button
                type="button"
                onClick={handleSubmit}
                className="rounded-md bg-blue-600 text-white py-2 px-4 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Statement;
