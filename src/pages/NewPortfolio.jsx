import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import EngineeringHighlights from '../components/sections/EngineeringHighlights';
import CaseStudies from '../components/sections/CaseStudies';
import Experience from '../components/sections/Experience';
import Skills from '../components/sections/Skills';
import AdditionalProjects from '../components/sections/AdditionalProjects';
import SystemThinking from '../components/sections/SystemThinking';
import CodingProfiles from '../components/sections/CodingProfiles';
import Certifications from '../components/sections/Certifications';

const NewPortfolio = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-500/30">
      <Navbar />
      <main>
        <Hero />
        <EngineeringHighlights />
        <CaseStudies />
        <Experience />
        <Skills />
        <AdditionalProjects />
        <SystemThinking />
        <CodingProfiles />
        <Certifications />
      </main>
      <Footer />
    </div>
  );
};

export default NewPortfolio;
