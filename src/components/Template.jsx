import React from "react";
import Template from "../assets/Image/Hometemplate.jpg"; // Import your background image

const Home = () => {
  return (
    <div className="relative mb-10">
      {/* Template Background Image */}
      <div
        className="h-[95vh] mt-[-25vh] md:-mt-44  object-cover bg-cover  bg-center "
        style={{ backgroundImage: `url(${Template})` }}
      >
        {/* Content inside template background image */}
        <div className="flex flex-col custom-md:flex-row justify-between items-center h-full px-4 custom-md:px-6 custom-lg:px-10">
          <div className="w-full mt-16 custom-md:w-1/2 text-center custom-md:text-left px-4 custom-md:px-6">
            <h1 className="text-white text-md custom-sm:text-lg custom-md:text-xl custom-lg:text-2xl lg:text-3xl font-semibold custom-md:font-bold leading-tight mt-32 custom-md:mt-32 custom-lg:mt-[-10vh] md:mt-44 lg:mt-40 ">
              Transform Your Brand's Story: Embrace the Power of Digital Marketing
            </h1>
            <p className="text-white text-sm custom-sm:text-base custom-md:text-lg custom-lg:text-xl py-2 custom-md:py-4">
              Digital marketing is a gradual and steady journey toward success,
              requiring patience and care, especially in a market like India.
              Expecting immediate growth from a startup app development company
              can lead to disappointment. Instead, focus on nurturing and
              strategically developing your digital marketing efforts to build a
              strong foundation for future success.
            </p>
            <button className="mt-6 text-sm custom-md:text-base px-4 custom-md:px-6 py-2 custom-md:py-3 bg-teal-800 text-white font-semibold rounded-lg hover:bg-cyan-700 transition duration-300 ease-in-out">
              BOOK FREE CONSULTATION
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
