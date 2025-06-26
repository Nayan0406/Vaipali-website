import React from "react";

const AboutSection = () => (
  <div className="min-h-screen bg-[#18171d] text-white font-sans px-4 py-12 flex flex-col">
    {/* Heading */}
    <div className="mt-7">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 text-center md:text-left md:ml-24">
        About Us
      </h1>
    </div>

    {/* Top Quote */}
    <div className="flex flex-col md:flex-row justify-center md:justify-end mb-10 px-4">
      <div className="md:w-1/2 text-gray-200 text-sm md:text-base text-center md:text-right md:pr-24">
        “Vaipali is a seasoned IT solutions provider,<br />
        transforming ideas into impactful digital<br />
        realities through innovation and expertise.”
      </div>
    </div>

    {/* Main Content */}
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 w-full px-4">
      {/* Left Card */}
      <div className="bg-gradient-to-br from-[#23222b] to-[#23222b]/80 shadow-lg p-6 sm:p-8 w-full max-w-md flex flex-col justify-between min-h-[240px] md:min-h-[280px]">
        <p className="text-gray-200 text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed">
          At Vaipali, we specialize in delivering bespoke IT solutions, software
          consultancy, and development services. With over 18 years of global
          experience, our team of visionary thinkers and skilled technologists
          is dedicated to transforming your ideas into impactful digital realities.
        </p>
        {/* Circles */}
        <div className="flex gap-2 justify-end">
          <img src="/People.png" alt="People" className="w-10 h-10 object-contain" />
        </div>
      </div>

      {/* Image Boxes */}
      <div className="flex gap-4 flex-wrap justify-center md:justify-start">
        <img src="/box1.png" alt="box1" className="w-40 h-40 sm:w-52 sm:h-52 object-cover rounded-lg" />
        <img src="/box1.png" alt="box2" className="w-40 h-40 sm:w-52 sm:h-52 object-cover rounded-lg" />
      </div>
    </div>
  </div>
);

export default AboutSection;
