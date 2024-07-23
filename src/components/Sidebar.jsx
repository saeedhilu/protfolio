// src/components/Sidebar.jsx
import React from 'react';
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope, FaFile } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';

const Sidebar = () => (
  <div style={
    {
      boxShadow: '10px 4px 8px 0 rgba(0, 0, 0, 0.52), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
    }
  } className="fixed inset-x-0 bottom-0 sm:bottom-auto   sm:ml-20 sm:left-0 sm:top-20 w-full sm:w-14 h-16  sm:h-[260px] bg-gray-800 text-white flex sm:flex-col items-center sm:items-start py-2  bg-gradient-to-tr from-gray-800 to-zinc-800 sm:rounded-full    z-50">
    <nav className="flex flex-row sm:flex-col   items-center justify-around sm:justify-start space-x-4 sm:space-x-1  mt-2  relative">
      <NavLink to="home"  icon={<FaHome />} />
      <NavLink to="about" icon={<FaUser />} />
      <NavLink to="projects" icon={<FaProjectDiagram />} />
      <NavLink to="contact" icon={<FaEnvelope />} />
      <NavLink to="resume" icon={<FaFile />} />
    </nav>
  </div>
);

const NavLink = ({ to, icon }) => (
  <ScrollLink
    to={to}
    smooth={true}
    duration={1000}
    spy={true}
    exact="true"
    className="relative flex  flex-col items-center p-2 rounded-full h-12 w-12  transition-all duration-700 hover:bg-slate-500 hover:bg-opacity-5 cursor-pointer"
  >
    <motion.div
      className="relative flex flex-col items-center group"
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.2 }}
      transition={{ duration: 0.3 }}
    >
      <div className="text-2xl transition-all duration-500 group-hover:text-gray-300 opacity-45">
        {icon}
      </div>
    </motion.div>
  </ScrollLink>
);

export default Sidebar;
