import React from 'react';

const testimonials = [
  {
    name: "Elena Major",
    role: "Founder, DeFiNest",
    text: "Cubix helped us scale our Defi platform beyond expectations. Their infrastructure is rock-solid, and the developer"
  },
  {
    name: "Jackson Rick",
    role: "Blockchain Engineer",
    text: "I've worked with several chains, but Cubix is hands down the most developer-friendly platform."
  },
  {
    name: "Priya Kelvin",
    role: "NFT Artist & Creator",
    text: "Cubix gave me the power to launch my own NFT collection with zero coding. The platform is intuitive."
  }
];

const HomeTestimonial = () => {
  return (
    <div className=" bg-[#0f0f11] text-white px-4 py-12 sm:px-6 lg:px-16 font-sans">

      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
          What Our Clients Are<br className="hidden sm:block" /> Saying
        </h1>
      </div>

      {/* Testimonials Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-[#23222b] rounded-xl shadow-xl p-6 flex flex-col transition hover:scale-[1.02] duration-300"
          >
            {/* Placeholder Avatar */}
            <div className="w-14 h-14  mb-4">
              <img src="/avtar.png" alt="" />
            </div>

            {/* Stars */}
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, idx) => (
                <svg key={idx} className="w-5 h-5 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <polygon points="10,1 12.59,7.36 19.51,7.64 14,12.14 15.82,18.99 10,15.27 4.18,18.99 6,12.14 0.49,7.64 7.41,7.36" />
                </svg>
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-gray-300 mb-6 text-sm sm:text-base">{t.text}</p>

            {/* Name & Role */}
            <div className="mt-auto">
              <span className="font-semibold text-lg">{t.name}</span>
              <div className="text-gray-400 text-sm">{t.role}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeTestimonial;
