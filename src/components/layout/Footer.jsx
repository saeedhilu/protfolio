import React from 'react';
import Container from './Container';

const Footer = () => {
  return (
    <footer className="py-12 bg-white border-t border-slate-200">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4 text-sm text-slate-500">
            <span>© {new Date().getFullYear()} Saeed NM. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-6 text-sm font-medium">
            <a 
              href="https://github.com/saeedhilu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-indigo-600 transition-colors"
            >
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/saeed-nm-62924b23a" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-indigo-600 transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href="mailto:contact@example.com" 
              className="text-slate-600 hover:text-indigo-600 transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
