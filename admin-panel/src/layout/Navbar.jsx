import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; 

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinkClass = ({ isActive }) =>
    `block px-3 py-2 rounded-md hover:text-blue-400 transition ${
      isActive ? "text-blue-500 font-semibold" : ""
    }`;

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo/Title */}
        <h1 className="text-xl font-bold">Admin Panel</h1>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex gap-6">
          <NavLink to="/" className={navLinkClass}>Add Blog</NavLink>
          <NavLink to="/admin/add-product" className={navLinkClass}>Add Product</NavLink>
          <NavLink to="/admin/subscription-form" className={navLinkClass}>Subscription Form</NavLink>
          <NavLink to="/admin/contact-form" className={navLinkClass}>Contact Form</NavLink>
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 space-y-2">
          <NavLink to="/" className={navLinkClass} onClick={toggleMenu}>Add Blog</NavLink>
          <NavLink to="/admin/add-product" className={navLinkClass} onClick={toggleMenu}>Add Product</NavLink>
          <NavLink to="/admin/subscription-form" className={navLinkClass} onClick={toggleMenu}>Subscription Form</NavLink>
          <NavLink to="/admin/contact-form" className={navLinkClass} onClick={toggleMenu}>Contact Form</NavLink>
          <NavLink to="/admin/add-testimonial" className={navLinkClass} onClick={toggleMenu}>Client Testimonial</NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
