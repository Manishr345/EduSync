import React from 'react';
import Header from '../components/Home/Header';

const courses = [
  {
    name: "Computer Science",
    subjects: ["Algorithms", "Data Structures", "Operating Systems", "Databases"],
    fee: "1,80,000",
    duration: "4 years",
    image: "CS.gif",
  },
  {
    name: "Animation",
    subjects: ["3D Modeling", "Visual Effects", "Character Design"],
    fee: "9,00,000",
    duration: "3 years",
    image: "Animation.gif",
  },
  {
    name: "Physics",
    subjects: ["Quantum Mechanics", "Thermodynamics", "Electrodynamics"],
    fee: "1,20,000",
    duration: "3 years",
    image: "Physics.gif",
  },
  {
    name: "Information Technology",
    subjects: ["Networking", "Cybersecurity", "Cloud Computing"],
    fee: "1,68,000",
    duration: "4 years",
    image: "IT.gif",
  },
  {
    name: "Mathematics",
    subjects: ["Calculus", "Linear Algebra", "Differential Equations"],
    fee: "1,23,000",
    duration: "3 years",
    image: "Maths.gif",
  },
  {
    name: "AI/ML",
    subjects: ["Introduction to AI", " Machine Learning Basics", "Natural Language Processing"],
    fee: "2,20,000",
    duration: "3 years",
    image: "AI.gif",
  },
  {
    name: "DS",
    subjects: ["Statistics for Data Science", "Big Data Analytic", "Data Privacy and Security"],
    fee: "2,00,000",
    duration: "3 years",
    image: "DS.gif",
  },
  {
    name: "Mechanical",
    subjects: ["Engineering Mechanics", "Thermodynamics", "Fluid Mechanics"],
    fee: "1,50,000",
    duration: "3 years",
    image: "Mechanical.gif",
  },
  {
    name: "Cloud Computaion",
    subjects: ["Cloud Architecture and Design", "Distributed Systems", "AWS (Amazon Web Services) Fundamentals"],
    fee: "1,25,000",
    duration: "3 years",
    image: "CloudGIF.gif",
  },
];

const Courses = () => {
  return (
    <>
      <Header />
      <div className="p-10 bg-gray-900 text-white">
        <div className="container mx-auto">
          <h1 className="text-6xl font-bold text-center mb-10">Our Courses</h1>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course, index) => (
              <div
                key={index}
                className="p-5 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div
                  className="h-40 w-full rounded-lg mb-4"
                  style={{
                    backgroundImage: `url(${course.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
                <h2 className="text-2xl font-bold mb-2">{course.name}</h2>
                <ul className="space-y-2">
                  <li>
                    <strong>Subjects:</strong> {course.subjects.join(", ")}
                  </li>
                  <li>
                    <strong>Fee:</strong> {course.fee}
                  </li>
                  <li>
                    <strong>Duration:</strong> {course.duration}
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;
