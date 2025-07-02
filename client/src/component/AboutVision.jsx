import React from 'react';

const AboutVision = () => {
  return (
    <div className="min-h-screen text-white px-4 py-12 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-6">
          Vision & Mission
        </h1>
        <div className="max-w-2xl mx-auto space-y-3">
          <p className="text-sm sm:text-base lg:text-lg text-gray-300 font-light">
            "Empowering businesses to thrive through innovative IT solutions."
          </p>
          <p className="text-sm sm:text-base lg:text-lg text-gray-300 font-light">
            "Transforming ideas into impactful digital realities with over 18 years of expertise."
          </p>
        </div>
      </div>

      {/* Vision and Mission Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
  {/* Vision Card */}
  <div className="bg-gray-800/80 backdrop-blur-sm p-6 sm:p-8 lg:p-10 rounded-lg shadow-md">
    <div className="text-center">
      <div className="mb-6">
        <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto flex items-center justify-center">
          <img src="/eye.png" alt="Vision Icon" className="h-full w-auto" />
        </div>
      </div>
      <h2 className="text-2xl sm:text-3xl font-medium mb-4">Our Vision</h2>
      <div className="flex justify-center mb-6">
        <img src="/line.png" alt="Divider" />
      </div>
      <p className="text-sm sm:text-base lg:text-lg text-gray-300 font-light leading-relaxed">
        "To be the trusted global partner delivering<br />
        transformative IT solutions that empower<br />
        businesses to innovate, scale, and thrive in the digital era."
      </p>
    </div>
  </div>

  {/* Mission Card */}
  <div className="bg-gray-800/80 backdrop-blur-sm p-6 sm:p-8 lg:p-10 rounded-lg shadow-md">
    <div className="text-center">
      <div className="mb-6">
        <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto flex items-center justify-center">
          <img src="/cough.png" alt="Mission Icon" className="h-full w-auto" />
        </div>
      </div>
      <h2 className="text-2xl sm:text-3xl font-medium mb-4">Our Mission</h2>
      <div className="flex justify-center mb-6">
        <img src="/line.png" alt="Divider" />
      </div>
      <p className="text-sm sm:text-base lg:text-lg text-gray-300 font-light leading-relaxed">
        "At Vaipali, we harness over 18 years of global experience to provide<br />
        bespoke IT solutions, software consultancy, and development services.<br />
        Our mission is to transform ideas into impactful digital realities, enabling businesses to
        achieve their goals through innovation and excellence."
      </p>
    </div>
  </div>
</div>

    </div>
  );
};

export default AboutVision;
