import React from 'react';
import { NavLink } from 'react-router-dom';

const StickyNavbar = () => {
  return (
    <nav className="bg-nav-btn text-white sticky top-0">
      <div className="container mx-auto flex justify-around p-4 sticky top-0 z-50 gap-12">
        <NavLink 
          to="/projects/project1" 
          className={({ isActive }) =>
            `p-2 w-24 text-center rounded-full transition-transform transform ${
              isActive 
                ? 'bg-nav-btn-hover text-white shadow-custom-shadow-black' // Active state
                : 'bg-nav-btn shadow-custom-shadow-black hover:bg-nav-btn-hover hover:text-white' // Inactive state with hover
            }`
          }
        >
          Project 1
        </NavLink>
        <NavLink 
          to="/projects/project2" 
          className={({ isActive }) =>
            `p-2 w-24 text-center rounded-full transition-transform transform ${
              isActive 
                ? 'bg-nav-btn-hover text-white shadow-custom-shadow-black' // Active state
                : 'bg-nav-btn shadow-custom-shadow-black hover:bg-nav-btn-hover hover:text-white' // Inactive state with hover
            }`
          }
        >
          Project 2
        </NavLink>
        <NavLink 
          to="/projects/project3" 
          className={({ isActive }) =>
            `p-2 w-24 text-center rounded-full transition-transform transform ${
              isActive 
                ? 'bg-nav-btn-hover text-white shadow-custom-shadow-black' // Active state
                : 'bg-nav-btn shadow-custom-shadow-black hover:bg-nav-btn-hover hover:text-white' // Inactive state with hover
            }`
          }
        >
          Project 3
        </NavLink>
      </div>
    </nav>
  );
};

export default StickyNavbar;
