import React, { useState } from 'react';
import { SlMenu } from "react-icons/sl";
import { Link } from "react-router-dom";

export const SideBar = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false) 

  return (
    <div className={sidebarOpen? "flex flex-col bg-gray-50 items-center fixed top-0 -left-0 z-40 w-64 h-screen p-4 transition-all duration-300" : "flex flex-col bg-gray-50 items-center fixed top-0 -left-64 z-40 w-64 h-screen p-4 transition-all duration-300"}>
      <div onClick={() => setSidebarOpen(!sidebarOpen)} className='absolute left-[270px] top-5 rounded-lg hover:bg-gray-200 p-1'><SlMenu className='block text-2xl text-center'></SlMenu></div>
      <div>
        <img
          className="flex items-center w-20 h-20 m-3 rounded-full"
          src="https://via.placeholder.com/150"
          alt="Profile Avatar"
        />
      </div>
      <div className="flex flex-col justify-center">
        <h2 className="text-2xl font-bold">Nombre de Usuario</h2>
        <Link className="flex items-center mt-4 w-93 h-50 font-medium text-lg leading-50 text-center text-blue-500 hover:text-blue-600 font-poppins">
          <span className="flex-1 whitespace-nowrap">Editar Perfil</span>
        </Link>
      </div>
      <div className="flex-1 h-full px-3 py-4">
        <ul className="space-y-2 font-medium">
          <li>
            <Link className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-200">
              <span className="flex-1 m-0.5 text-center whitespace-nowrap">Favoritos</span>
            </Link>
          </li>
          <li>
            <Link className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-200">
              <span className="flex-1 m-0.5 text-center whitespace-nowrap">Seguidos</span>
            </Link>
          </li>
          <li>
            <Link className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-200">
              <span className="flex-1 m-0.5 text-center whitespace-nowrap">Seguidores</span>
            </Link>
          </li>
          <li>
            <Link className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-200">
              <span className="flex-1 m-0.5 text-center whitespace-nowrap">Mensajes</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};




