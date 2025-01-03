import React, { useState } from 'react';
import AdmissionNav from './AdmissionNav';
import { useNavigate } from 'react-router-dom';

const Documents = () => {
    const navigate = useNavigate();

    const [files, setFiles] = useState({
        passportSizePhoto: null,
        marksheet10th: null,
        marksheet12th: null,
        certificate10th: null,
        certificate12th: null,
        identityProof: null,
        birthCertificate: null,
        addressProof: null,
    });

    const handleFileChange = (e) => {
        const { name, files: fileList } = e.target;
        setFiles((prevFiles) => ({
            ...prevFiles,
            [name]: fileList[0], // Store the selected file
        }));
    };

    const handleClick = () => {
        navigate('/admission/course');
    };

    const handleClick2 = async () => {
        const formData = new FormData();

        // Append all files to the FormData object
        Object.entries(files).forEach(([key, file]) => {
            if (file) {
                formData.append(key, file);
            }
        });

        try {
            const response = await fetch('http://localhost:5000/admission/documents', {
                method: 'POST',
                body: formData,
            });
            const json = await response.json();
            console.log(json);
        } catch (error) {
            console.error('Error uploading documents:', error);
        }
    };

    return (
        <>
            <AdmissionNav />

            <div className="w-full flex justify-center">
                <div className="mt-4 flex flex-col bg-gray-900 rounded-lg p-4 shadow-sm w-[90%]">
                    <h2 className="text-white font-bold text-2xl flex w-full justify-center items-center">
                        Documents
                    </h2>

                    {/* File Inputs */}
                    {Object.keys(files).map((key) => (
                        <div className="mt-4" key={key}>
                            <label className="text-white" htmlFor={key}>
                                {key.replace(/([A-Z])/g, ' $1')} {/* Format the key to a readable label */}
                            </label>
                            <input
                                name={key}
                                onChange={handleFileChange}
                                className="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1"
                                type="file"
                                accept=".png"
                            />
                        </div>
                    ))}

                    <div className="mt-4 flex justify-between">
                        <button
                            className="rounded-md bg-blue-600 text-white py-2 px-4 hover:bg-blue-700 transition-all duration-200"
                            type="button"
                            onClick={handleClick}
                        >
                            Prev
                        </button>
                        <button
                            className="rounded-md bg-blue-600 text-white py-2 px-4 hover:bg-blue-700 transition-all duration-200"
                            type="button"
                            onClick={handleClick2}
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Documents;
