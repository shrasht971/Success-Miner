import React from 'react';
import ServiceImg from '../assets/Image/Servicetemp1.jpg';
import SocialMediaMarketing from '../assets/Image/SocialMM.jpg';
import Advertisement from '../assets/Image/Advertisement2.jpg';
import MarketingStrategy from '../assets/Image/Marketingstrategy.jpg';
import AAP from '../assets/Image/Analytics.jpg';
import InfluencerMarketing from '../assets/Image/InfluencerMarketing.jpg';
import SEM from '../assets/Image/SEM.jpg';
import SEOSEM from '../assets/Image/SEOSEM.jpg';
import Web from '../assets/Image/Web.jpg';
import Brand from '../assets/Image/Brand.jpg';

const services = [
  {
    image: SocialMediaMarketing,
    title: 'Social Media Marketing',
    description:
      'Leveraging social media platforms like Facebook, Twitter, Instagram, and LinkedIn to build brand awareness, drive traffic, and engage with customers.',
  },
  {
    image: Advertisement,
    title: 'Advertisement',
    description:
      'Placing ads on search engines and social media platforms and paying only when users click on them. This includes Google Ads, Facebook Ads, and sponsored content.',
  },
  {
    image: MarketingStrategy,
    title: 'Marketing Strategy',
    description:
      'Creating and distributing valuable, relevant content to attract and engage a target audience. This includes blogs, videos, infographics, and social media posts.',
  },
  {
    image: AAP,
    title: 'Analytics and Performance Tracking',
    description:
      'Providing insights and analysis of digital marketing campaigns through tools like Google Analytics to measure performance, identify areas for improvement, and optimize strategies accordingly.',
  },
  {
    image: InfluencerMarketing,
    title: 'Influencer Marketing',
    description:
      'This involves collaborating with influencers on social media platforms to promote products or services to their followers.',
  },
  {
    image: SEM,
    title: 'Search Engine Marketing (SEM)',
    description:
      'SEM includes paid advertising on search engines, commonly known as Pay-Per-Click (PPC) advertising. It involves creating and optimizing ads to appear at the top of search engine results pages (SERPs) for specific keywords.',
  },
  {
    image: SEOSEM,
    title: 'SEO/SEM',
    description:
      'Enhancing your website\'s visibility in search engine results pages (SERPs) through strategies like keyword optimization, content creation, and backlink building.',
  },
  {
    image: Web,
    title: 'Website Design and Development',
    description:
      'Creating and optimizing websites to enhance user experience, improve search engine rankings, and drive conversions.',
  },
  {
    image: Brand,
    title: 'Brand Building and Awareness',
    description:
      'Through various digital channels, you can build and reinforce your brand identity consistently. Engaging content, storytelling, and interactive experiences help to create brand awareness and foster relationships with your audience.',
  },
];

const ServiceTemplate = () => {
  return (
    <div className="relative mt-[-25vh]  custom-sm:mt-[-30vh] custom-md:mt-[-20vh] custom-lg:mt-[-15vh] lg:mt-[-22vh] ">
      <img
        src={ServiceImg}
        alt="Service"
        className="w-full h-[70vh] object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center text-gray-700 text-4xl sm:mt-[-672vh] custom-sm:text-5xl custom-md:text-6xl custom-lg:text-9xl md:mt-[-620vh] md:text-7xl custom-lg:mt-[-180vh] 3xl:mt-[-100vh] 3xl:text-9xl font-bold bg-blend-saturation   max-custom-lg:mt-[-660vh] max-custom-lg:text-6xl custom-sm:mt-[-722vh] lg:mt-[-310vh] lg:text-8xl">
        SERVICES
      </div>
      <div className="px-4 custom-sm:px-6 custom-md:px-8 custom-lg:px-10">
        <div className="text-center">
          <h2 className="text-3xl custom-sm:text-4xl custom-md:text-5xl font-bold mb-4">Our Services</h2>
          <h3 className="text-xl custom-sm:text-2xl custom-md:text-3xl font-semibold text-gray-600 mb-8">Quality Services</h3>
        </div>
        <div className="grid grid-cols-1 custom-md:grid-cols-2 custom-lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-40 custom-md:h-48 custom-lg:h-56 object-cover rounded-md mb-4"
              />
              <h4 className="text-xl custom-md:text-2xl font-bold mb-2">{service.title}</h4>
              <p className="text-gray-700 text-sm custom-md:text-base mb-2">{service.description}</p>
              <button className="text-teal-800 font-semibold hover:underline">
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceTemplate;
 