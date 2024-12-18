import React from 'react';

const Tutors = () => {
  const tutors = [
    {
      name: 'Ganesh',
      qualification: 'B-Tech. in Computers',
      image: '/path-to-images/john.jpg', // Add your image path here
    },
    {
      name: 'Sandesh',
      qualification: 'B-Tech in AI & ML',
      image: '/path-to-images/jane.jpg', // Add your image path here
    },
    {
      name: 'Harsha',
      qualification: ' B-Tech in Ai & Ml',
      image: '/path-to-images/mark.jpg', // Add your image path here
    },
    {
      name: 'Goutham',
      qualification: 'B.Tech in Computer Science',
      image: '/path-to-images/emily.jpg', // Add your image path here
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Our Tutors</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-center">
        {tutors.map((tutor, index) => (
          <div key={index} className="text-center">
            {/* Circular Image */}
            <img
              src={tutor.image}
              
              className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
            />
            {/* Tutor Name */}
            <h2 className="text-xl font-semibold">{tutor.name}</h2>
            {/* Qualification */}
            <p className="text-sm text-gray-500">{tutor.qualification}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tutors;
