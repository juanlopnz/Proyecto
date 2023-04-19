import React from 'react';
import { Link, NavLink } from "react-router-dom";
import { FaUser, FaSearch, FaHeart, FaHome } from 'react-icons/fa';

export const NavBar = () => {
  return (
    <nav className="bg-gray-200 fixed bottom-0 left-0 right-0">
      <div className="container mx-auto px-20 py-2 flex justify-center place-items-center">

        <ul className="flex space-x-20 items-center">
          <li>
            <NavLink to="/home" className={(args) => `${args.isActive ? 'text-black' : 'text-gray-900'} ease-in-out duration-500`}>
              <FaHome className="text-3xl" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile" className={(args) => `${args.isActive ? 'text-black' : 'text-gray-900'} ease-in-out duration-500`}>
              <FaUser className="text-2xl" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/search" className={(args) => `${args.isActive ? 'text-black' : 'text-gray-900'} ease-in-out duration-500`}>
              <FaSearch className="text-2xl" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/likes" className={(args) => `${args.isActive ? 'text-black' : 'text-gray-900'} ease-in-out duration-500`}>
              <FaHeart className="text-2xl" />
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};