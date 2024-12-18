import React from 'react';

const Features = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-100 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-4">Experienced Tutors</h3>
            <p className="text-gray-600">We provide highly qualified and experienced tutors for all subjects.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-4">Flexible Timings</h3>
            <p className="text-gray-600">Learn at your own pace with flexible scheduling options.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-4">Affordable Prices</h3>
            <p className="text-gray-600">Get quality education at reasonable and competitive prices.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;