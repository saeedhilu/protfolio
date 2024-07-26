// src/components/ProjectCard.jsx
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const ProjectCard = ({ project, index }) => {
  console.log('====================================');
  console.log(project.image);
  console.log('====================================');
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} mb-8`}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <div className="md:w-1/2">
        <img src={project.image} alt={project.name} className="w-full h-full object-cover rounded-lg shadow-lg" />
      </div>
      <div className="md:w-1/2 md:px-8 flex flex-col justify-center">
        <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
        <div className="text-lg">{project.description}</div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
