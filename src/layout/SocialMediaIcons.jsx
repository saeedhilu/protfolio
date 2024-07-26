// src/components/SocialMediaIcons.jsx
import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const SocialMediaIcons = () => {
  return (
    <div className="flex space-x-4">
      <a href="https://github.com/saeedhilu" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
        <FaGithub size={30} />
      </a>
     
      <a href="https://www.linkedin.com/in/saeed-nm-62924b23a/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
        <FaLinkedin size={30} />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
