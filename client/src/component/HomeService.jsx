import React from 'react';

const HomeService = () => {
  return (
    <div className="text-white font-sans">
      <div className="px-4 sm:px-6 lg:px-16 py-12 max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
            Choose the Service that<br />Offering to You
          </h1>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Whether you're just starting out or scaling your next big Web3 product, Vaipali offers
            flexible engagement models designed to meet you where you are.
          </p>
        </div>

        {/* Service Block 1 */}
        <div className="flex flex-col md:flex-row items-center gap-8 bg-[#23222b] shadow-xl mb-16 rounded-lg overflow-hidden">
          <div className="md:w-1/2 p-6 sm:p-8">
            <img
              src="/socialmedia1.png"
              alt="Social Media Marketing"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
          <div className="md:w-1/2 px-6 sm:px-8 py-6 space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold leading-snug">
              Empowering<br className="hidden md:block" />
              Businesses With Us By Using<br className="hidden md:block" />
              Social Media Marketing
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              At Vaipali, we believe that innovation is the catalyst for unlocking new possibilities.
              Our team of visionary thinkers and skilled technologists is dedicated to transforming your
              ideas into impactful digital solutions. With over 18 years of experience across the UK,
              Australia, and India, we specialize in delivering bespoke IT solutions, software consultancy,
              and development services that drive growth and efficiency.
            </p>
            <button className="bg-gradient-to-r from-[#a18aff] to-[#6f6bff] text-white px-6 py-2 rounded-lg font-semibold w-fit shadow-lg hover:scale-105 transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Service Block 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8 bg-[#23222b] shadow-xl mb-16 rounded-lg overflow-hidden">
          <div className="md:w-1/2 p-6 sm:p-8">
            <img
              src="/socialmedia2.png"
              alt="Web Development"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
          <div className="md:w-1/2 px-6 sm:px-8 py-6 space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold leading-snug">
              Enhance Your Businesses<br className="hidden md:block" />
              With Web Development
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              At Vaipali, we believe that innovation is the key to unlocking new possibilities. Our team
              of visionary thinkers and skilled technologists is dedicated to transforming your ideas into
              impactful digital solutions. With over 18 years of experience across the UK, Australia, and
              India, we specialize in delivering bespoke IT solutions, software consultancy, and
              development services that drive growth and efficiency.
            </p>
            <button className="bg-gradient-to-r from-[#a18aff] to-[#6f6bff] text-white px-6 py-2 rounded-lg font-semibold w-fit shadow-lg hover:scale-105 transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Service Block 3 */}
        <div className="flex flex-col md:flex-row items-center gap-8 bg-[#23222b] shadow-xl rounded-lg overflow-hidden">
          <div className="md:w-1/2 p-6 sm:p-8">
            <img
              src="/socialmedia3.png"
              alt="UI/UX Design"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
          <div className="md:w-1/2 px-6 sm:px-8 py-6 space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold leading-snug">
              Make Your Sites<br className="hidden md:block" />
              Attractive With Us By Using<br className="hidden md:block" />
              UI / UX Designing
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              At Vaipali, we believe that innovation is the catalyst for unlocking new possibilities.
              Our team of visionary thinkers and skilled technologists is dedicated to transforming your
              ideas into impactful digital solutions. With over 18 years of experience across the UK,
              Australia, and India, we specialize in delivering bespoke IT solutions, software consultancy,
              and development services that drive growth and efficiency.
            </p>
            <button className="bg-gradient-to-r from-[#a18aff] to-[#6f6bff] text-white px-6 py-2 rounded-lg font-semibold w-fit shadow-lg hover:scale-105 transition">
              Learn More
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HomeService;
