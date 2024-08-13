import React, { useEffect } from 'react';
import { WOW } from 'wowjs';
import 'animate.css';
import Digital from '../assets/Image/digitalmarketing.jpg';
import { FaFlag, FaUsers, FaThumbsUp, FaUser } from 'react-icons/fa';

const BrandDigital = () => {
  useEffect(() => {
    new WOW().init();
  }, []);

  return (
    <div className="bg-gray-100 p-4 md:p-8 flex flex-col md:flex-row justify-around items-center">
      {/* Image Section */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0 wow animate__animated animate__fadeInLeft">
        <img src={Digital} alt="Marketing" className="w-full" />
        <div className="bg-blue-950 text-white text-md px-2 font-bold">
          <h1 className='text-yellow-400 text-lg'>Why Choose Us?</h1>
          <h4 className='text-emerald-400'>2+ Years Of Undefeated Success</h4>
          <p className='text-sm px-1 font-light'>
            Expertise: Our team comprises seasoned professionals with years of experience in the digital marketing industry. From Google Ads to social media marketing, we have the expertise to drive real results for your business.
          </p>
          <button className="m-4 bg-green-500 text-white text-sm py-1 px-4 rounded hover:bg-blue-600">
            Get In Touch
          </button>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="w-full md:w-1/2 p-4 md:p-8 wow animate__animated animate__fadeInRight">
        <h3 className="text-xl md:text-2xl font-bold mb-4 text-center md:text-left">
          Grow Your Brand with Strategic Digital Marketing
        </h3>
        <p className="mb-6 text-md md:text-lg font-medium">
          Digital marketing is a slow and gradual process of success. You need to nurture and care for digital marketing in India. Expecting instant growth from the startup app development company will lead you nowhere. By leveraging strategic marketing initiatives, you can achieve sustainable growth and enhance your brand's online presence.
        </p>

        <div className="grid grid-cols-2 gap-4 md:gap-8">
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md text-center flex flex-col items-center wow animate__animated animate__fadeInUp">
            <FaFlag className="w-8 h-8 md:w-12 md:h-12 text-blue-500 mb-2" />
            <div className="text-2xl md:text-4xl font-bold">512+</div>
            <div className="text-xs md:text-sm">Successfully Project Finished.</div>
          </div>
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md text-center flex flex-col items-center wow animate__animated animate__fadeInUp" data-wow-delay="1s">
            <FaUsers className="w-8 h-8 md:w-12 md:h-12 text-green-500 mb-2" />
            <div className="text-2xl md:text-4xl font-bold">2+</div>
            <div className="text-xs md:text-sm">Years of experience with pride</div>
          </div>
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md text-center flex flex-col items-center wow animate__animated animate__fadeInUp" data-wow-delay="2s">
            <FaThumbsUp className="w-8 h-8 md:w-12 md:h-12 text-yellow-500 mb-2" />
            <div className="text-2xl md:text-4xl font-bold">99.9%</div>
            <div className="text-xs md:text-sm">Satisfied Clients</div>
          </div>
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md text-center flex flex-col items-center wow animate__animated animate__fadeInUp" data-wow-delay="3s">
            <FaUser className="w-8 h-8 md:w-12 md:h-12 text-red-500 mb-2" />
            <div className="text-2xl md:text-4xl font-bold">11.5k</div>
            <div className="text-xs md:text-sm">Clients</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandDigital;
