import React from 'react';
import { motion } from 'framer-motion';
import Container from '../layout/Container';
import { portfolioData } from '../../data/portfolio';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 20 }
  }
};

const Hero = () => {
  const { heading, subheading, cta } = portfolioData.hero;

  return (
    <section className="py-24 md:py-32 lg:py-40 bg-white">
      <Container>
        <motion.div 
          className="max-w-3xl space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-tight"
            variants={itemVariants}
          >
            {heading}
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl"
            variants={itemVariants}
          >
            {subheading}
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 pt-4"
            variants={itemVariants}
          >
            {cta.map((link, idx) => (
              <motion.a
                key={idx}
                href={link.href}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`inline-flex items-center justify-center px-6 py-3 text-sm font-medium transition-all rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-50 ${
                  link.primary
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-500/30 focus:ring-indigo-600'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 focus:ring-slate-500'
                }`}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Hero;
