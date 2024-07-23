import React from 'react';
import { motion } from 'framer-motion';
import RoomImage from "../assets/RoomImage.png"

const HeroSection = () => (
  <section className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
    <motion.img
      src={RoomImage}
      alt="Profile"
      className="w-40 h-40 rounded-full mb-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    />
    <motion.h1
      className="text-4xl font-bold mb-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      Saeed
    </motion.h1>
    <motion.p
      className="text-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}
    >
      I am a Full Stack Python Developer
    </motion.p>
  </section>
);

export default HeroSection;
