// Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-4">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold">Hiring Mothers</h1>
        <nav className="mt-4">
          <ul className="flex">
            <li className="mr-6">
              <Link to="/" className="text-white hover:text-gray-300">
                Home
              </Link>
            </li>
            <li className="mr-6">
              <Link to="/services" className="text-white hover:text-gray-300">
                Services
              </Link>
            </li>
            <li className="mr-6">
              <Link to="/signup" className="text-white hover:text-gray-300">
                Sign Up
              </Link>
            </li>
            <li className="mr-6">
              <Link to="/login" className="text-white hover:text-gray-300">
                Login
              </Link>
            </li>
            {/* Add more navigation links as needed */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
