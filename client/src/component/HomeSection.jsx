import React from "react";

const HomeSection = () => {
  return (
    <section className="text-white py-16 px-4 sm:px-8 md:px-12 lg:px-24 min-h-screen">
      {/* Headline */}
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
          "Building Tomorrow's Tech,<br />
          <span className="block mt-2">One Block at a Time."</span>
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 items-start gap-12">
        {/* Left Column */}
        <div className="space-y-6 flex flex-col justify-between">
          <p className="text-gray-300 text-sm sm:text-base max-w-md">
            Our team of seasoned professionals, with <br />over 18 years of experience across the <br />UK, Australia, and India, collaborates <br />closely with clients to develop customized <br />software that aligns with their unique <br />business goals.
          </p>

          <button className="bg-gradient-to-r from-[#aa8fff] to-[#ffb4ab] text-white px-6 py-2 rounded-md text-sm w-fit">
            Get Started
          </button>

          {/* Quote Box */}
          <div className="bg-[#1a1a1f] p-4 text-sm max-w-xs rounded">
            <p className="italic text-gray-300 ">"YOUR VISION,<br />OUR CODE."</p>
            <p className="text-xs text-gray-400 mt-4">Follow us on :</p>
            <div className="flex gap-4 mt-3">
              <img src="/Instagram.png" alt="Instagram" className="h-8 w-8" />
              <img src="/Dribble.png" alt="Dribbble" className="h-8 w-8" />
              <img src="/Behance.png" alt="Behance" className="h-8 w-8" />
            </div>
          </div>
        </div>

        {/* Middle Column - Cube */}
        <div className="flex justify-center">
          <img
            src="/cube.png"
            alt="Cube"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
          />
        </div>

        {/* Right Column */}
        <div className="space-y-8 text-sm sm:text-base">
          {/* Validators */}
          <div className="flex items-center gap-3">
            <img src="/Icon.png" alt="Shield Icon" className="h-10 w-10" />
            <div>
              <p className="italic text-xs text-gray-300">VALIDATORS</p>
              <p className="italic text-xs text-gray-300">SECURING NETWORK</p>
            </div>
          </div>

          {/* Stats */}
          <div className="space-y-6 border-l-2 border-purple-500 pl-6 mt-6">
            <div>
              <h3 className="text-3xl font-bold text-white">500+</h3>
              <p className="text-gray-400 text-xs mt-1">
                "From Fortune 500s to fintech disruptors, we bring proven expertise."
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">18+</h3>
              <p className="text-gray-400 text-xs mt-1">
                "Empowering Businesses with Over 18 Years of IT Excellence."
              </p>
            </div>

            <div>
              <p className="text-white font-semibold uppercase text-xs mt-4">Cross-Industry Knowledge</p>
            </div>

            <div>
              <p className="text-white font-semibold uppercase text-xs mt-2">End-to-End Ownership</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;


