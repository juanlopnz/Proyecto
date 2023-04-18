import React from 'react';
import { Link } from "react-router-dom";
import { FaUser, FaSearch, FaHeart } from 'react-icons/fa';

export const NavBar = () => {
  return (
    <nav className="bg-gray-200 fixed bottom-0 left-0 right-0">
      <div className="container mx-auto px-20 py-2 flex justify-center place-items-center">
       
        <ul className="flex space-x-20 items-center">
         
          <li>
            <Link href="/profile" className="text-black hover:text-gray-200">
              <FaUser className="text-2xl" />
            </Link>
          </li>
          <li>
            <Link href="/search" className="text-black hover:text-gray-200">
              <FaSearch className="text-2xl" />
            </Link>
          </li>
          <li>
            <Link href="/likes" className="text-black hover:text-gray-200">
              <FaHeart className="text-2xl" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};