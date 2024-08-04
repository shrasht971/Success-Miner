// src/NavbarComponent/Navbar.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; // Use NavLink instead of Link
import Logo from '../assets/Image/Logo-removebg-preview.png';
import { EnvelopeIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'; // Import Heroicons

const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-opacity-50 py-3 z-10">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={Logo} alt="Logo" className="h-16 w-32" />
          {/* <span className="font-bold text-xl">BrandName</span> */}
        </div>

        {/* WhatsApp Button */}
        <div>
          <a
            href="https://wa.me/9719900723" // Replace with your WhatsApp number
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
          >
            WhatsApp Now
          </a>
        </div>
      </div>
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
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

        {/* Email and Search */}
        <div className="flex items-center space-x-4">
          <a
            href="mailto:successminer777@gmail.com"
            className="flex items-center space-x-2 text-cyan-600"
          >
            <EnvelopeIcon className="h-5" />
            <span className="font-bold">successminer777@gmail.com</span>
          </a>
          <button onClick={() => setSearchOpen(!searchOpen)} className="text-cyan-600">
            <MagnifyingGlassIcon className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Search Bar */}
      {searchOpen && (
        <div className="container mx-auto px-4 py-2">
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            placeholder="Search..."
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
