import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo/Title */}
        <h1 className="text-xl font-bold">Admin Panel</h1>

        {/* Navigation Links */}
        <div className="flex gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-blue-400 transition ${
                isActive ? "text-blue-500 font-semibold" : ""
              }`
            }
          >
            Add Blog
          </NavLink>
          <NavLink
            to="/admin/add-product"
            className={({ isActive }) =>
              `hover:text-blue-400 transition ${
                isActive ? "text-blue-500 font-semibold" : ""
              }`
            }
          >
            Add Product
          </NavLink>
          <NavLink
            to="/admin/subscription-form"
            className={({ isActive }) =>
              `hover:text-blue-400 transition ${
                isActive ? "text-blue-500 font-semibold" : ""
              }`
            }
          >
            Subscription Form
          </NavLink>
          <NavLink
            to="/admin/contact-form"
            className={({ isActive }) =>
              `hover:text-blue-400 transition ${
                isActive ? "text-blue-500 font-semibold" : ""
              }`
            }
          >
            Contact Form
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
