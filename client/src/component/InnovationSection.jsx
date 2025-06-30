import React from 'react';

const InnovationSection = () => {
  return (
    <div className="text-white px-4 py-12 sm:px-6 lg:px-8 lg:py-16 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">

          {/* Left Column */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-10">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-6 sm:mb-8 leading-tight">
                Driving Global
                <br />
                Innovation Through IT
              </h1>
            </div>

            <div className="bg-gray-800/60 backdrop-blur-md p-6 sm:p-8 rounded-md">
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                Vaipali empowers developers, businesses, and <br />innovators to break through the boundaries of traditional systems.
              </p>
              <div className="flex items-center justify-between">
                <button className="text-white hover:text-gray-300 text-sm sm:text-base transition">
                  Learn More
                </button>
                <img src="/People.png" alt="People" className="h-6 sm:h-8" />
              </div>
            </div>

            <div className="flex flex-wrap sm:flex-nowrap sm:space-x-8 gap-4 pt-4">
              <button className="text-gray-500 text-xs sm:text-sm font-medium tracking-wide">
                CREATION
              </button>
              <button className="text-gray-500 text-xs sm:text-sm font-medium tracking-wide">
                SECURITY
              </button>
              <button className="text-gray-500 text-xs sm:text-sm font-medium tracking-wide">
                SOLUTIONS
              </button>
            </div>
          </div>

          {/* Center Column */}
          <div className="lg:col-span-4 flex justify-center items-center">
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md aspect-square flex items-center justify-center">
              <img
                src="/whitebox.png"
                alt="Illustration"
                className="object-contain w-80 h-90"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-4 space-y-10 flex flex-col justify-between">
            <div className="pt-4 lg:pt-20">
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                "Empowering Innovators to Break Free from Traditional Boundaries."
              </p>
            </div>

            <div className="space-y-6">
              <div className="border-b border-gray-700 pb-4">
                <h3 className="text-white text-lg sm:text-xl font-medium mb-2">
                  IT solutions
                </h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                  Empowering Businesses worldwide with cutting-edge IT solutions and bespoke software development.
                </p>
              </div>

              <div className="border-b border-gray-700 pb-4">
                <h3 className="text-gray-400 text-lg sm:text-xl font-medium">
                  Software Consultancy
                </h3>
              </div>

              <div className="border-b border-gray-700 pb-4">
                <h3 className="text-gray-400 text-lg sm:text-xl font-medium">
                  Bespoke Development Services
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnovationSection;
