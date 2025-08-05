import React from "react";
import profileImg from "../assets/images/sid.jpg"; // Add your image to /assets folder

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-[#87CEFA] to-white pt-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center text-center md:text-left">
        {/* Text Section */}
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-4">
            Hi, I'm <span className="text-[#1E3A8A]">Siddharth</span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-700 mb-6">
            Full Stack Developer
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            I create beautiful, functional, and user-friendly web applications.
            Passionate about clean code and innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="bg-[#1E3A8A] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#162e6d] transition duration-300 transform hover:scale-105"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="border-2 border-[#1E3A8A] text-[#1E3A8A] px-8 py-3 rounded-lg font-semibold hover:bg-[#1E3A8A] hover:text-white transition duration-300 transform hover:scale-105"
            >
              Get In Touch
            </a>
          </div>
          {/* Social Icons */}
          <div className="mt-8 flex justify-center md:justify-start space-x-6">
            {/* Add Social Links here if needed */}
          </div>
        </div>
        {/* Profile Image */}
        <div className="md:w-1/2 mb-10 md:mb-0 flex justify-center">
          <img
            src={profileImg}
            alt="Profile"
            className="w-72 h-72 object-cover rounded-full shadow-lg border-4 border-white"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
