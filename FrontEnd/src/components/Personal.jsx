import React from 'react'
import { useNavigate } from 'react-router-dom'

const Personal = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/educational'); 
    };

    return (
        <>
            <div className='w-full flex justify-center'>
                <div class="mt-4 flex  flex-col bg-gray-900 rounded-lg p-4 shadow-sm w-[90%]">
                    <h2 class="text-white font-bold text-lg">Personal Details</h2>

                    <div class="mt-4" >
                        <label class="text-white" for="name">full Name</label>
                        <input placeholder="Your full name" class="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1 " type="text" required />
                    </div>
                    <div class="mt-4">
                        <label class="text-white" for="dob">DOB</label>
                        <input class="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1" type="date" required />
                    </div>

                    <div class="mt-4 flex flex-row space-x-2">
                        <div class="flex-1">
                            <label class="text-white" for="gender">Gender</label>
                            <select class="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1" required>
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div class="flex-1">
                            <label class="text-white" for="nationality">Nationality</label>
                            <input placeholder="Nationality" class="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1" type="text" required />
                        </div>
                    </div>

                    <div class='mt-4 flex flex-row space-x-2'>
                        <div class="flex-1" >
                            <label class="text-white" for="contact">Contact</label>
                            <input placeholder="Your Contact" class="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1" type="text" required pattern="\d{10}" />
                        </div>
                        <div class="flex-1">
                            <label class="text-white" for="email">Email</label>
                            <input placeholder='your Email' class="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1" type="email" required />
                        </div>

                    </div>


                    <div class="mt-4">
                        <label class="text-white" for="address">Address</label>
                        <textarea placeholder="Your address" class="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1" id="address"></textarea>
                    </div>

                    <div class="mt-4 flex flex-row space-x-2">
                        <div class="flex-1">
                            <label class="text-white" for="city">City</label>
                            <input placeholder="Your city" class="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1" id="city" type="text" />
                        </div>

                        <div class="flex-1">
                            <label class="text-white" for="state">State</label>
                            <input placeholder="Your state" class="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1" id="state" type="text" />
                        </div>
                    </div>

                    <div class="mt-4 flex flex-row space-x-2">
                        <div class="flex-1">
                            <label class="text-white" for="zip">ZIP</label>
                            <input placeholder="Your ZIP code" class="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1" id="zip" type="text" />
                        </div>

                        <div class="flex flex-row space-x-2">
                            <div class="flex-1">
                                <label class="text-white" for="country">Country</label>
                                <select class="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1" id="country">
                                    <option value="">Select a country</option>

                                    <optgroup label="Africa">
                                        <option value="AF">Afghanistan</option>
                                        <option value="DZ">Algeria</option>
                                        <option value="AO">Angola</option>
                                        ...
                                        <option value="ZW">Zimbabwe</option>
                                    </optgroup>

                                    <optgroup label="Asia">
                                        <option value="AM">Armenia</option>
                                        <option value="AZ">Azerbaijan</option>
                                        <option value="BH">Bahrain</option>
                                        ...
                                        <option value="YE">Yemen</option>
                                    </optgroup>

                                    <optgroup label="South America">
                                        <option value="AR">Argentina</option>
                                        <option value="BO">Bolivia</option>
                                        <option value="BR">Brazil</option>
                                        ...
                                        <option value="VE">Venezuela</option>
                                    </optgroup>

                                    ...
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="mt-4" >
                        <label class="text-white" for="parentname">Parent Name</label>
                        <input placeholder="Your Parent name" class="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1" type="text" required />
                    </div>
                    <div class="mt-4 flex flex-row space-x-2">
                        <div class="flex-1" >
                            <label class="text-white" for="relation">Relation</label>
                            <input placeholder="Your Relation" class="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1" type="text" required />
                        </div>
                        <div class="flex-1" >
                            <label class="text-white" for="parentcontact">Parent Contact</label>
                            <input placeholder="Your Parent Contact" class="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1" type="text" required pattern="\d{10}" />
                        </div>
                    </div>
                    <div class="mt-4 flex flex-row space-x-2">
                        <div class="flex-1" >
                            <label class="text-white" for="parentemail">Parent Email</label>
                            <input placeholder="your Parent Email" class="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1" type="email" required />
                        </div>
                        <div class="flex-1" >
                            <label class="text-white" for="occupation">Occupation</label>
                            <input placeholder="your parent's Occupation" class="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1" type="text" required />
                        </div>

                    </div>
                    <div class="mt-4 flex justify-end">
                        <button class="bg-white text-black rounded-md px-4 py-1 hover:bg-blue-500 hover:text-white transition-all duration-200" type="submit" onClick={handleClick}>Submit</button>
                    </div>
                </div>

            </div>

        </>
    )
}
export default Personal
