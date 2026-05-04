import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import EngineeringHighlights from '../components/sections/EngineeringHighlights';
import Experience from '../components/sections/Experience';
import CaseStudies from '../components/sections/CaseStudies';
import Skills from '../components/sections/Skills';
import SystemThinking from '../components/sections/SystemThinking';
import Certifications from '../components/sections/Certifications';

const NewPortfolio = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-500/30">
      <Navbar />
      <main>
        <Hero />
        <EngineeringHighlights />
        <Experience />
        <CaseStudies />
        <Skills />
        <SystemThinking />
        <Certifications />
      </main>
      <Footer />
    </div>
  );
};

export default NewPortfolio;
