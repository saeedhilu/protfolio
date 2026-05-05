import React from 'react';
import { motion } from 'framer-motion';
import Container from '../layout/Container';
import { portfolioData } from '../../data/portfolio';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const AdditionalProjects = () => {
  return (
    <section id="additional-projects" className="py-24 bg-white border-y border-slate-200 overflow-hidden">
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
              Additional Systems
            </h2>
            <p className="text-slate-600">
              Focused implementations demonstrating system architecture and backend proficiency.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {portfolioData.additionalProjects.map((project) => (
              <motion.div 
                key={project.id} 
                variants={itemVariants}
                className="bg-slate-50 rounded-xl border border-slate-200 p-6 md:p-8"
              >
                <header className="mb-6">
                  <p className="text-sm font-mono font-medium text-indigo-600 mb-2">
                    {project.context}
                  </p>
                  <h3 className="text-xl font-bold text-slate-900">
                    {project.title}
                  </h3>
                </header>
                <ul className="space-y-3 text-slate-600">
                  {project.contributions.map((contribution, idx) => (
                    <li key={idx} className="relative pl-5 text-sm leading-relaxed">
                      <span className="absolute left-0 top-[0.6em] w-1.5 h-1.5 bg-slate-400 rounded-sm" />
                      {contribution}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default AdditionalProjects;
