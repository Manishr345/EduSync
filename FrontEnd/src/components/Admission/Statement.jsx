import React, { useState } from 'react';
import AdmissionNav from './AdmissionNav';

const Statement = () => {
    const [photo, setPhoto] = useState(null);
    const [eSignature, setESignature] = useState(null);
    const [error, setError] = useState("");

    // Handle file upload for photos
    const handlePhotoUpload = (event) => {
        const file = event.target.files[0];

        // Validate if the file is a PNG
        if (file && file.type === 'image/png') {
            setPhoto(URL.createObjectURL(file)); // Create an object URL for the image
            setError("");
        } else {
            setError("Please upload a PNG file for the photo.");
            setPhoto(null); // Clear the photo if the file is invalid
        }
    };

    // Handle file upload for e-signature
    const handleESignatureUpload = (event) => {
        const file = event.target.files[0];

        // Validate if the file is a PNG
        if (file && file.type === 'image/png') {
            setESignature(URL.createObjectURL(file)); // Create an object URL for the image
            setError("");
        } else {
            setError("Please upload a PNG file for the e-signature.");
            setESignature(null); // Clear the signature if the file is invalid
        }
    };

    return (
        <div>
            <AdmissionNav />
            <form className='mt-5 w-full flex justify-center items-center'>
                <br></br>
                <div className='rounded-md bg-white text-black flex flex-col justify-center items-center px-3 py-5 sm:w-[400px]'>
                    <label htmlFor="photo">Upload Photo:</label>
                    <br />
                    <input
                        type="file"
                        id="photo"
                        accept="image/png"
                        onChange={handlePhotoUpload}
                        className='bg-blue-600 text-white rounded-md hover:bg-blue-700'
                    />
                    <br />
                    {/* Display photo preview if available */}
                    {photo && <img className='rounded-lg shadow-sm shadow-sky-300' src={photo} alt="Uploaded Photo" width="100" />}

                    <br></br>
                    <label htmlFor="signature">Upload E-Signature:</label>
                    <br />
                    <input
                        type="file"
                        id="signature"
                        accept="image/png"
                        onChange={handleESignatureUpload}
                        className='bg-blue-600 text-white rounded-md hover:bg-blue-700'
                    />
                    <br />
                    {/* Display e-signature preview if available */}
                    {eSignature && <img className='rounded-lg shadow-sm shadow-sky-300' src={eSignature} alt="Uploaded E-Signature" width="100" />}
                </div>
                {/* Display error message if file type is incorrect */}
                {error && <p className='text-red-500 text-center mt-2 shadow-sm shadow-red-300'>{error}</p>}
            </form>

            {/* 
            <div className='mt-10 flex justify-center items-center'>
                <div className=' bg-white text-black text-xl font-semibold w-[320px] rounded-md'>
                    <div className='pt-5 pb-5 text-center'>Important Notice</div>
                </div>
            </div>

            <div className='bg-white text-black px-3 py-5 flex justify-center items-center'>
                <p className='mt-2'>
                    By proceeding with the application, you acknowledge that you have read and accepted the terms and conditions outlined in the License and Agreement. Additionally, you are required to maintain at least 75% attendance in order to be eligible for further consideration. Please ensure that all requirements are met accordingly.
                </p>
            </div>
            */}
        </div>
    );
};

export default Statement;
