import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/Image/Logo-removebg-preview.png';
import { EnvelopeIcon, MagnifyingGlassIcon, Bars3Icon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="relative w-full bg-opacity-80 py-3 z-20 shadow-md">
        <div className="container mx-auto px-4 py-2 flex items-center justify-evenly">
          {/* Logo */}
          <div className="flex items-center flex-grow">
            <img src={Logo} alt="Logo" className="h-16 w-32" />
          </div>

          {/* Toggle Button for Mobile */}
          <button 
            onClick={() => setMenuOpen(!menuOpen)} 
            className="md:hidden text-cyan-600 flex-shrink-0 ml-auto"
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <div className='flex justify-between md:text-sm'>
        <div className="hidden md:flex items-center justify-between md:space-x-1 space-x-6">
          <NavLink 
            to="/" 
            className={({ isActive }) => `px-4 py-2 rounded ${isActive ? 'bg-teal-800 text-white' : 'text-cyan-400 hover:text-teal-800'} font-bold transition-colors duration-300`}
          >
            Home
          </NavLink>
          <NavLink 
            to="/performance" 
            className={({ isActive }) => `px-4 py-2 rounded ${isActive ? 'bg-teal-800 text-white' : 'text-cyan-400 hover:text-teal-800'} font-bold transition-colors duration-300`}
          >
            Our Performance
          </NavLink>
          <NavLink 
            to="/service" 
            className={({ isActive }) => `px-4 py-2 rounded ${isActive ? 'bg-teal-800 text-white' : 'text-cyan-400 hover:text-teal-800'} font-bold transition-colors duration-300`}
          >
            Service
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => `px-4 py-2 rounded ${isActive ? 'bg-teal-800 text-white' : 'text-cyan-400 hover:text-teal-800'} font-bold transition-colors duration-300`}
          >
            About
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => `px-4 py-2 rounded ${isActive ? 'bg-teal-800 text-white' : 'text-cyan-400 hover:text-teal-800'} font-bold transition-colors duration-300`}
          >
            Contact Us
          </NavLink>
        </div>

        {/* Desktop Email and Search */}
        <div className="hidden md:flex items-center space-x-4 md:text-sm lg:text-md">
          <a
            href="mailto:successminer777@gmail.com"
            className="flex items-center space-x-2 text-cyan-600"
          >
            <EnvelopeIcon className="h-5 w-5" />
            <span className="font-bold">successminer777@gmail.com</span>
          </a>
          <button onClick={() => setSearchOpen(!searchOpen)} className="text-cyan-600">
            <MagnifyingGlassIcon className="h-5 w-5" />
          </button>
        </div>
        </div>
        {/* Mobile Navigation Menu */}
        {menuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white shadow-md z-10">
            <div className="flex flex-col items-center space-y-4 px-4 py-2">
              <NavLink 
                to="/" 
                className={({ isActive }) => `block px-4 py-2 rounded ${isActive ? 'bg-teal-800 text-white' : 'text-cyan-400 hover:text-teal-800'} font-bold transition-colors duration-300`}
              >
                Home
              </NavLink>
              <NavLink 
                to="/performance" 
                className={({ isActive }) => `block px-4 py-2 rounded ${isActive ? 'bg-teal-800 text-white' : 'text-cyan-400 hover:text-teal-800'} font-bold transition-colors duration-300`}
              >
                Our Performance
              </NavLink>
              <NavLink 
                to="/service" 
                className={({ isActive }) => `block px-4 py-2 rounded ${isActive ? 'bg-teal-800 text-white' : 'text-cyan-400 hover:text-teal-800'} font-bold transition-colors duration-300`}
              >
                Service
              </NavLink>
              <NavLink 
                to="/about" 
                className={({ isActive }) => `block px-4 py-2 rounded ${isActive ? 'bg-teal-800 text-white' : 'text-cyan-400 hover:text-teal-800'} font-bold transition-colors duration-300`}
              >
                About
              </NavLink>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => `block px-4 py-2 rounded ${isActive ? 'bg-teal-800 text-white' : 'text-cyan-400 hover:text-teal-800'} font-bold transition-colors duration-300`}
              >
                Contact Us
              </NavLink>
              <a
                href="mailto:successminer777@gmail.com"
                className="flex items-center space-x-2 text-cyan-600"
              >
                <EnvelopeIcon className="h-5 w-5" />
                <span className="font-bold">successminer777@gmail.com</span>
              </a>
              <a
                href="https://wa.me/9719900723"
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
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
