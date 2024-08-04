// src/Pages/Home.js
import React, { useState, useEffect } from "react";
import { HiOutlineLightBulb } from "react-icons/hi2";
import Template from "../assets/Image/Hometemplate.jpg"; // Import your background image

const Home = () => {
  // const [isBulbOn, setIsBulbOn] = useState(false);
  // const [bulbPosition, setBulbPosition] = useState(0);

  // useEffect(() => {
  //   const timeoutId = setTimeout(() => {
  //     setIsBulbOn(true);
  //   }, 1000);

  //   return () => clearTimeout(timeoutId);
  // }, []);

  // useEffect(() => {
  //   if (isBulbOn) {
  //     const intervalId = setInterval(() => {
  //       setBulbPosition((prevPosition) => {
  //         // Reset position if it exceeds 60 (example value)
  //         return prevPosition >= 60 ? 0 : prevPosition + 1;
  //       });
  //     }, 10);

  //     return () => clearInterval(intervalId);
  //   }
  // }, [isBulbOn]);

  return (
    <div className="relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${Template})`, height: "100vh" }}
      >
        {/* Content inside background image */}
        <div className="mt-56 h-full">
          <div className="flex justify-between">
            <div className="w-1/2 ml-6">
              <h1 className="text-white text-4xl font-bold">
                Transform Your Brand's Story: Embrace the Power of Digital
                Marketing
              </h1>
              <p className="text-white text-xl font bold mt-4">
                Digital marketing is a gradual and steady journey toward
                success, requiring patience and care, especially in a market
                like India. Expecting immediate growth from a startup app
                development company can lead to disappointment. Instead, focus
                on nurturing and strategically developing your digital marketing
                efforts to build a strong foundation for future success.
              </p>
              <button className="mt-6 px-6 py-3 bg-teal-800 text-white font-semibold rounded-lg hover:bg-cyan-600 transition duration-300 ease-in-out">
                BOOK FREE CONSULTANT
              </button>
            </div>
            <div className="flex flex-col items-center justify-center h-96 bg-transparent w-96 relative">
              {/* <div
                className="relative w-80 h-80 bg-transparent flex items-end justify-center"
                style={{ transform: `translateY(${bulbPosition}px)` }}
              >
                <HiOutlineLightBulb
                  className={`text-white text-9xl  ${
                    isBulbOn ? "animate-glow" : ""
                  }`}
                />
              </div> */}
              <div className="mt-8 text-white font-bold">CREATES IDEAS</div>
              <div className="mt-2 text-sm text-gray-400">NEURONVISUALS</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
