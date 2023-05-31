import React, { useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import { FaUser, FaSearch, FaHeart, FaHome, FaPlus } from 'react-icons/fa';
import { TbMessageCircle2Filled } from "react-icons/tb";
import { UpPost } from "../components/UpPost";

export const NavBar = () => {
  const [showUpPost, setShowUpPost] = useState(false);

  const handleSubirPost = (post) => {
    // Aquí puedes agregar la lógica para subir el post al backend
    console.log("Subir post:", post);
    setShowPost(false);
  };

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
            <NavLink className={(args) => `${args.isActive ? 'text-black' : 'text-gray-900'} ease-in-out duration-500`}>
              <FaPlus className="text-2xl" onClick={() => setShowUpPost(true)}/>
            </NavLink>

            {showUpPost && (
              <UpPost onSubirPost={handleSubirPost} />
            )}
          </li>
          <li>
            <NavLink to="/likes" className={(args) => `${args.isActive ? 'text-black' : 'text-gray-900'} ease-in-out duration-500`}>
              <FaHeart className="text-2xl" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/messages" className={(args) => `${args.isActive ? 'text-black' : 'text-gray-900'} ease-in-out duration-500`}>
              <TbMessageCircle2Filled className="text-3xl" />
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
