import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

function Sidebar() {
  const location = useLocation(); // Hook to get the current route

  return (
    <div className="fixed top-20 left-28 w-14 rounded-full h-80 bg-gray-800 text-white flex flex-col shadow-lg  items-center py-4 bg-gradient-to-tr from-gray-800 to-zinc-800">
      <nav className="flex flex-col items-center space-y-4 mt-10 relative">
        <AnimatedBackground currentPath={location.pathname} />
        <NavLink to="/" icon={<FaHome />} label="Home" currentPath={location.pathname} />
        <NavLink to="/about" icon={<FaUser />} label="About" currentPath={location.pathname} />
        <NavLink to="/projects" icon={<FaProjectDiagram />} label="Projects" currentPath={location.pathname} />
        <NavLink to="/contact" icon={<FaEnvelope />} label="Contact" currentPath={location.pathname} />
      </nav>
    </div>
  );
}

const navLinks = [
  { to: "/", icon: <FaHome />, label: "Home" },
  { to: "/about", icon: <FaUser />, label: "About" },
  { to: "/projects", icon: <FaProjectDiagram />, label: "Projects" },
  { to: "/contact", icon: <FaEnvelope />, label: "Contact" },
];

const AnimatedBackground = ({ currentPath }) => {
  const currentIndex = navLinks.findIndex(link => link.to === currentPath);
  const topPosition = `${currentIndex * 4.5 + 2.25}rem`;

  return (
    <motion.div
      className="absolute w-12 h-12 rounded-full"
      style={{ transform: `translateY(${topPosition})` }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    />
  );
};

const NavLink = ({ to, icon, label, currentPath }) => {
  const isActive = currentPath === to;

  return (
    <Link
      to={to}
      className={`relative flex flex-col items-center p-2 rounded-full h-12 w-12 transition-all duration-700 ${isActive ? 'scale-110 bg-gray-700' : 'hover:bg-slate-500 hover:bg-opacity-5'}`}
    >
      <motion.div
        className="relative flex flex-col  items-center group"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.2 }}
        transition={{ duration: 0.3 }}
      >
        <div
          className={`text-2xl transition-all  duration-500 ${isActive ? 'text-white' : 'group-hover:text-gray-300 opacity-45'}`}
        >
          {icon}
        </div>
        {isActive && (
          <div className="absolute -bottom-3 w-1 h-1 rounded-full bg-white transition-all duration-500"></div>
        )}
      </motion.div>
    </Link>
  );
};

export default Sidebar;
