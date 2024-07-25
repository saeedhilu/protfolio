import React from 'react';
import { motion } from 'framer-motion';
import image from '../assets/pimage.png';
import SocialMediaIcons from '../layout/SocialMediaIcons';

const Home = () => {
  const heading = "I am a Python Full Stack Developer";
  const text = "Hi, I'm Saeed NM, a passionate and self-taught Full Stack Python Developer. I specialize in creating dynamic and efficient web applications. Explore my work and let’s connect to build something amazing.";

  return (
    <div id="home" className="relative flex flex-col min-h-screen text-white overflow-hidden">
      <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover z-[-1]" src="https://cdn.dribbble.com/userupload/6001819/file/original-90e4d6cf3edd4355d5a27990a501529f.mp4" />
      <div className="flex flex-col md:flex-row-reverse items-center justify-center relative z-10">
        <motion.div
          className="flex-shrink-0 w-full md:w-1/2 h-auto flex items-center justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {/* <div className="w-3/4 md:w-full h-auto overflow-hidden flex items-center bg-gradient-to-r from-white to bg-custom-dark justify-center ">
            <img src={image} alt="Saeed NM" className="bg-gradient-to-r from-gray-900 via-black to-gray-800 w-full h-full object-cover" />
          </div> */}
        </motion.div>
        <motion.div
          className="flex-shrink-0 w-full md:w-1/2 text-left p-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl font-bold mb-4">Hello! I’m Saeed NM</h1>
          <h2 className="text-3xl font-bold mb-8">{heading}</h2>
          <p className="text-white bg-opacity-75 text-2xl rounded-lg ">{text}</p>
          <div className="mt-4 flex justify-end"> 
            <SocialMediaIcons />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
