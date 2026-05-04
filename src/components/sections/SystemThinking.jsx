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
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const SystemThinking = () => {
  const { scalability, dataIntegrity, failureHandling } = portfolioData.systemThinking;

  return (
    <section className="py-24 bg-slate-50 border-y border-slate-200 overflow-hidden">
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
              System Thinking & Philosophy
            </h2>
            <p className="text-slate-600">
              How I approach building robust, production-grade architecture.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-8 lg:gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div className="space-y-4 bg-white p-6 rounded-xl border border-slate-200 shadow-sm" variants={itemVariants}>
              <h3 className="text-lg font-bold flex items-center gap-2 text-slate-900">
                <span className="text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded text-sm">01</span> Scalability
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm lg:text-base">
                "{scalability}"
              </p>
            </motion.div>
            
            <motion.div className="space-y-4 bg-white p-6 rounded-xl border border-slate-200 shadow-sm" variants={itemVariants}>
              <h3 className="text-lg font-bold flex items-center gap-2 text-slate-900">
                <span className="text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded text-sm">02</span> Data Integrity
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm lg:text-base">
                "{dataIntegrity}"
              </p>
            </motion.div>
            
            <motion.div className="space-y-4 bg-white p-6 rounded-xl border border-slate-200 shadow-sm" variants={itemVariants}>
              <h3 className="text-lg font-bold flex items-center gap-2 text-slate-900">
                <span className="text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded text-sm">03</span> Failure Handling
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm lg:text-base">
                "{failureHandling}"
              </p>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default SystemThinking;
