import React, { useState } from 'react';
import AdmissionNav from './AdmissionNav';
import { useNavigate } from 'react-router-dom';

const Statement = () => {
  const navigate = useNavigate();
  const [photo, setPhoto] = useState(null);
  const [eSignature, setESignature] = useState(null);
  const [error, setError] = useState('');

  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'image/png') {
      setPhoto(URL.createObjectURL(file));
      setError('');
    } else {
      setError('Please upload a PNG file for the photo.');
      setPhoto(null);
    }
  };

  const handleESignatureUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'image/png') {
      setESignature(URL.createObjectURL(file));
      setError('');
    } else {
      setError('Please upload a PNG file for the e-signature.');
      setESignature(null);
    }
  };

  const handlePrev = () => {
    navigate('/admission/document');
  };

  const handleSubmit = () => {
    if (photo && eSignature) {
      console.log('Form submitted');
      navigate('/admission/payment');
    } else {
      setError('Please upload both a photo and an e-signature.');
    }
  };

  return (
    <>
      <AdmissionNav />
      <div className="w-full flex justify-center">
        <div className="mt-4 flex flex-col bg-gray-900 rounded-lg p-4 shadow-sm w-[90%]">
          <h2 className="text-white font-bold text-lg text-center">
            <i className="fa-solid fa-graduation-cap"></i>&nbsp;Statement
          </h2>

          <form className="space-y-6 mt-4">
            <div className="space-y-4">
              <label className="text-white flex items-start">
                <input type="checkbox" required className="mr-2" />
                <div className="ml-6 text-white">
                <p>*I hereby declare that the information and documents I have submitted are true and accurate to the best of my knowledge.*</p>
                <p>*I agree to abide by the rules and regulations of the college and understand that any false information or misconduct on my part may result in appropriate actions being taken against me.*</p>
                <p>*I understand that the submission of this application does not guarantee approval.*</p>
                <p>*I agree to abide by the policies and rules set by the institution.*</p>
                <p>*I confirm that I have reviewed all the information provided and understand that the application is final upon submission.*</p>
              </div>
              </label>
            </div>

            <div className="space-y-4">
              <label className="text-white flex items-start">
                <input type="checkbox" required className="mr-2" />
              <div className="ml-6 text-white">
                <p>*I have read and agreed to the Terms and Conditions.*</p>
                <p>*I consent to the processing of my data in accordance with the Privacy Policy.*</p>
              </div>
              </label>
            </div>

            <div className="space-y-4">
              <label className="text-white flex items-start">
                <input type="checkbox" required className="mr-2" />
               <div className="ml-6 text-white">
                <p>*As the parent/guardian of the applicant, I agree to the above declaration.*</p>
                <p>*I agree to abide by the policies and rules set by the institution.*</p>
              </div>
              </label>
            </div>

            <div className="mt-4">
              <label className="text-white block mb-2">Upload E-Signature of Yourself (PNG only):</label>
              <input type="file" accept="image/png" onChange={handlePhotoUpload} className="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1" />
            </div>

            <div className="mt-4">
              <label className="text-white block mb-2">Upload E-Signature of Parent/Guardian (PNG only):</label>
              <input type="file" accept="image/png" onChange={handleESignatureUpload} className="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1" />
            </div>

            {error && <p className="text-red-500">{error}</p>}

            <div className="mt-4 flex justify-between">
              <button
                type="button"
                onClick={handlePrev}
                className="rounded-md bg-blue-600 text-white py-2 px-4 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 hover:shadow-[-5px_-5px_15px_#0ea5e9] transition-all duration-200"
              >
                Prev
              </button>
              <button
                type="button"
                onClick={handleSubmit}
                className="rounded-md bg-blue-600 text-white py-2 px-4 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 hover:shadow-[-5px_-5px_15px_#0ea5e9] transition-all duration-200"
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
