import React, { useState } from 'react';
import AdmissionNav from './AdmissionNav';
import { useNavigate } from 'react-router-dom'

const Statement = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/admission/document');
    };
    const handleClick2 = () => {
        navigate('/admission/payment');
    };
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
                <div className='rounded-lg bg-gray-900 text-white flex flex-col justify-center items-center px-5 py-5 sm:w-[400px] mt-10'>
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
                    <br />
                    {/* Display error message if file type is incorrect */}
                    {error && <p className='py-5 px-2 text-red-500 text-center shadow-md shadow-red-500'>{error}</p>}
                    <div className="mt-10 flex justify-between gap-[150px]">
                        <button className="rounded-md bg-blue-600 text-white py-2 px-4 hover:bg-blue-700 transition-all duration-200" type="button" onClick={handleClick}>Prev</button>
                        <button className="rounded-md bg-blue-600 text-white py-2 px-4 hover:bg-blue-700 transition-all duration-200" type="button" onClick={handleClick2}>Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Statement;
