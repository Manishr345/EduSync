import React from 'react'
import AdmissionNav from './AdmissionNav'
const Documents = () => {

    return (
        <>
        <AdmissionNav/>


            <div className='w-full flex justify-center'>
                <div className="mt-4 flex  flex-col bg-gray-900 rounded-lg p-4 shadow-sm w-[90%]">
                    <h2 className="text-white font-bold text-2xl flex w-full justify-center items-center"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M320-240h320v-80H320v80Zm0-160h320v-80H320v80ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z"/></svg>Documents</h2>

                    <div className="mt-4" >
                        <label className="text-white" for="photo">Passport-size Photograph</label>
                        <input name='photo'  className="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1" type="file" accept=".png"  required />
                    </div>
                    <div className="mt-4" >
                        <label className="text-white" for="10marksheet">Mark Sheets 10th</label>
                        <input name='10marksheet'  className="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1" type="file" accept=".png"  required />
                    </div>
                    <div className="mt-4" >
                        <label className="text-white" for="12marksheet">Mark Sheets 12th</label>
                        <input name='12marksheet'  className="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1" type="file" accept=".png"  required />
                    </div>
                    <div className="mt-4" >
                        <label className="text-white" for="10certificate">10th Certificate</label>
                        <input name='10certificate'  className="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1" type="file" accept=".png"  required />
                    </div>
                    <div className="mt-4" >
                        <label className="text-white" for="12certificate">12th Certificate</label>
                        <input name='12certificate'  className="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1" type="file" accept=".png"  required />
                    </div>
                    <div className="mt-4" >
                        <label className="text-white" for="identityproof">Identity Proof(eg., Passport , Driver's License)</label>
                        <input name='identityproof'  className="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1" type="file" accept=".png" required />
                    </div>
                    <div className="mt-4" >
                        <label className="text-white" for="birthcertificate">Birth Certificate</label>
                        <input name='birthcertificate'  className="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1" type="file" accept=".png"  required />
                    </div>
                    <div className="mt-4" >
                        <label className="text-white" for="addressproof">Address Proof(eg., aadhar card,pan card)</label>
                        <input name='addressproof'  className="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1" type="file" accept=".png" required />
                    </div>

                    

                   

                    <div className="mt-4 flex justify-between">
                        <button className="rounded-md bg-blue-600 text-white py-2 px-4 hover:bg-blue-700 transition-all duration-200" type="button" >back</button>
                        <button className="rounded-md bg-blue-600 text-white py-2 px-4 hover:bg-blue-700 transition-all duration-200" type="button" >Submit</button>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Documents
