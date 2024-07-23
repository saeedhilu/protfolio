// src/pages/Home.jsx
import React from "react";
import { motion } from "framer-motion";
import Sidebar from "../components/Sidebar";
import AboutCommon from "../common/AboutCommon";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MyCarousel from "../common/Carousel";
import IntroductionSection from "../home/IntroductionSection";
import ThreeDAnimation from "../animations/ThreeDAnimation"; // Import the animation component
import Profile from "../assets/Profile.png"

const Home = () => {
  const heading = "I am a Python Full Stack Developer";
  const text = 
    "Hi, I'm Saeed NM, a passionate and self-taught Full Stack Python Developer. I specialize in creating dynamic and efficient web applications. Explore my work and let’s connect to build something amazing.";

  return (
    <div className="relative flex flex-col gap-y-6 min-h-screen text-white overflow-hidden">
      <Sidebar />

      {/* Profile Section */}
      <div className="pt-28 flex justify-center items-center">
        <motion.div
          className="relative flex items-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div
            className="w-96 h-96 mb-4 md:mb-0 md:mr-6 rounded-full shadow-slate-500 shadow-2xl overflow-hidden flex items-center justify-center"
            
          >
            <img
              src={Profile}
              alt="Saeed NM"
              className="w-full mt-5  h-full object-cover "
            
            />
          </div>
          <div className="pl-8 text-left">
            <h1 className="text-4xl font-bold">Hello! I’m Saeed NM</h1>
            <p className="text-xl mt-2">Full Stack Python Developer</p>
          </div>
        </motion.div>
      </div>

      <div className="flex justify-center mt-8">
        <AboutCommon heading={heading} text={text} />
      </div>

      <div className="p-6">
        <MyCarousel />
      </div>

      {/* 3D Animation */}
      {/* <div className="absolute bottom-0 right-0 w-1/4 h-1/4">
        <ThreeDAnimation />
      </div> */}
    </div>
  );
};

export default Home;
