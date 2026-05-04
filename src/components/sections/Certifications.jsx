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

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-slate-50 border-y border-slate-200 overflow-hidden">
      <Container>
        <div className="max-w-3xl">
          <motion.div 
            className="space-y-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl font-bold tracking-tight text-slate-900">
              Certifications
            </h2>
          </motion.div>
          
          <motion.div 
            className="flex flex-col gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {portfolioData.certifications.map((cert, idx) => (
              <motion.div 
                key={idx} 
                variants={itemVariants}
                className="flex flex-col sm:flex-row sm:items-center justify-between py-3 border-b border-slate-200 last:border-0"
              >
                <div className="flex items-baseline gap-2">
                  <span className="font-semibold text-slate-900">{cert.title}</span>
                  <span className="text-sm text-slate-500">— {cert.issuer}</span>
                </div>
                {cert.url && (
                  <a 
                    href={cert.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-1 sm:mt-0 text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors"
                  >
                    View Credential ↗
                  </a>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Certifications;
