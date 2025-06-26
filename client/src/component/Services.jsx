import React from "react";

const services = [
  {
    title: "Digital branding",
    desc: "Crafting cohesive digital identities that resonate, engage, and elevate your brand across all platforms.",
    icon: "/digital-branding.png",
  },
  {
    title: "Creative solutions",
    desc: "Innovative, tailored IT solutions that transform your ideas into impactful digital realities.",
    icon: "/draw.png",
  },
  {
    title: "Marketing solutions",
    desc: "Strategic marketing solutions that amplify your brand’s reach and drive measurable business growth.",
    icon: "/marketing-logo.png",
  },
  {
    title: "Business analytics",
    desc: "Transforming data into actionable insights to drive informed decisions and business growth.",
    icon: "/analytic-logo.png",
  },
  {
    title: "UI & UX Design",
    desc: "Designing intuitive and engaging digital experiences that align with your brand and delight your users.",
    icon: "/desktop-logo.png",
  },
  {
    title: "Web Development",
    desc: "Building responsive, scalable, and secure websites that drive business growth and enhance user engagement.",
    icon: "/web-logo.png",
  },
  {
    title: "Blockchain",
    desc: "Delivering secure, scalable blockchain solutions that drive innovation and trust in your digital ecosystem.",
    icon: "/blockchain-logo.png",
  },
  {
    title: "Ethereum",
    desc: "Empowering businesses with secure, scalable Ethereum solutions for smart contracts, DeFi, NFTs, and beyond.",
    icon: "/etherum-logo.png",
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-gradient-to-r from-[#1a1a2e] to-[#1e1e2f] text-white py-20 px-4">
      {/* Heading */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Services</h2>
        <p className="text-gray-400 text-sm md:text-base leading-relaxed">
          “Delivering bespoke IT solutions, software consultancy, and development services to<br />
          transform your ideas into impactful digital realities.”
        </p>
      </div>

      {/* Services Grid (First 6 only) */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {services.slice(0, 6).map((service, idx) => (
          <div key={idx} className="bg-[#2a2a34] p-6 relative group rounded-lg">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-20 h-20 flex items-center justify-center shadow-md pb-6">
              <img src={service.icon} alt={service.title} className="w-full h-full object-contain" />
            </div>
            <div className="mt-8 text-center">
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-gray-300 mb-6">{service.desc}</p>
              <button className="bg-gradient-to-r from-purple-500 to-orange-400 text-white text-sm font-medium px-4 py-2 rounded-full hover:opacity-90 transition">
                Discuss for Projects →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Last Two Centered Cards */}
      <div className="mt-16 flex flex-col md:flex-row justify-center items-center gap-8">
        {services.slice(6).map((item, idx) => (
          <div
            key={idx}
            className="bg-[#2a2a34] p-6 relative group rounded-lg w-full max-w-sm"
          >
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-20 h-20 flex items-center justify-center shadow-md pb-6">
              <img src={item.icon} alt={item.title} className="w-full h-full object-contain" />
            </div>
            <div className="mt-8 text-center">
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-300 mb-6">{item.desc}</p>
              <button className="bg-gradient-to-r from-purple-500 to-orange-400 text-white text-sm font-medium px-4 py-2 rounded-full hover:opacity-90 transition">
                Discuss for Projects →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
