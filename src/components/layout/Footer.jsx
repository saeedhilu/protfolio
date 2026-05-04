import React from 'react';
import Container from './Container';

const Footer = () => {
  return (
    <footer className="py-12 mt-24 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0A0A0A] transition-colors duration-300">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
            <span>© {new Date().getFullYear()} Saeed Hilu. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-6 text-sm font-medium">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href="mailto:contact@example.com" 
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
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
