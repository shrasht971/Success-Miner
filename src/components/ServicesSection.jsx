import React from 'react';
import { useInView } from 'react-intersection-observer';
import LeadGeneration from '../assets/Image/LeadGeneration.jpg';
import Advertisement from '../assets/Image/Advertisement.jpg';
import SocialMedia from '../assets/Image/SocialMedia.jpg';
import WebsiteDevelopment from '../assets/Image/WebsiteDevelopment.jpeg';
import SEO from '../assets/Image/SEO.jpg';
import GraphicDesign from '../assets/Image/GraphicDesign.png';
import Ads from '../assets/Image/ads2.jpg';
import Agency from '../assets/Image/Agency.jpg';
import { FaCheckCircle, FaClock, FaCog, FaMobileAlt } from 'react-icons/fa';
import 'animate.css';

const ServicesSection = () => {
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.2 });

  const trendingServices = [
    {
      title: 'Lead Generation',
      description: 'Generating high-quality leads is crucial for any business...',
      image: LeadGeneration,
    },
    {
      title: 'Advertisement - Facebook(Meta) /Google',
      description: 'With expertise in managing Google Ads and Facebook Ads...',
      image: Advertisement,
    },
    {
      title: 'Social Media Marketing',
      description: 'Engage with your audience on platforms like Facebook...',
      image: SocialMedia,
    },
  ];

  const qualityServices = [
    {
      title: 'Website Development',
      description: 'A visually appealing and functional website is essential...',
      image: WebsiteDevelopment,
    },
    {
      title: 'SEO/SEM',
      description: 'Boost your online visibility with our SEO and SEM services...',
      image: SEO,
    },
    {
      title: 'Graphic Design',
      description: 'Visual elements play a crucial role in branding...',
      image: GraphicDesign,
    },
  ];

  return (
    <div className="w-full px-4 py-12">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center">
        Trending Digital Marketing Services
      </h1>
      <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-center">
        Our Quality Services
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
        {trendingServices.map((service, index) => (
          <div
            ref={ref1}
            key={index}
            className={`bg-white p-6 rounded-lg shadow-md text-center ${
              inView1 ? 'animate__animated animate__fadeInUp' : ''
            }`}
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 sm:h-64 md:h-80 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-sky-900 font-semibold mb-4">
              {service.title}
            </h3>
            <p className="text-sm sm:text-base md:text-lg">{service.description}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
        {qualityServices.map((service, index) => (
          <div
            ref={ref2}
            key={index}
            className={`bg-white p-6 rounded-lg shadow-md text-center ${
              inView2 ? 'animate__animated animate__fadeInUp' : ''
            }`}
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 sm:h-64 md:h-80 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-sky-900 font-semibold mb-4">
              {service.title}
            </h3>
            <p className="text-sm sm:text-base md:text-lg">{service.description}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
        <div
          ref={ref3}
          className={`relative shadow-md text-center ${
            inView3 ? 'animate__animated animate__fadeInLeft' : ''
          }`}
        >
          <img
            src={Ads}
            alt="Ads Optimization"
            className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] object-cover filter blur-sm"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-gray-300 md:p-4">
            <h1 className="text-md sm:text-2xl md:text-3xl lg:text-4xl font-bold md:mb-4 text-blue-600">
              Optimization of Ads
            </h1>
            <h2 className="text-md sm:text-xl md:text-2xl lg:text-3xl font-semibold md:font-bold mb:1 md:mb-4">
              Taking care of the optimization requirements
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl md:px-4 md:py-2">
              We post ads that are SEO friendly. As the package includes the responsibility of optimizing the keywords, optimizing of ad copy, Keyword bid optimization, etc.
            </p>
            <div className="flex justify-center">
              <button className="md:mt-4 bg-green-500 text-white md:py-2 px-4 rounded hover:bg-blue-600">
                Get In Touch
              </button>
            </div>
          </div>
        </div>

        <div className="relative shadow-md text-center">
          <img
            src={Agency}
            alt="Agency Management"
            className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-gray-300 md:p-4">
            <h4 className="text-lg sm:text-3xl md:text-4xl lg:text-5xl font-bold md:mb-4 text-teal-950">
              #1 Best Digital Marketing Agency
            </h4>
            <p className="text-sm sm:text-xl md:text-2xl lg:text-3xl font-bold px-4 md:py-2">
              Why Do You Need the Best Digital Marketing Agency in India?
            </p>
            <ul className="list-none text-sm sm:text-base md:text-lg lg:text-xl md:mb-4 mt-4 md:mt-8">
              <li className="flex items-center mb-2">
                <FaCheckCircle className="w-3 h-3 sm:w-6 sm:h-6 text-blue-500 md:mr-2" />
                Expert Advice
              </li>
              <li className="flex items-center mb-2">
                <FaClock className="w-3 h-3 sm:w-6 sm:h-6 text-blue-500 md:mr-2" />
                Project On Time
              </li>
              <li className="flex items-center mb-2">
                <FaCog className="w-3 h-3 sm:w-6 sm:h-6 text-blue-500 md:mr-2" />
                Modern Technology
              </li>
              <li className="flex items-center mb-2">
                <FaMobileAlt className="w-3 h-3 sm:w-6 sm:h-6 text-blue-500 md:mr-2" />
                Latest Designs
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
