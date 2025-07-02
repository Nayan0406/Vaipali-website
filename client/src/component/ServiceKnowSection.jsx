import React from 'react';
import { Search, Waves, Grid3X3 } from 'lucide-react';

const KnowMoreSection = () => {
  const features = [
    {
      title: "Discover the Future",
      description: "Explore the high-tech, low-life world where the lines between humanity",
      icon: <img src='/group1.png' />,
    },
    {
      title: "Explore Features",
      description: "Explore the high-tech, low-life world where the lines between humanity",
      icon: <img src='/group2.png' />,
    },
    {
      title: "Stay Connected",
      description: "Explore the high-tech, low-life world where the lines between humanity",
      icon: <img src='/group3.png' />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b text-white">
      {/* Hero Section */}
      <div className=" pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
            Know more about
            <br />
            <span className="text-gray-300">Vaipali</span>
          </h1>

          <div className="space-y-2 max-w-2xl mx-auto">
            <p className="text-gray-400 text-sm md:text-base">
              "Empowering businesses to thrive through innovative IT solutions."
            </p>
            <p className="text-gray-400 text-sm md:text-base">
              "Transforming ideas into impactful digital realities with over 15 years of expertise."
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="bg-gradient-to-r from-[#1a1a2e] to-[#1e1e2f] text-white py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="flex items-start space-x-4 p-6 "
            >
              <div className="rounded-lg font-semibold">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="text-sm text-gray-300 mt-1">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default KnowMoreSection;