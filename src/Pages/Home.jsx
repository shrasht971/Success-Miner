// Home.js
import React from 'react';
import Template from '../components/Template';
import BrandDigital from '../components/BrandDigital';
import ServicesSection from '../components/ServicesSection';
import {Link} from 'react-router-dom'
const Home = () => {
  return <>
  <div className='w-full'>
      <Template/>
      <BrandDigital/>
      <ServicesSection />
      </div>
  </>
};

export default Home;
