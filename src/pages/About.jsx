import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import profileImage from '../assets/Profile.png';

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

const fadeOutDown = {
  hidden: { y: 0, opacity: 1 },
  exit: {
    y: 50,
    opacity: 0,
    transition: {
      duration: 0.8,
    }
  }
};

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

  React.useEffect(() => {
    if (inView) {
      controls.start('show');
    } else {
      controls.start('exit');
    }
  }, [controls, inView]);

  return (
    <section
      id="about"
      ref={ref}
      className="  ml-10 flex flex-col md:flex-row items-center   rounded-lg "
    >
      <div className="w-full  mb-8 md:mb-0 md:mr-8 flex justify-center">
        <motion.img
          src={profileImage}
          alt="Saeed NM"
          className=" object-cover"
          variants={fadeInUp}
          initial="hidden"
          animate={controls}
          exit="exit"
          transition={{ duration: 1 }}
        />
      </div>
      <div className="w-full ">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          animate={controls}
          exit="exit"
          className="text-4xl font-bold mb-8 text-center md:text-left text-white"
        >
          About Me
        </motion.h2>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={controls}
          exit="exit"
          className="text-2xl pr-20"
        >
          <motion.p
            variants={fadeInUp}
            className="mb-4 text-lg"
          >
            I am Saeed NM, a <span className="text-2xl text-red-300">self-taught</span> Python and React.js developer from Malappuram, Kerala. Despite my background in biology science during my plus two, I have transitioned my passion for technology into practical skills through several mini projects and a major project, Zoomzzz, a room booking website.
          </motion.p>
          <motion.p
            variants={fadeInUp}
            className="mb-4 text-xl"
          >
            I am driven by a keen interest in creating high-performing and visually appealing websites, and I have honed my problem-solving abilities and communication skills. I am eager to leverage my skills and enthusiasm to contribute to innovative and impactful web development projects.
          </motion.p>
          <motion.a
            href="#contact"
            variants={fadeInUp}
            className="text-white py-2 px-4 rounded  hover: transition duration-300 block text-center"
          >
            Contact Me
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
