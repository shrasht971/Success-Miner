import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Logo from '../assets/Image/Logo-removebg-preview.png';
import { EnvelopeIcon, MagnifyingGlassIcon, Bars3Icon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavLinkClick = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="relative w-full bg-opacity-80 py-3 px-4 md:px-1 lg:bg-transparent custom-sm:bg-black bg-black sm:bg-black md:bg-transparent lg:px-2 lg:pr-3 z-20 shadow-md">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img src={Logo} alt="Logo" className="h-16 w-24 md:h-20 md:w-28 lg:h-24 lg:w-32" />
          </div>

          {/* Toggle Button for Mobile */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-cyan-600 flex-shrink-0"
          >
            <Bars3Icon className="h-6 w-6" />
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-1 md:text-sm md:font-light  lg:space-x-6">
            <NavLink
              to="/"
              className={({ isActive }) => `px-4 py-2 md:px-1 rounded ${isActive ? 'bg-teal-800 text-white' : 'text-cyan-400 hover:text-teal-800'} font-bold transition-colors duration-300`}
            >
              Home
            </NavLink>
            <NavLink
              to="/performance"
              className={({ isActive }) => `px-4 py-2 md:px-1 rounded ${isActive ? 'bg-teal-800 text-white' : 'text-cyan-400 hover:text-teal-800'} font-bold transition-colors duration-300`}
            >
              Our Performance
            </NavLink>
            <NavLink
              to="/service"
              className={({ isActive }) => `px-4 py-2 md:px-1 rounded ${isActive ? 'bg-teal-800 text-white' : 'text-cyan-400 hover:text-teal-800'} font-bold transition-colors duration-300`}
            >
              Service
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => `px-4 py-2 md:px-1 rounded ${isActive ? 'bg-teal-800 text-white' : 'text-cyan-400 hover:text-teal-800'} font-bold transition-colors duration-300`}
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => `px-4 py-2 md:px-1 rounded ${isActive ? 'bg-teal-800 text-white' : 'text-cyan-400 hover:text-teal-800'} font-bold transition-colors duration-300`}
            >
              Contact Us
            </NavLink>
          </div>

          {/* Desktop Email and Search */}
          <div className="hidden md:flex items-center space-x-1 md:text-sm text-cyan-600">
            <a
              href="mailto:successminer777@gmail.com"
              className="flex items-center space-x-1"
            >
              <EnvelopeIcon className="h-5 w-5 md:h-4  " />
              <span>successminer777@gmail.com</span>
            </a>
            <button onClick={() => setSearchOpen(!searchOpen)}>
              <MagnifyingGlassIcon className="h-5 w-5 md:h-4" />
            </button>
          </div>
        </div>

        {/* Overlay Navigation */}
        {menuOpen && (
          <div className="fixed inset-0 bg-black h-[72vh] bg-opacity-90 z-30 ">
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-5 right-5 text-white text-4xl"
            >
              &times;
            </button>
            <div className="flex flex-col items-center justify-center h-[44vh] mt-11 space-y-4 text-white text-lg">
              <button onClick={() => handleNavLinkClick('/')}>
                Home
              </button>
              <button onClick={() => handleNavLinkClick('/performance')}>
                Our Performance
              </button>
              <button onClick={() => handleNavLinkClick('/service')}>
                Service
              </button>
              <button onClick={() => handleNavLinkClick('/about')}>
                About
              </button>
              <button onClick={() => handleNavLinkClick('/contact')}>
                Contact Us
              </button>
              <a
                href="mailto:successminer777@gmail.com"
                className="flex items-center space-x-2 text-cyan-600"
              >
                <EnvelopeIcon className="h-5 w-5" />
                <span>successminer777@gmail.com</span>
              </a>
              <a
                href="https://wa.me/8059608123"
                className="bg-green-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-600"
              >
                WhatsApp Now
              </a>
            </div>
          </div>
        )}

        {/* Search Bar */}
        {searchOpen && (
          <div className="fixed top-16 left-0 right-0 bg-white shadow-md z-10">
            <div className="container mx-auto px-4 py-2">
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                placeholder="Search..."
              />
            </div>
          </div>
        )}
      </nav>

      {/* WhatsApp Button Fixed Position */}
      <a
        href="https://wa.me/9719900723"
        className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 z-30"
      >
        WhatsApp Now
      </a>
    </>
  );
};

export default Navbar;
