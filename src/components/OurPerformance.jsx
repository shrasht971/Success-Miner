import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import VideoCard from './VideoCard'; // Adjust the path based on your project structure
import backgroundVideo from '../assets/video.mp4/ourperformance.mp4'; 
import payperclick from '../assets/video.mp4/payperclick.mp4';
import topsoftwaredev from '../assets/video.mp4/topsoftwaredev.mp4';
import branding from '../assets/video.mp4/branding.mp4';
import socialmedia from '../assets/video.mp4/socialmedia.mp4';
import website from '../assets/video.mp4/websitedev.mp4';
import seo from '../assets/video.mp4/seo.mp4';
import bgVideo from '../assets/video.mp4/bgtech.mp4';

gsap.registerPlugin(ScrollTrigger);

const OurPerformance = () => {
  useEffect(() => {
    // Animation for the heading
    gsap.from('.performance-heading', {
      scrollTrigger: {
        trigger: '.performance-heading',
        start: 'top 80%', // Start animation when heading enters 80% of the viewport
        end: 'bottom 20%',
        toggleActions: 'play none none none', // Play animation once
        scrub: true,
      },
      y: 50,
      opacity: 0,
      duration: 1,
    });

    // Animation for video cards
    gsap.from('.video-card', {
      scrollTrigger: {
        trigger: '.video-card',
        start: 'bottom 90%', // Start animation when each card enters 90% of the viewport
        end: 'top 90%',
        toggleActions: 'play none none none', // Play animation once
        scrub: true,
        stagger: 0.3,
      },
      y: 100,
      opacity: 0,
      duration: 1.5,
    });
  }, []);

  return (
    <div>
      {/* Main background video */}
      <div className="relative h-[75vh] mt-[-20vh] md:mt-[-30vh]">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={backgroundVideo}
          autoPlay
          loop
          muted
        />
        <div className="relative z-10 flex justify-center items-center h-full">
          <h1 className="text-white text-4xl md:text-6xl font-bold performance-heading">
            Our Performance
          </h1>
        </div>
      </div>

      {/* Cards Section with Background Video */}
      <div className="relative w-full">
        {/* Background video for cards */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src={bgVideo}
          autoPlay
          loop
          muted
        />

        {/* Cards container */}
        <div className="relative container mx-auto max-w-full p-4 z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="video-card">
              <VideoCard videoSrc={payperclick} title1="Pay Per Click" title2="Pay Per Click" />
            </div>
            <div className="video-card">
              <VideoCard videoSrc={topsoftwaredev} title1="Top" title2="Software Development" />
            </div>
            <div className="video-card">
              <VideoCard videoSrc={branding} title1="Branding" title2="Strategies" />
            </div>
            <div className="video-card">
              <VideoCard videoSrc={socialmedia} title1="Social Media" title2="Social Media Marketing" />
            </div>
            <div className="video-card">
              <VideoCard videoSrc={website} title1="Website" title2="Website Development " />
            </div>
            <div className="video-card">
              <VideoCard videoSrc={seo} title1="SEO Optimization" title2="Search Engine Optimization " />
            </div>
          </div>
        </div>

        {/* Overlay for darkening the background */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-[1]"></div>
      </div>
    </div>
  );
};

export default OurPerformance;
