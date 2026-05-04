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

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { type: "spring", stiffness: 200, damping: 15 }
  }
};

const Skills = () => {
  // Sort skills by priority to ensure correct order
  const sortedSkills = [...portfolioData.skills].sort((a, b) => a.priority - b.priority);

  return (
    <section id="skills" className="py-24 overflow-hidden bg-white">
      <Container>
        <div className="space-y-16">
          <motion.div 
            className="space-y-4 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              Technical Arsenal
            </h2>
            <p className="text-slate-600">
              Tools, frameworks, and concepts I use to build robust, scalable applications.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
            {sortedSkills.map((skillGroup, idx) => (
              <motion.div 
                key={skillGroup.category} 
                className="space-y-4"
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h3 className={`text-sm font-bold uppercase tracking-wider pb-2 border-b ${
                  skillGroup.highlight 
                    ? 'text-indigo-600 border-indigo-200' 
                    : 'text-slate-900 border-slate-200'
                }`}>
                  {skillGroup.category}
                </h3>
                <motion.div 
                  className="flex flex-wrap gap-2 pt-1"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {skillGroup.items.map((skill, i) => (
                    <motion.span 
                      key={i}
                      variants={badgeVariants}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className={`px-3 py-1.5 text-sm font-medium rounded-md shadow-sm cursor-default border ${
                        skillGroup.highlight
                          ? 'bg-indigo-50 text-indigo-700 border-indigo-100 hover:border-indigo-300'
                          : 'bg-white text-slate-800 border-slate-200'
                      }`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Skills;
