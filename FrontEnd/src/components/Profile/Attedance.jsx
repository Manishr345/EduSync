import React, { useEffect, useState } from 'react'
import Header from '../Home/Header';
import { useContext } from 'react';
import AdmissionContext from '../../contexts/admission/AdmissionContext';

const Attedance = () => {
    const context = useContext(AdmissionContext);
    const [student, setStudent] = useState(null);
    useEffect(() => {
        const func = async() => {
            const token = sessionStorage.getItem('studentToken');
        const response = await fetch('http://localhost:5000/student/fetchstudent',
            {
                method : 'POST',
                headers: {
                    'Content-Type':'application/json',
                    'token': token
                }
            }
        )
        const json = await response.json();
        console.log(json);
        sessionStorage.setItem('student', JSON.stringify(json))
        setStudent(JSON.parse(sessionStorage.getItem('student')));
        console.log(sessionStorage.getItem('student'));
        }
        func();
    })
    return (
        <>
            <Header></Header>
            <div className='w-[100vw] h-[40vh] flex justify-center'>
                {student?.courseName === 'BSC CS' ?
                    <div className='w-[90vw]  flex flex-col justify-center items-center text-white gap-4'>
                        <div className="container flex w-full  bg-blue-950 border rounded-md justify-between px-3 py-3">
                            <p>Java</p>
                            <p>present</p>
                            <p>absent</p>
                            <form action="">
                                <input type="file" name="docs" placeholder="name" />
                            </form>
                        </div>
                        <div className="container flex w-full bg-blue-950 border rounded-md justify-between px-3 py-3 ">
                            <p>Python</p>
                            <p>present</p>
                            <p>absent</p>
                            <form action="">
                                <input type="file" name="docs" placeholder="name" />
                            </form>
                        </div>
                        <div className="container flex w-full bg-blue-950 border rounded-md justify-between px-3 py-3 ">
                            <p>DCN</p>
                            <p>present</p>
                            <p>absent</p>
                            <form action="">
                                <input type="file" name="docs" placeholder="name" />
                            </form>
                        </div>

                    </div>
                    : student?.courseName === 'BSC IT' ?
                        <div className='w-[90vw]  flex flex-col justify-center items-center text-white gap-4'>
                            <div className="container flex w-full  bg-blue-950 border rounded-md justify-between px-3 py-3">
                                <p>iot</p>
                                <p>present</p>
                                <p>absent</p>
                                <form action="">
                                    <input type="file" name="docs" placeholder="name" />
                                </form>
                            </div>
                            <div className="container flex w-full bg-blue-950 border rounded-md justify-between px-3 py-3 ">
                                <p>c++</p>
                                <p>present</p>
                                <p>absent</p>
                                <form action="">
                                    <input type="file" name="docs" placeholder="name" />
                                </form>
                            </div>
                            <div className="container flex w-full bg-blue-950 border rounded-md justify-between px-3 py-3 ">
                                <p>AI</p>
                                <p>present</p>
                                <p>absent</p>
                                <form action="">
                                    <input type="file" name="docs" placeholder="name" />
                                </form>
                            </div>

                        </div>
                        : student?.courseName === 'BSC Animation' ?
                        <div className='w-[90vw]  flex flex-col justify-center items-center text-white gap-4'>
                            <div className="container flex w-full  bg-blue-950 border rounded-md justify-between px-3 py-3">
                                <p>photograph</p>
                                <p>present</p>
                                <p>absent</p>
                                <form action="">
                                    <input type="file" name="docs" placeholder="name" />
                                </form>
                            </div>
                            <div className="container flex w-full bg-blue-950 border rounded-md justify-between px-3 py-3 ">
                                <p>vfx</p>
                                <p>present</p>
                                <p>absent</p>
                                <form action="">
                                    <input type="file" name="docs" placeholder="name" />
                                </form>
                            </div>
                            <div className="container flex w-full bg-blue-950 border rounded-md justify-between px-3 py-3 ">
                                <p>shooting</p>
                                <p>present</p>
                                <p>absent</p>
                                <form action="">
                                    <input type="file" name="docs" placeholder="name" />
                                </form>
                            </div>

                        </div>
                        : student?.courseName === 'BSC Maths' ?
                        <div className='w-[90vw]  flex flex-col justify-center items-center text-white gap-4'>
                            <div className="container flex w-full  bg-blue-950 border rounded-md justify-between px-3 py-3">
                                <p>statistics</p>
                                <p>present</p>
                                <p>absent</p>
                                <form action="">
                                    <input type="file" name="docs" placeholder="name" />
                                </form>
                            </div>
                            <div className="container flex w-full bg-blue-950 border rounded-md justify-between px-3 py-3 ">
                                <p>algebra</p>
                                <p>present</p>
                                <p>absent</p>
                                <form action="">
                                    <input type="file" name="docs" placeholder="name" />
                                </form>
                            </div>
                            <div className="container flex w-full bg-blue-950 border rounded-md justify-between px-3 py-3 ">
                                <p>geometry</p>
                                <p></p>
                                <p>absent</p>
                                <form action="">
                                    <input type="file" name="docs" placeholder="name" />
                                </form>
                            </div>

                        </div>
                        : 
                        <div className='w-[90vw]  flex flex-col justify-center items-center text-white gap-4'>
                            <div className="container flex w-full  bg-blue-950 border rounded-md justify-between px-3 py-3">
                                <p>mechanical</p>
                                <p>present</p>
                                <p>absent</p>
                                <form action="">
                                    <input type="file" name="docs" placeholder="name" />
                                </form>
                            </div>
                            <div className="container flex w-full bg-blue-950 border rounded-md justify-between px-3 py-3 ">
                                <p>gravity</p>
                                <p>present</p>
                                <p>absent</p>
                                <form action="">
                                    <input type="file" name="docs" placeholder="name" />
                                </form>
                            </div>
                            <div className="container flex w-full bg-blue-950 border rounded-md justify-between px-3 py-3 ">
                                <p>electrical</p>
                                <p>present</p>
                                <p>absent</p>
                                <form action="">
                                    <input type="file" name="docs" placeholder="name" />
                                </form>
                            </div>

                        </div>
                    }
            </div>

        </>

    )
}

export default Attedance
