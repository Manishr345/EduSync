import React, { useEffect, useState } from 'react';
import Header from '../Home/Header';

export default function StudentsLog() {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [dayState, setDay] = useState('monday');

    const clickMeJava = () => {
        const attendence = async () => {
            const response = await fetch('http://localhost:5000/attendence', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'id': JSON.parse(sessionStorage.getItem('student')).id
                },
                body: JSON.stringify({day: dayState, subject: "java", isPresent: true})
            })
        }
        console.log(sessionStorage.getItem('student'))
        attendence();
    }
    const clickMePython = () => {
        const attendence = async () => {
            const response = await fetch('http://localhost:5000/attendence', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'id': JSON.parse(sessionStorage.getItem('student'))._id
                },
                body: JSON.stringify({day: dayState, subject: "python", isPresent: true})
            })
        }
        attendence();
    }
    const clickMeDCN = () => {
        const attendence = async () => {
            const response = await fetch('http://localhost:5000/attendence', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'id': JSON.parse(sessionStorage.getItem('student'))._id
                },
                body: JSON.stringify({day: dayState, subject: "dcn", isPresent: true})
            })
        }
        attendence();
    }
    const clickMeIOT = () => {
        const attendence = async () => {
            const response = await fetch('http://localhost:5000/attendence', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'id': JSON.parse(sessionStorage.getItem('student'))._id
                },
                body: JSON.stringify({day: dayState, subject: "iot", isPresent: true})
            })
        }
        attendence();
    }
    const clickMeCPP = () => {
        const attendence = async () => {
            const response = await fetch('http://localhost:5000/attendence', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'id': JSON.parse(sessionStorage.getItem('student'))._id
                },
                body: JSON.stringify({day: dayState, subject: "c++", isPresent: true})
            })
        }
        attendence();
    }
    const clickMeAI = () => {
        const attendence = async () => {
            const response = await fetch('http://localhost:5000/attendence', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'id': JSON.parse(sessionStorage.getItem('student'))._id
                },
                body: JSON.stringify({day: dayState, subject: "ai", isPresent: true})
            })
        }
        attendence();
    }
    const clickMeStatistics = () => {
        const attendence = async () => {
            const response = await fetch('http://localhost:5000/attendence', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'id': JSON.parse(sessionStorage.getItem('student'))._id
                },
                body: JSON.stringify({day: dayState, subject: "statistics", isPresent: true})
            })
        }
        attendence();
    }
    const clickMeAlgebra = () => {
        const attendence = async () => {
            const response = await fetch('http://localhost:5000/attendence', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'id': JSON.parse(sessionStorage.getItem('student'))._id
                },
                body: JSON.stringify({day: dayState, subject: "algebra", isPresent: true})
            })
        }
        attendence();
    }
    const clickMeMathspart2 = () => {
        const attendence = async () => {
            const response = await fetch('http://localhost:5000/attendence', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'id': JSON.parse(sessionStorage.getItem('student'))._id
                },
                body: JSON.stringify({day: dayState, subject: "mathspart2", isPresent: true})
            })
        }
        attendence();
    }
    const clickMeMechanical = () => {
        const attendence = async () => {
            const response = await fetch('http://localhost:5000/attendence', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'id': JSON.parse(sessionStorage.getItem('student'))._id
                },
                body: JSON.stringify({day: dayState, subject: "mechanical", isPresent: true})
            })
        }
        attendence();
    }
    const clickMeGravity= () => {
        const attendence = async () => {
            const response = await fetch('http://localhost:5000/attendence', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'id': JSON.parse(sessionStorage.getItem('student'))._id
                },
                body: JSON.stringify({day: dayState, subject: "gravity", isPresent: true})
            })
        }
        attendence();
    }
    const clickMeElectrical = () => {
        const attendence = async () => {
            const response = await fetch('http://localhost:5000/attendence', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'id': JSON.parse(sessionStorage.getItem('student'))._id
                },
                body: JSON.stringify({day: dayState, subject: "electrical", isPresent: true})
            })
        }
        attendence();
    }
    const clickMePhotograph = () => {
        const attendence = async () => {
            const response = await fetch('http://localhost:5000/attendence', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'id': JSON.parse(sessionStorage.getItem('student'))._id
                },
                body: JSON.stringify({day: dayState, subject: "photograph", isPresent: true})
            })
        }
        attendence();
    }
    const clickMeVFX = () => {
        const attendence = async () => {
            const response = await fetch('http://localhost:5000/attendence', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'id': JSON.parse(sessionStorage.getItem('student'))._id
                },
                body: JSON.stringify({day: dayState, subject: "vfx", isPresent: true})
            })
        }
        attendence();
    }
    const clickMeShooting = () => {
        const attendence = async () => {
            const response = await fetch('http://localhost:5000/attendence', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'id': JSON.parse(sessionStorage.getItem('student'))._id
                },
                body: JSON.stringify({day: dayState, subject: "shooting", isPresent: true})
            })
        }
        attendence();  
    }
    const changeMe = (e) => {
        setDay(e.target.value); 
    }


    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await fetch('http://localhost:5000/admin/fetchstudents', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                const json = await response.json();
                setStudents(json);
            } catch (error) {
                console.error('Error fetching students:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchStudents();
    }, []);

    const categories = ['BSC CS', 'BSC IT', 'BSC Animation', 'BSC Physics', 'BSC Maths'];
    const categorizedStudents = categories.reduce((acc, course) => {
        acc[course] = students.filter(student => student.courseName === course);
        return acc;
    }, {});

    return (
        <>
            <Header />
            <div className="min-h-screen bg-black text-white flex flex-col items-center py-10">
                {loading ? (
                    <div className="flex justify-center items-center h-screen">
                        <p className="text-xl font-semibold">Loading students data...</p>
                    </div>
                ) : (
                    <>
                        {categories.map((course) => (
                            <div key={course} className="w-full max-w-4xl bg-gray-900 rounded-lg shadow-lg p-6 mb-10">
                                <h2 className="text-2xl font-semibold text-center mb-6">{course} Students</h2>
                                {categorizedStudents[course]?.length > 0 ? (
                                    categorizedStudents[course].map((student) => (
                                        <div key={student.id} className="mb-6 p-4 border-b border-gray-700">
                                            <div className="flex justify-center mb-6">
                                                <img
                                                    src={`data:image/png;base64,${student?.passportSizePhoto || ''}`}
                                                    alt="Student"
                                                    className="w-40 h-40 rounded-full object-cover border-4 border-blue-500"
                                                />
                                            </div>
                                            <div className="flex justify-center">
                                                <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6 w-full max-w-2xl">
                                                    {[
                                                        ['Name', student?.fullName],
                                                        ['Date of Birth', student?.dob],
                                                        ['Gender', student?.gender],
                                                        ['Nationality', student?.nationality],
                                                        ['Contact', student?.contact],
                                                        ['Email', student?.email],
                                                        ['Address', student?.address],
                                                        ['Parent Name', student?.parentName],
                                                        ['Relation', student?.relation],
                                                        ['Parent Contact', student?.parentContact],
                                                        ['School Name', student?.schoolName],
                                                        ['College Name', student?.collegeName],
                                                        ['School Grade', student?.schoolGrade],
                                                        ['College Grade', student?.collegeGrade],
                                                        ['Course Name', student?.courseName],
                                                        ['Year', student?.year],
                                                        ['Fees', student?.fees],
                                                    ].map(([label, value]) => (
                                                        <p key={label} className="text-lg font-medium">
                                                            <span className="text-gray-400">{label}:</span> {value || 'N/A'}
                                                        </p>
                                                    ))}
                                                </div>
                                            </div>
                                            {student.courseName==='BSC CS'?
                                            <div className='flex w-full gap-3 justify-center items-center'>
                                                <h1 className='font-bold'>attendance</h1>
                                            <button onClick={clickMeJava } className='text-white bg-green-500 p-5'>java</button>
                                            <button onClick={clickMePython }className='text-white bg-green-500 p-5'>python</button>
                                            <button onClick={clickMeDCN }className='text-white bg-green-500 p-5'>dcn</button>
                                        </div> : student.courseName ==='BSC IT'?  <div className='flex w-full gap-3 justify-center items-center'>
                                        <h1 className='font-bold'>attendance</h1>
                                            <button onClick={clickMeIOT } className='text-white bg-green-500 p-5'>iot</button>
                                            <button onClick={clickMeCPP }className='text-white bg-green-500 p-5'>c++</button>
                                            <button onClick={clickMeAI }className='text-white bg-green-500 p-5'>ai</button>
                                        </div> :student.courseName==='BSC Maths'? <div className='flex w-full gap-3 justify-center items-center'>
                                        <h1 className='font-bold'>attendance</h1>
                                            <button className='text-white bg-green-500 p-5'>statistics</button>
                                            <button className='text-white bg-green-500 p-5'>algebra</button>
                                            <button className='text-white bg-green-500 p-5'>geometry</button>
                                            <button onClick={clickMeStatistics }className='text-white bg-green-500 p-5'>statistics</button>
                                            <button onClick={clickMeAlgebra }className='text-white bg-green-500 p-5'>algebra</button>
                                            <button onClick={clickMeMathspart2 }className='text-white bg-green-500 p-5'>maths part2</button>
                                        </div>: student.courseName ==='BSC Physics'?  <div className='flex w-full gap-3 justify-center items-center'>
                                        <h1 className='font-bold'>attendance</h1>
                                            <button onClick={clickMeMechanical } className='text-white bg-green-500 p-5'>mechanical</button>
                                            <button onClick={clickMeGravity} className='text-white bg-green-500 p-5'>gravity</button>
                                            <button onClick={clickMeElectrical} className='text-white bg-green-500 p-5'>electrical</button>
                                        </div> :  <div className='flex w-full gap-3 justify-center items-center'>
                                        <h1 className='font-bold'>attendance</h1>
                                            <button onClick={clickMePhotograph}className='text-white bg-green-500 p-5'>photograph</button>
                                            <button onClick={clickMeVFX}className='text-white bg-green-500 p-5'>vfx</button>
                                            <button onClick={clickMeShooting }className='text-white bg-green-500 p-5'>shooting</button>
                                        </div> }

                                        <input onChange={changeMe} className='text-black' type='text' name='day' placeholder='Enter Day'/>
                                             
                                        </div>
                                    ))
                                ) : (
                                    <div className="text-center">
                                        <p className="text-2xl font-semibold">No Students in {course} course</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </>
                )}
            </div>
        </>
    );
}
