import React from 'react';

const Features = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Experienced Tutors',
              description: 'We provide highly qualified and experienced tutors for all subjects.',
            },
            {
              title: 'Flexible Timings',
              description: 'Learn at your own pace with flexible scheduling options.',
            },
            {
              title: 'Affordable Prices',
              description: 'Get quality education at reasonable and competitive prices.',
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="relative group p-6 bg-gray-100 rounded-lg shadow transition-all duration-500 overflow-hidden hover:bg-gradient-to-r hover:from-purple-200 hover:to-purple-200"
            >
              <div className="absolute -top-12 -left-12 w-24 h-24 rounded-full border-[6px] border-white opacity-50 transition-all duration-500 group-hover:top-0 group-hover:left-0 group-hover:w-40 group-hover:h-40 blur-md"></div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800 group-hover:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 group-hover:text-white">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
