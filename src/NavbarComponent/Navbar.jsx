import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/Image/Logo-removebg-preview.png';
import { EnvelopeIcon, MagnifyingGlassIcon, Bars3Icon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="relative w-full bg-opacity-80 py-3  z-20 shadow-md">
        <div className="container mx-auto px-2 py-2 flex items-center justify-between">
          {/* Logo */}
          <div className="flex sm:items-center sm:flex-grow mt-[-3vh] px-32 sm:ml-[-19vh] custom-sm:ml-[-24vh] lg:mt-1 lg:ml-[-16vh] ">
            <img src={Logo} alt="Logo" className="lg:h-16 lg:w-32 md:h-16 md:w-28 h-16 w-24 sm:mr-0 " />
          </div>

          {/* Toggle Button for Mobile */}
          <button
            onClick={() => setMenuOpen(true)}
            className="absolute top-4 right-4 md:hidden text-cyan-600 flex-shrink-0"
          >
            <Bars3Icon className="h-6 w-6" />
          </button>

          {/* Desktop Navigation Links */}
        
          <div className="hidden md:flex items-center justify-between md:space-x-1  md:text-sm  lg:space-x-6">
            <NavLink
              to="/"
              className={({ isActive }) => `md:px-1  lg:px-2 py-2 rounded ${isActive ? 'bg-teal-800 text-white' : 'text-cyan-400 hover:text-teal-800'} font-bold transition-colors duration-300`}
            >
              Home
            </NavLink>
            <NavLink
              to="/performance"
              className={({ isActive }) => `md:px-1 lg:px-2 py-2 rounded ${isActive ? 'bg-teal-800 text-white' : 'text-cyan-400 hover:text-teal-800'} font-bold transition-colors duration-300`}
            >
              Our Performance
            </NavLink>
            <NavLink
              to="/service"
              className={({ isActive }) => `md:px-1 lg:px-2 py-2 rounded ${isActive ? 'bg-teal-800 text-white' : 'text-cyan-400 hover:text-teal-800'} font-bold transition-colors duration-300`}
            >
              Service
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => `md:px-1 lg:px-2 py-2 rounded ${isActive ? 'bg-teal-800 text-white' : 'text-cyan-400 hover:text-teal-800'} font-bold transition-colors duration-300`}
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => `md:px-1 lg:px-2 py-2 rounded ${isActive ? 'bg-teal-800 text-white' : 'text-cyan-400 hover:text-teal-800'} font-bold transition-colors duration-300`}
            >
              Contact Us
            </NavLink>
          </div>

          {/* Desktop Email and Search */}
          <div className="hidden md:flex items-center lg:space-x-4 md:text-sm lg:font-bold md:font-semibold lg:text-md ml-2">
            <a
              href="mailto:successminer777@gmail.com"
              className="flex items-center lg:space-x-2 text-cyan-600"
            >
              <EnvelopeIcon className="lg:h-5 lg:w-5 md:h-4 md:w-4" />
              <span className="lg:font-bold">successminer777@gmail.com</span>
            </a>
            <button onClick={() => setSearchOpen(!searchOpen)} className="text-cyan-600">
              <MagnifyingGlassIcon className="lg:h-5 lg:w-5 md:h-4 md:w-4 ml-2" />
            </button>
          </div>
        </div>

        {/* Overlay Navigation */}
        {menuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-30 h-[55vh] transition-transform duration-500">
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-5 right-5 text-white text-4xl"
            >
              &times;
            </button>
            <div className="flex flex-col items-center justify-center h-[44vh] mt-14 text-white text-lg  space-y-1">
              <NavLink
                to="/"
                className={({ isActive }) => `block px-4 py-1 rounded ${isActive ? 'bg-teal-800 text-white' : 'text-cyan-400 hover:text-teal-800'} font-bold transition-colors duration-300`}
              >
                Home
              </NavLink>
              <NavLink
                to="/performance"
                className={({ isActive }) => `block px-4 py-1 rounded ${isActive ? 'bg-teal-800 text-white' : 'text-cyan-400 hover:text-teal-800'} font-bold transition-colors duration-300`}
              >
                Our Performance
              </NavLink>
              <NavLink
                to="/service"
                className={({ isActive }) => `block px-4 py-1 rounded ${isActive ? 'bg-teal-800 text-white' : 'text-cyan-400 hover:text-teal-800'} font-bold transition-colors duration-300`}
              >
                Service
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) => `block px-4 py-1 rounded ${isActive ? 'bg-teal-800 text-white' : 'text-cyan-400 hover:text-teal-800'} font-bold transition-colors duration-300`}
              >
                About
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) => `block px-4 py-1 rounded ${isActive ? 'bg-teal-800 text-white' : 'text-cyan-400 hover:text-teal-800'} font-bold transition-colors duration-300`}
              >
                Contact Us
              </NavLink>
              <a
                href="mailto:successminer777@gmail.com"
                className="flex items-center space-x-2 text-cyan-600"
              >
                <EnvelopeIcon className="h-5 w-5" />
                <span className="font-semibold">successminer777@gmail.com</span>
              </a>
              <a
                href="https://wa.me/"
                className="bg-green-500 text-white px-4 py-1 rounded-lg font-semibold  hover:bg-green-600"
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
