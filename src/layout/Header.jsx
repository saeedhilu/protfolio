import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="bg-gray-900 text-white p-4 flex justify-between items-center">
    <h1 className="text-2xl font-bold">Saeed's Portfolio</h1>
    <nav>
      <Link to="/" className="mr-4">Home</Link>
      <Link to="/projects" className="mr-4">Projects</Link>
      <Link to="/about">About</Link>
    </nav>
  </header>
);

export default Header;
