import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { y: 50, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const About = () => {
  return (
    <section className="p-8 max-w-4xl mx-auto bg-gradient-to-r  rounded-lg">
      <motion.h2 
        variants={fadeInUp}
        initial="hidden"
        animate="show"
        className="text-3xl font-bold mb-8"
      >
        About Me
      </motion.h2>
      <motion.div 
        variants={fadeInUp}
        initial="hidden"
        animate="show"
        className=" text-white p-6 rounded-lg shadow-lg"
      >
        <motion.p 
          variants={fadeInUp}
          initial="hidden"
          animate="show"
          className="mb-4"
        >
          Hello! I'm Saeed, a full-stack developer specializing in Python and React. I have a passion for creating intuitive and dynamic web applications.
        </motion.p>
        <motion.ul
          variants={fadeInUp}
          initial="hidden"
          animate="show"
          className="list-disc pl-8 mb-4"
        >
          <motion.li variants={fadeInUp}>Proficient in Python, React, and Node.js</motion.li>
          <motion.li variants={fadeInUp}>Worked on projects involving machine learning</motion.li>
          <motion.li variants={fadeInUp}>Experience with agile and scrum methodologies</motion.li>
        </motion.ul>
        <motion.a 
          href="#contact"
          variants={fadeInUp}
          initial="hidden"
          animate="show"
          className="bg-white text-sky-700 py-2 px-4 rounded hover:bg-sky-100 transition duration-300"
        >
          Contact Me
        </motion.a>
      </motion.div>
    </section>
  );
};

export default About;