import React from 'react';
import { motion } from 'framer-motion';
import Container from '../layout/Container';
import { portfolioData } from '../../data/portfolio';

const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-24 bg-slate-50 border-y border-slate-200 overflow-hidden">
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
              Engineering Case Studies
            </h2>
            <p className="text-slate-600">
              Deep dives into architecture, technical challenges, and system design decisions.
            </p>
          </motion.div>
          
          <div className="space-y-12">
            {portfolioData.caseStudies.map((study, idx) => (
              <motion.div 
                key={study.id} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative bg-white rounded-xl border border-slate-200 p-6 md:p-8 lg:p-10 transition-shadow shadow-sm hover:shadow-md"
              >
                <div className="space-y-8">
                  <header className="space-y-2">
                    <p className="text-sm font-mono font-medium text-indigo-600">
                      {study.context}
                    </p>
                    <h3 className="text-2xl font-bold text-slate-900">
                      {study.title}
                    </h3>
                  </header>

                  <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-2">The Problem</h4>
                        <p className="text-slate-600 leading-relaxed">
                          {study.problem}
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-2">Solution & Architecture</h4>
                        <p className="text-slate-600 leading-relaxed">
                          {study.solution}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-2">Key Focus Areas</h4>
                        <ul className="flex flex-wrap gap-2">
                          {study.focus.map((item, idx) => (
                            <li 
                              key={idx}
                              className="px-3 py-1.5 text-sm font-medium rounded-md bg-slate-100 text-slate-800"
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="p-4 rounded-lg bg-indigo-50 border border-indigo-100 transition-colors duration-300">
                        <h4 className="text-sm font-bold uppercase tracking-wider text-indigo-900 mb-2">Outcome & Impact</h4>
                        <p className="text-indigo-800 font-medium">
                          {study.outcome}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CaseStudies;
