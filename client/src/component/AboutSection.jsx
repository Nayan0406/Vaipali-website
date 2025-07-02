import React from "react";

const AboutSection = () => (
  <div className="min-h-screen text-white font-sans px-4 py-12 flex flex-col items-center lg:items-start">
    {/* Heading */}
    <div className="mt-7 w-full">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-2 md:mb-0 text-center md:text-left mt-12 md:ml-24">
        About
      </h1>
    </div>

    {/* Top Quote */}
    <div className="flex flex-col md:flex-row justify-center text-center md:justify-end w-full">
      <div className="md:w-1/2 text-gray-200 text-sm md:text-base text-center md:pr-32 mb-7">
        <span>
          “Vaipali is a seasoned IT solutions provider, <br />transforming ideas into impactful digital<br /> realities through innovation and expertise.”
        </span>
      </div>
    </div>

    {/* Main Content */}
    <div className="flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-16 w-full">
      {/* Left Card */}
      <div className="bg-gradient-to-br from-[#23222b] to-[#23222b]/80 shadow-lg p-8 w-full max-w-xs md:max-w-sm flex flex-col justify-between min-h-[220px] md:ml-24 text-center md:text-left">
        <p className="text-gray-200 text-sm mb-8">
          At Vaipali, we specialize in delivering bespoke IT solutions, software consultancy, and development services. With over 18 years of global experience, our team of visionary thinkers and skilled technologists is dedicated to transforming your ideas into impactful digital realities.
        </p>
        <div className="flex gap-2 justify-center md:justify-end">
          <img src="/People.png" alt="People" />
        </div>
      </div>

      {/* Boxes: vertical on mobile, horizontal on large screens */}
      <div className="flex flex-col lg:flex-row items-center gap-4">
        <img src="/box1.png" alt="Box 1" className="w-40 md:w-48 lg:w-52" />
        <img src="/box1.png" alt="Box 2" className="w-40 md:w-48 lg:w-52" />
      </div>
    </div>
  </div>
);

export default AboutSection;
