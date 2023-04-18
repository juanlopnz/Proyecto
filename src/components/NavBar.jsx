import React from 'react';
import { FaUser, FaSearch, FaHeart } from 'react-icons/fa';

export const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-400 via-blue-300 to-blue-100 fixed bottom-0 left-0 right-0">
      <div className="container mx-auto px-20 py-2 flex justify-between items-center">
       
        <ul className="flex space-x-20 items-center">
         
          <li>
            <a href="/profile" className="text-black hover:text-gray-200">
              <FaUser className="text-2xl" />
            </a>
          </li>
          <li>
            <a href="/search" className="text-black hover:text-gray-200">
              <FaSearch className="text-2xl" />
            </a>
          </li>
          <li>
            <a href="/likes" className="text-black hover:text-gray-200">
              <FaHeart className="text-2xl" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};