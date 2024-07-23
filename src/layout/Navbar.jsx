import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="flex justify-between p-4 bg-gray-800 text-white fixed w-full z-50">
      <div>
        <Link to="home" smooth={true} duration={1000} className="mr-4 cursor-pointer">Home</Link>
        <Link to="about" smooth={true} duration={1000} className="mr-4 cursor-pointer">About</Link>
        <Link to="contact" smooth={true} duration={1000} className="mr-4 cursor-pointer">Contact</Link>
        <Link to="projects" smooth={true} duration={1000} className="mr-4 cursor-pointer">Projects</Link>
        <Link to="resume" smooth={true} duration={1000} className="mr-4 cursor-pointer">Resume</Link>
      </div>
    </nav>
  );
};

export default Navbar;
