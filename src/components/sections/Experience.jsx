import React from 'react';
import { motion } from 'framer-motion';
import Container from '../layout/Container';
import { portfolioData } from '../../data/portfolio';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
};

const Experience = () => {
  return (
    <section id="experience" className="py-24 overflow-hidden bg-white">
      <Container>
        <div className="space-y-12">
          <motion.div 
            className="space-y-4 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              Professional Experience
            </h2>
            <p className="text-slate-600">
              Building and scaling backend architectures for complex, real-world systems.
            </p>
          </motion.div>
          
          <div className="space-y-16">
            {portfolioData.experience.map((job) => (
              <motion.div 
                key={job.id} 
                className="relative border-l-2 border-slate-200 pl-6 md:pl-8 ml-3 md:ml-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
              >
                <motion.div 
                  className="absolute w-3 h-3 bg-indigo-600 rounded-full -left-[7px] top-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
                
                <div className="space-y-6">
                  <motion.div variants={itemVariants}>
                    <h3 className="text-xl font-bold text-slate-900 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
                      {job.role} 
                      <span className="text-indigo-600 text-base font-medium">at {job.company}</span>
                    </h3>
                    <p className="text-sm font-mono text-slate-500 mt-1">
                      {job.period}
                    </p>
                  </motion.div>
                  
                  <motion.p variants={itemVariants} className="text-slate-700 font-medium">
                    {job.context}
                  </motion.p>
                  
                  <motion.ul variants={itemVariants} className="space-y-3 text-slate-600">
                    {job.contributions.map((contribution, idx) => (
                      <li key={idx} className="relative pl-5">
                        <span className="absolute left-0 top-[0.6em] w-1.5 h-1.5 bg-slate-400 rounded-sm" />
                        {contribution}
                      </li>
                    ))}
                  </motion.ul>

                  <motion.div variants={itemVariants} className="flex flex-wrap gap-2 pt-2">
                    {job.architecture.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-indigo-50 text-indigo-700 border border-indigo-100"
                      >
                        {tech}
                      </span>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Experience;
