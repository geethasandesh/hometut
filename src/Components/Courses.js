import React from 'react';

const Courses = () => {
  const courses = [
    { name: 'Primary', description: 'Basic education for young learners.' },
    { name: 'Secondary', description: 'Education for middle school students.' },
    { name: 'Intermediate', description: 'Preparation for higher education.' },
    { name: 'College', description: 'Advanced education for university students.' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Our Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {courses.map((course, index) => (
          <div key={index} className="bg-gray-800 text-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">{course.name}</h2>
            <p>{course.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;