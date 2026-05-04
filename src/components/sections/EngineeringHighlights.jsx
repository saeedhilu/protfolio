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
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const EngineeringHighlights = () => {
  return (
    <section id="highlights" className="py-20 bg-slate-50 border-y border-slate-200 overflow-hidden">
      <Container>
        <div className="space-y-12">
          <motion.div 
            className="space-y-4 max-w-2xl"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              Engineering Highlights
            </h2>
            <p className="text-slate-600">
              Proven track record of designing resilient systems and solving complex engineering challenges at scale.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid sm:grid-cols-2 gap-8 lg:gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {portfolioData.highlights.map((highlight, idx) => (
              <motion.div key={idx} className="space-y-3" variants={itemVariants}>
                <div className="flex items-center gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-indigo-600 flex-shrink-0" />
                  <h3 className="text-lg font-semibold text-slate-900">
                    {highlight.title}
                  </h3>
                </div>
                <p className="text-slate-600 leading-relaxed pl-4.5">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default EngineeringHighlights;
