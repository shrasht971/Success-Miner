import React from "react";
import Template from "../assets/video.mp4/Aboutus.mp4";
import AboutRight from '../assets/video.mp4/aboutright.mp4';

const AboutUs = () => {
  return (
    <div>
      {/* Video Background Section */}
      <div className="relative h-[74vh] mt-[-20vh] md:mt-[-29vh] w-full">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={Template}
          autoPlay
          loop
          muted
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-[1]"></div>
        <div className="relative z-10 flex justify-center items-center h-full">
          <h1 className="text-white text-4xl md:text-6xl font-bold">
            About Us
          </h1>
        </div>
      </div>

      {/* New Section Divided into Two Columns */}
      <div className="container mx-auto p-2 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-cyan-700 p-4 rounded-lg shadow-md">
          <div>
            <h2 className="font-bold text-2xl">About Us: Who We Are</h2>
            <div className="text-white text-md font-semibold mt-4 mb-4">
              <p>
                At Success Miner, our passion for digital marketing drives us to
                take immediate action, fostering the growth and success of
                innovative startup ideas. Our mission is to support the
                entrepreneurial spirit, especially within the framework of the
                Startup India initiative.
              </p>
              <p>
                Since our inception, we've successfully
                managed numerous projects, gaining deep insights into the
                intricacies of startup development. Our experience has equipped us
                to be a trusted partner for emerging businesses, offering the
                expertise necessary to navigate the challenges of launching and
                growing a brand online.
              </p>
              <p>
                We are dedicated to empowering the next
                generation of entrepreneurs, embracing the "Vocal for Local"
                movement. By combining cutting-edge digital marketing strategies
                with a commitment to supporting local innovation, we help startups
                in India establish a strong presence in the digital landscape.
              </p>
            </div>
            <h2 className="text-3xl font-bold">
              Nurture Your Brand with Strategic Digital Marketing
            </h2>
            <div className="text-white text-md font-semibold mt-4">
              <p>
                Digital marketing is a gradual journey toward success, requiring
                patience, dedication, and consistent effort. In the dynamic
                landscape of India, it's essential to carefully nurture your
                digital marketing strategies to achieve meaningful results.
                Expecting immediate success from a startup app development company
                can be misleading and may not yield the desired outcomes.
              </p>
              <p>
                Our approach focuses on aligning your goals with our expertly crafted
                marketing campaigns, resulting in substantial sales growth. It's
                not just about implementing the latest technological tools and
                software; it's about making a sustained investment in digital
                marketing over time to fully realize its potential.
              </p>
              <p>
                At Success Miner, we understand that true growth comes from a well-executed,
                long-term digital marketing strategy. Let us help you unlock the
                full benefits of digital marketing and propel your brand toward
                success.
              </p>
            </div>
            <button className="text-center text-white text-xl font-bold p-1 px-3 mt-4 bg-amber-500 border border-white hover:bg-teal-700 flex justify-center hover:ring hover:ring-emerald-900">
              Our Service
            </button>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          {/* Video in Right Column */}
          <video
            className="w-full h-auto rounded-lg shadow-md"
            src={AboutRight}
            autoPlay
            loop
            muted
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
