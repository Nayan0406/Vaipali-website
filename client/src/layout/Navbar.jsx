import React, { useState } from 'react';
import { Menu, X, Search, CircleUserRound, User } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Cases', href: '#' },
    { name: 'Service', href: '/service' },
    { name: 'Products', href: '/product'},
    { name: 'Blogs', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black text-white w-full shadow-sm z-50 sticky top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src="/logo.png" alt="Vaipali" className="w-8 h-8 object-contain" />
            <span className="text-xl font-bold">Vaipali</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:space-x-10">
            {navItems.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`text-lg font-bold transition ${isActive ? 'text-purple-600' : 'text-gray-200 hover:text-red-300'
                    }`}
                >
                  {item.name}
                </a>
              );
            })}
          </div>

          {/* Right: Search + Profile */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="I am looking for..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-gray-800 border border-gray-700 rounded-full py-2 pl-10 pr-4 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 w-64"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
            </div>

            {/* User Icon */}
            <CircleUserRound className="text-white w-6 h-6" />
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-md"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#18171d]">
          <div className="px-4 pt-4 pb-6 space-y-4">
            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="I am looking for..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-gray-800 border border-gray-600 rounded-full py-2 pl-10 pr-4 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
            </div>

            {/* User */}
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 bg-gray-700 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>
              <span className="text-white text-sm">Profile</span>
            </div>

            {/* Nav Links */}
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block text-base font-medium transition ${isActive ? 'text-purple-400' : 'text-gray-300 hover:text-white'
                      }`}
                  >
                    {item.name}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
