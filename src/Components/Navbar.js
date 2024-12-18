import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">
          <Link to="/">InnovTuitions</Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-12">
          <Link to="/" className="text-white hover:text-orange-500">Home</Link>
          <Link to="/about" className="text-white hover:text-orange-500">Need a Tutor</Link>
          <Link to="/projects" className="text-white hover:text-orange-500">Become a Tutor</Link>
          <Link to="/courses" className="text-white hover:text-orange-500">About</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-gray-800 p-4`}>
        <Link to="/" className="block text-white py-2">Home</Link>
        <Link to="/about" className="block text-white py-2">About</Link>
        <Link to="/projects" className="block text-white py-2">Projects</Link>
        <Link to="/courses" className="block text-white py-2">Courses</Link>
      </div>
    </nav>
  );
};

export default Navbar;
