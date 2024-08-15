import React from "react";
import Template from "../assets/Image/Hometemplate.jpg"; // Import your background image

const Home = () => {
  return (
    <div className="relative mb-10 ">
      {/* Template Background Image */}
      <div
        className="h-[95vh] mt-[-25vh] md:h-[100vh]  bg-cover bg-center"
        style={{ backgroundImage: `url(${Template})` }}
      >
        {/* Content inside template background image */}
        <div className="flex flex-col md:flex-row justify-between items-center h-full px-4 md:px-6 lg:px-10">
          <div className="w-full mt-[-4vh] md:w-1/2 sm:mt-0 md:mt-18 text-center md:text-left px-4 md:px-6">
            <h1 className="text-white text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold md:font-bold leading-tight mt-[30vh] md:mt-32 lg:mt-40">
              Transform Your Brand's Story: Embrace the Power of Digital Marketing
            </h1>
            <p className="text-white text-sm md:text-sm lg:text-lg mt-4 mb-6 md:mb-8">
              Digital marketing is a gradual and steady journey toward success,
              requiring patience and care, especially in a market like India.
              Expecting immediate growth from a startup app development company
              can lead to disappointment. Instead, focus on nurturing and
              strategically developing your digital marketing efforts to build a
              strong foundation for future success.
            </p>
            <button className="mt-4 text-sm md:text-base px-4 md:px-6 py-2 md:py-3 bg-teal-800 text-white font-semibold rounded-lg hover:bg-cyan-700 transition duration-300 ease-in-out">
              BOOK FREE CONSULTATION
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
