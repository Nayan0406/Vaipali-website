
import React from "react";
import {
  FaDribbble,
  FaBehance,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0f0f11] text-white px-4 sm:px-6 md:px-20 py-8 md:py-12">
      {/* Logo Section - Mobile Centered */}
      <div className="flex items-center justify-center lg:justify-start mb-8 md:mb-10">
        <img src="/logo.png" alt="Vaipali Logo" className="h-6 mr-2" />
        <span className="font-semibold">Vaipali</span>
      </div>
      
      <div className="max-w-screen-xl mx-auto">
        {/* Mobile: Stack vertically, Desktop: Grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12">
          
          {/* Contact Info */}
          <div className="space-y-4 md:space-y-6 sm:col-span-2 lg:col-span-1 text-center lg:text-left">
            <div>
              <p className="text-sm font-semibold mb-1">Email</p>
              <p className="text-sm text-gray-400 break-all">support@vaipalipylt.io</p>
            </div>
            
            <div>
              <p className="text-sm font-semibold mb-2">Phone Number</p>
              <p className="text-sm text-gray-400">+1 (415) 555-8743</p>
            </div>
          </div>

          {/* Address */}
          <div className="space-y-4 md:space-y-6 sm:col-span-2 lg:col-span-1 text-center lg:text-left">
            <div>
              <p className="text-sm font-semibold mb-2">Address</p>
              <div className="text-sm text-gray-400 space-y-3">
                <div>
                  <p className="font-semibold text-white mb-1">UK</p>
                  <p className="leading-relaxed">1200 Blockchain Avenue, Suite 420, San Francisco</p>
                </div>
                <div>
                  <p className="font-semibold text-white mb-1">INDIA</p>
                  <p className="leading-relaxed">1200 Blockchain Avenue, Nagpur Maharashtra</p>
                </div>
              </div>
            </div>
          </div>

          {/* Explore */}
          <div className="space-y-3 sm:col-span-1 lg:col-span-1 text-center lg:text-left">
            <p className="text-sm font-semibold mb-3">Explore</p>
            <div className="space-y-2">
              {["About Us", "Cases", "Services", "Products", "Blogs", "Contact"].map((item, index) => (
                <a 
                  key={item} 
                  href={`/${item.toLowerCase().replace(" ", "")}`}
                  className="text-sm text-gray-400 hover:text-white cursor-pointer block transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div className="space-y-3 sm:col-span-1 lg:col-span-1 text-center lg:text-left">
            <p className="text-sm font-semibold mb-3">Resources</p>
            <div className="space-y-2">
              {["Help Center", "Developer Docs", "API Access"].map((item) => (
                <p key={item} className="text-sm text-gray-400 hover:text-white cursor-pointer transition-colors duration-200">
                  {item}
                </p>
              ))}
            </div>
          </div>

          {/* About Section */}
          <div className="sm:col-span-2 lg:col-span-1 text-center lg:text-left">
            <h3 className="text-sm font-semibold leading-6 mb-4">
              Vaipali – Crafting Tailored IT Solutions for a Digital Tomorrow
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              We specialize in delivering bespoke IT solutions and software
              consultancy services that drive innovation and efficiency.
            </p>

            {/* Social Media Icons */}
            <div className="flex gap-3 justify-center lg:justify-start">
              <div className="p-2 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 hover:scale-110 transition-transform duration-200 cursor-pointer">
                <FaDribbble className="text-white text-sm" />
              </div>
              <div className="p-2 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 hover:scale-110 transition-transform duration-200 cursor-pointer">
                <FaBehance className="text-white text-sm" />
              </div>
              <div className="p-2 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 hover:scale-110 transition-transform duration-200 cursor-pointer">
                <FaInstagram className="text-white text-sm" />
              </div>
              <div className="p-2 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 hover:scale-110 transition-transform duration-200 cursor-pointer">
                <FaTwitter className="text-white text-sm" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-800 mt-8 md:mt-12 pt-6 text-center text-xs sm:text-sm text-gray-400">
        <p className="leading-relaxed">
          Copyright © 2024 Vaipali. Design and Developed with love by{" "}
          <span className="text-white font-medium">TARS TECHNOLOGIES</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;