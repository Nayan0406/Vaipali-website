import React from 'react';

const OwnerSection = () => {
  const owners = [
    {
      id: 1,
      name: "UI & UX Design",
      description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
      image: "/owner1.png",
    },
    {
      id: 2,
      name: "Web Development",
      description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
      image: "/owner2.png",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white px-4 py-16 sm:px-6 lg:px-12">
      {/* Header */}
      <div className="text-center mb-16 px-4">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-6">
          Our Owner
        </h1>
        <p className="max-w-3xl mx-auto text-gray-300 text-sm sm:text-base lg:text-lg font-light">
          "Visionary leaders driving innovation and excellence in bespoke IT solutions."
        </p>
      </div>

      {/* Owners Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-4 sm:px-6 lg:px-0">
          {owners.map((owner) => (
            <div key={owner.id} className="flex flex-col items-center text-center group">
              {/* Image Wrapper */}
              <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
                <div className="overflow-hidden rounded-3xl relative z-10">
                  <img
                    src={owner.image}
                    alt={owner.name}
                    className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                {/* Gradient Shape Background */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
              </div>

              {/* Text Content */}
              <div className="space-y-3 px-4 mt-6">
                <h3 className="text-2xl md:text-3xl font-medium text-white">
                  {owner.name}
                </h3>
                <p className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-md mx-auto">
                  {owner.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OwnerSection;
