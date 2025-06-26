import React from 'react';

const ServiceSection = () => {
  return (
    <div className="min-h-screen bg-[#18171d] text-white font-sans px-4 py-12 flex flex-col">
      {/* Heading */}
      <div className="mt-7">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-2 md:mb-0 md:ml-24 mt-12">Service</h1>
      </div>

      {/* Top Quote */}
      <div className="flex flex-col md:flex-row justify-end text-center mb-15">
        <div className="md:w-1/2 text-gray-200 text-sm md:text-base text-center md:pr-32 mb-7">
          <span>
            “Vaipali is a seasoned IT solutions provider, <br />transforming ideas into impactful digital<br /> realities through innovation and expertise.”
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 w-full">
        {/* Left Card */}
        <div className="bg-gradient-to-br from-[#23222b] to-[#23222b]/80 shadow-lg p-8 w-full max-w-xs md:max-w-sm flex flex-col justify-between min-h-[220px] md:ml-24">
          <p className="text-gray-200 text-sm mb-8">
            At Vaipali, we specialize in delivering bespoke IT solutions, software consultancy, and development services. With over 18 years of global experience, our team of visionary thinkers and skilled technologists is dedicated to transforming your ideas into impactful digital realities.
          </p>
          {/* Circles */}
          <div className="flex gap-2 justify-end">
            <img src="/People.png" alt="" />
          </div>
        </div>

        {/* Placeholder Squares */}
        <div className="flex gap-8 w-full justify-center">
          <img src="/rectangle-box.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;