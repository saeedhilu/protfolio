import React from 'react';
import { motion } from 'framer-motion';
import Container from '../layout/Container';
import { portfolioData } from '../../data/portfolio';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

const CodingProfiles = () => {
  return (
    <section id="coding-profiles" className="py-20 bg-slate-50 border-t border-slate-200 overflow-hidden">
      <Container>
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <motion.div 
            className="space-y-3"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-xl font-bold tracking-tight text-slate-900">
              Coding Profiles & Practice
            </h2>
            <p className="text-sm text-slate-600">
              Continuous problem-solving and logic optimization.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {portfolioData.codingProfiles.map((profile, idx) => (
              <motion.a 
                key={idx} 
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ y: -2 }}
                className="group p-5 bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col items-center justify-center space-y-2"
              >
                <span className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                  {profile.platform}
                </span>
                <span className="text-xs text-slate-500 text-center px-2 leading-relaxed">
                  {profile.description}
                </span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default CodingProfiles;
