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

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  React.useEffect(() => {
    if (inView) {
      controls.start('show');
    }
  }, [controls, inView]);

  return (
    <section
      id="about"
      ref={ref}
      className="p-8 max-w-4xl mx-auto flex flex-col md:flex-row items-center rounded-lg   shadow-lg"
    >
      <div className="w-full md:w-1/3 mb-8 md:mb-0 md:mr-8">
        <motion.img
          src={profileImage}
          alt="Saeed NM"
          className="rounded-full w-full h-auto object-cover"
          initial={{ opacity: 0, x: -50 }}
          animate={controls}
          transition={{ duration: 1 }}
        />
      </div>
      <div className="w-full ">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          animate={controls}
          className="text-4xl font-bold mb-8 text-center md:text-left"
        >
          About Me
        </motion.h2>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={controls}
          className="text-white p-6 rounded-lg  shadow-lg"
        >
          <motion.p
            variants={fadeInUp}
            className="mb-4 text-lg"
          >
            I am Saeed NM, a self-taught Python and React.js developer from Malappuram, Kerala. Despite my background in biology science during my plus two, I have transitioned my passion for technology into practical skills through several mini projects and a major project, Zoomzzz, a room booking website.
          </motion.p>
          <motion.p
            variants={fadeInUp}
            className="mb-4 text-lg"
          >
            I am driven by a keen interest in creating high-performing and visually appealing websites, and I have honed my problem-solving abilities and communication skills. I am eager to leverage my skills and enthusiasm to contribute to innovative and impactful web development projects.
          </motion.p>
          <motion.a
            href="#contact"
            variants={fadeInUp}
            className=" text-white py-2 px-4 rounded bg-red-200 hover:bg-black transition duration-300 block text-center"
          >
            Contact Me
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
