import React from "react";
import {
  FaDribbble,
  FaBehance,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0f0f11] text-white px-6 md:px-20 py-12">
      <div className="flex ml-30 mb-10">
            <img src="/logo.png" alt="" className="h-6" />
            <span>Vaipali</span>
          </div>
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12">
        {/* Logo & Contact Info */}
        <div className="space-y-6">
          
          <div>
            <p className="text-sm font-semibold">Email</p>
            <p className="text-sm text-gray-400">support@vaipalipylt.io</p>
          </div>
          <div>
            <p className="text-sm font-semibold">Address</p>
          <div className="text-sm text-gray-400">
            <p className="font-semibold text-white">UK</p>
            <p>1200 Blockchain Avenue, Suite 420, San Francisco</p>
          </div><br/>
          <div className="text-sm text-gray-400">
            <p className="font-semibold text-white">INDIA</p>
            <p>1200 Blockchain Avenue, Nagpur Maharashtra</p>
          </div>
          </div>
          
        </div>

       
        <div className="space-y-4">
          <div>
            <p className="text-sm font-semibold">Phone Number</p>
            <p className="text-sm text-gray-400">+1 (415) 555-8743</p>
          </div>
        </div>

        {/* Explore */}
        <div className="space-y-2">
          <p className="text-sm font-semibold">Explore</p>
          {["About Us", "Cases", "Services", "Blogs", "Contact"].map((item) => (
            <p key={item} className="text-sm text-gray-400 hover:text-white cursor-pointer">
              {item}
            </p>
          ))}
        </div>

        {/* Resources */}
        <div className="space-y-2">
          <p className="text-sm font-semibold">Resources</p>
          {["Help Center", "Developer Docs", "API Access"].map((item) => (
            <p key={item} className="text-sm text-gray-400 hover:text-white cursor-pointer">
              {item}
            </p>
          ))}
        </div>

        {/* About */}
        <div>
          <h3 className="text-sm font-semibold leading-6">
            Vaipali – Crafting Tailored IT <br />
            Solutions for a Digital <br />
            Tomorrow
          </h3>
          <p className="mt-4 text-sm text-gray-400">
            We specialize in delivering bespoke IT solutions and software
            consultancy services that drive innovation and efficiency.
          </p>

          <div className="flex gap-4 mt-6">
            <div className="p-2 rounded-full bg-gradient-to-br from-purple-500 to-pink-500">
              <FaDribbble className="text-white" />
            </div>
            <div className="p-2 rounded-full bg-gradient-to-br from-purple-500 to-pink-500">
              <FaBehance className="text-white" />
            </div>
            <div className="p-2 rounded-full bg-gradient-to-br from-purple-500 to-pink-500">
              <FaInstagram className="text-white" />
            </div>
            <div className="p-2 rounded-full bg-gradient-to-br from-purple-500 to-pink-500">
              <FaTwitter className="text-white" />
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-gray-400">
        Copyright © 2024 Vaipali. Design and Developed with love by{" "}
        <span>TARS TECHNOLOGIES</span>
      </div>
    </footer>
  );
};

export default Footer;
