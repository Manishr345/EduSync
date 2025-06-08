import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react';
import AdmissionContext from '../../contexts/admission/AdmissionContext';
import Header from '../Home/Header';
import AdmissionNav from './AdmissionNav';

const Personal = () => {
    const context = useContext(AdmissionContext);
    const [personal, setPersonal] = useState({ fullName: '', dob: '', gender: '', nationality: '', contact: '', email: '', address: '', parentName: '', relation: '', parentContact: '', parentEmail: '', occupation: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const validateForm = () => {
        if (personal.fullName.length < 8) {
            setError('Full name must be at least 8 characters long');
            return false;
        }
        if (personal.contact.length !== 10 || !/^\d+$/.test(personal.contact)) {
            setError('Contact number must be exactly 10 digits');
            return false;
        }
        if (personal.parentName.length < 8) {
            setError('Parent name must be at least 8 characters long');
            return false;
        }
        if (personal.parentContact.length !== 10 || !/^\d+$/.test(personal.parentContact)) {
            setError('Parent contact number must be exactly 10 digits');
            return false;
        }
        return true;
    };

    const handleClick = async () => {
        setError('');
        if (!validateForm()) {
            return;
        }

        try {
            console.log('Submitting personal details:', personal);
            await context.personalDetails(
                personal.fullName, 
                personal.dob, 
                personal.gender, 
                personal.nationality, 
                personal.contact, 
                personal.email, 
                personal.address, 
                personal.parentName, 
                personal.relation, 
                personal.parentContact, 
                personal.parentEmail, 
                personal.occupation
            );
            sessionStorage.setItem('pddone', "true");
            navigate('/admission/educational');
        } catch (err) {
            console.error('Form submission error:', err);
            if (err.message.includes('already exists')) {
                setError('This email or contact number is already registered. Please use different credentials.');
            } else {
                setError(err.message || 'Failed to submit personal details. Please check all fields and try again.');
            }
        }
    };

    const changeMe = (event) => {
        setPersonal({ ...personal, [event.target.name]: event.target.value });
        setError(''); // Clear error when user makes changes
    }

    return (
        <>
        <Header/>
        <AdmissionNav/>
            <div className='w-full flex justify-center'>
                <div className="mt-8 mb-10 flex flex-col bg-gray-900 rounded-lg p-4 shadow-sm w-[90%]">
                    <div className="flex justify-center items-center gap-2 mb-6">
                        <h2 className="text-2xl font-bold text-white"><i className="fa-solid fa-graduation-cap"></i>&nbsp;Personal Details</h2>
                    </div>

                    {error && (
                        <div className="mb-4 p-2 bg-red-500 text-white rounded">
                            {error}
                        </div>
                    )}

                    <div className="mt-4" >
                        <label className="text-white" htmlFor="name">Full Name (min 8 characters)</label>
                        <input onChange={changeMe} value={personal.fullName} name='fullName' placeholder="Your full name" className="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1" type="text" required />
                    </div>
                    <div className="mt-4">
                        <label className="text-white" htmlFor="dob">DOB</label>
                        <input onChange={changeMe} value={personal.dob} name='dob' className="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1" type="date" required />
                    </div>

                    <div className="mt-4 flex flex-row space-x-2">
                        <div className="flex-1">
                            <label className="text-white" htmlFor="gender">Gender</label>
                            <select onChange={changeMe} value={personal.gender} name='gender' className="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1" required>
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div className="flex-1">
                            <label className="text-white" htmlFor="nationality">Nationality</label>
                            <input onChange={changeMe} value={personal.nationality} name='nationality' placeholder="Nationality" className="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1" type="text" required />
                        </div>
                    </div>

                    <div className='mt-4 flex flex-row space-x-2'>
                        <div className="flex-1" >
                            <label className="text-white" htmlFor="contact">Contact (10 digits)</label>
                            <input onChange={changeMe} value={personal.contact} name='contact' placeholder="Your Contact" className="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1" type="text" required pattern="\d{10}" maxLength={10} />
                        </div>
                        <div className="flex-1">
                            <label className="text-white" htmlFor="email">Email</label>
                            <input onChange={changeMe} value={personal.email} name='email' placeholder='your Email' className="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1" type="email" required />
                        </div>
                    </div>

                    <div className="mt-4">
                        <label className="text-white" htmlFor="address">Address</label>
                        <textarea onChange={changeMe} value={personal.address} name='address' placeholder="Your address" className="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1" id="address"></textarea>
                    </div>

                    <div className="mt-4" >
                        <label className="text-white" htmlFor="parentname">Parent Name (min 8 characters)</label>
                        <input onChange={changeMe} value={personal.parentName} name='parentName' placeholder="Your Parent name" className="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1" type="text" required />
                    </div>
                    <div className="mt-4 flex flex-row space-x-2">
                        <div className="flex-1" >
                            <label className="text-white" htmlFor="relation">Relation</label>
                            <input onChange={changeMe} value={personal.relation} name='relation' placeholder="Your Relation" className="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1" type="text" required />
                        </div>
                        <div className="flex-1" >
                            <label className="text-white" htmlFor="parentcontact">Parent Contact (10 digits)</label>
                            <input onChange={changeMe} value={personal.parentContact} name='parentContact' placeholder="Your Parent Contact" className="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1" type="text" required pattern="\d{10}" maxLength={10} />
                        </div>
                    </div>
                    <div className="mt-4 flex flex-row space-x-2">
                        <div className="flex-1" >
                            <label className="text-white" htmlFor="parentemail">Parent Email</label>
                            <input onChange={changeMe} value={personal.parentEmail} name='parentEmail' placeholder="your Parent Email" className="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1" type="email" required />
                        </div>
                        <div className="flex-1" >
                            <label className="text-white" htmlFor="occupation">Occupation</label>
                            <input onChange={changeMe} value={personal.occupation} name='occupation' placeholder="your parent's Occupation" className="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1" type="text" required />
                        </div>
                    </div>
                    <br></br>
                    <div className="mt-4 flex justify-end">
                        <button className="rounded-md bg-blue-600 text-white py-2 px-4 hover:bg-blue-700 transition-all duration-200" type="button" onClick={handleClick}>Submit</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Personal