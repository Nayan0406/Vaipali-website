import React from 'react';

const ServiceSection = () => {
  return (
    <div className="min-h-screen text-white font-sans px-4 py-12 flex flex-col items-center lg:items-start">
      {/* Heading */}
      <div className="mt-7 w-full">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-2 md:mb-0 mt-2 text-center lg:text-left md:ml-24">
          Service
        </h1>
      </div>

      {/* Top Quote */}
      <div className="flex flex-col md:flex-row justify-center md:justify-end text-center w-full">
        <div className="md:w-1/2 text-gray-200 text-sm md:text-base text-center md:pr-32 mb-10">
          <span>
            “Vaipali is a seasoned IT solutions provider, <br />
            transforming ideas into impactful digital<br />
            realities through innovation and expertise.”
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 md:gap-16 w-full">
        {/* Left Card */}
        <div className="bg-gradient-to-br from-[#23222b] to-[#23222b]/80 shadow-lg p-8 w-full max-w-xs md:max-w-sm flex flex-col justify-between min-h-[220px] text-center lg:text-left md:ml-24">
          <p className="text-gray-200 text-sm mb-8">
            At Vaipali, we specialize in delivering bespoke IT solutions, software consultancy, and development services. With over 18 years of global experience, our team of visionary thinkers and skilled technologists is dedicated to transforming your ideas into impactful digital realities.
          </p>
          {/* Circles */}
          <div className="flex gap-2 justify-center lg:justify-end">
            <img src="/People.png" alt="People" />
          </div>
        </div>

        {/* Box */}
        <div className="flex justify-center w-full">
          <img src="/rectangle-box.png" alt="Service Visual" className="w-full max-w-3xl" />
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
