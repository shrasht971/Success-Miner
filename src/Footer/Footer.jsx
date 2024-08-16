// src/components/Footer.jsx
import React from 'react';
import Logo from '../assets/Image/Logo-removebg-preview.png';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">                                                                                                                                    
          {/* About Section */}
          <div className='flex'>
          <img src={Logo} alt="Logo" className="h-16 w-32" />
            <p className="text-sm">
              With the inspiration and compassion for digital marketing, Success Miner.in believes in
              instant action and execution. Thus, extending the hand of support to the upcoming
              generation’s entrepreneurs, we believe in cheering the slogan “Vocal for Local”
              germinating the new startup development ideas with proper techniques of digital
              marketing, we give wings to a software company for startups India in building their
              own name in the online virtual world.                   
            </p>
          </div>

          {/* Follow Us Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">Follow Us</h2>
            <ul className="flex space-x-4 text-lg">
              <li>
                <a href="#" aria-label="Facebook">
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a href="#" aria-label="Twitter">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="#" aria-label="Instagram">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href="#" aria-label="LinkedIn">
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a href="#" aria-label="YouTube">
                  <FaYoutube />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Address Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">Our Locations</h2>
            <address className="not-italic text-sm">
              Dawarka,Delhi
            </address>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {/* Marketing Services Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">Marketing</h2>
            <ul className="text-sm space-y-2">
              <li>Search Engine Optimization</li>
              <li>PPC Management Services</li>
              <li>Social Media Marketing</li>
              <li>Brand Management Services</li>
              <li>Facebook Ads Services</li>
              <li>Google Ads</li>
            </ul>
          </div>

          {/* Our Services Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">Our Services</h2>
            <ul className="text-sm space-y-2">
              <li>Search Engine Optimization</li>
              <li>Website Designing</li>
              <li>Web Development</li>
              <li>Social Media Marketing</li>
              <li>Contact Us</li>
              <li>About</li>
              <li>Services</li>
            </ul>
          </div>

          {/* Development Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">Development</h2>
            <ul className="text-sm space-y-2">
              <li>Website Development Services</li>
              <li>eCommerce Website Development</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center text-sm">
          &copy; 2024 successminer.in | All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
