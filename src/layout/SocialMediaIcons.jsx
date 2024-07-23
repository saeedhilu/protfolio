// src/components/SocialMediaIcons.jsx
import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const SocialMediaIcons = () => {
  return (
    <div className="flex space-x-4">
      <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
        <FaGithub size={30} />
      </a>
      <a href="https://instagram.com/your-profile" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
        <FaInstagram size={30} />
      </a>
      <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
        <FaLinkedin size={30} />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
