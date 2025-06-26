import React from 'react';

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "UI & UX Design",
      description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
      image: "/owner3.png"
    },
    {
      id: 2,
      name: "UI & UX Design",
      description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
      image: "/owner1.png"
    },
    {
      id: 3,
      name: "UI & UX Design",
      description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
      image: "/owner2.png"
    },
    {
      id: 4,
      name: "UI & UX Design",
      description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
      image: "/owner4.png"
    },
    {
      id: 5,
      name: "UI & UX Design",
      description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
      image: "/owner3.png"
    },
    {
      id: 6,
      name: "UI & UX Design",
      description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
      image: "/owner1.png"
    },
    {
      id: 7,
      name: "UI & UX Design",
      description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
      image: "/owner2.png"
    },
    {
      id: 8,
      name: "UI & UX Design",
      description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
      image: "/owner4.png"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white px-4 py-16 sm:px-6 lg:px-12">
      {/* Header Section */}
      <div className="text-center mb-12 lg:mb-20 px-2">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-6">
          Our Team
        </h1>
        <p className="text-gray-300 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto font-light">
          "A seasoned team of technologists and consultants, transforming ideas into impactful digital solutions."
        </p>
      </div>

      {/* Team Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="text-center group">
              {/* Image Container */}
              <div className="relative mb-5">
                <div className="h-64 sm:h-72 lg:h-80 overflow-hidden rounded-3xl relative z-10">
                  <img
                    src={member.image}
                    alt={`Team member ${member.id}`}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                {/* Background Gradient Shape */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-3xl transform rotate-2 group-hover:rotate-3 transition-transform duration-300"></div>
              </div>

              {/* Text Content */}
              <div className="space-y-3 px-3 sm:px-5">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-medium text-white">
                  {member.name}
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-400 leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
