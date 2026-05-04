import React from 'react';
import Container from './Container';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md border-b border-slate-200 bg-white/80 transition-colors duration-300">
      <Container>
        <div className="flex items-center justify-between h-16">
          <div className="font-mono text-sm font-semibold tracking-tight text-slate-900">
            Saeed NM
          </div>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-600">
            <a href="#experience" className="hover:text-indigo-600 transition-colors">Experience</a>
            <a href="#case-studies" className="hover:text-indigo-600 transition-colors">Case Studies</a>
            <a href="#skills" className="hover:text-indigo-600 transition-colors">Skills</a>
          </nav>
          <div className="flex items-center gap-4">
            <a 
              href="mailto:contact@example.com" 
              className="text-sm font-medium text-slate-900 hover:text-indigo-600 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
