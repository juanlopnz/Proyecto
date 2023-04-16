import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faComment, faChartLine, faStar, faUserFriends, faUsers, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export const Sidebar = () => {
  return (
    <aside className="bg-gray-800 w-20 sm:w-30 h-screen sm:h-auto flex flex-col items-center">

      <div className="mt-10 sm:mt-1">
        <img src="ruta-de-la-foto-de-usuario" alt="Foto de usuario" className="w-10 h-10 sm:w-8 sm:h-8 rounded-full" />
      </div>
   
      <h2 className="text-white text-sm mt-2 sm:mt-3">Nombre de Usuario</h2>
  
      <a href="/editprofile" className="text-white text-xs mt-1 sm:mt-2 hover:text-gray-300">
        Editar perfil
      </a>
      <ul className="flex flex-col items-center mt-5 sm:mt-10 space-y-3">
        <li>
          <a href="/profile" className="text-white hover:text-gray-300">
            Profile
          </a>
        </li>
        <li>
          <a href="/chats" className="text-white hover:text-gray-300">
            chats 
          </a>
        </li>
        <li>
          <a href="/favorites" className="text-white hover:text-gray-300">
            Favoritos
          </a>
        </li>
        <li>
          <a href="/following" className="text-white hover:text-gray-300">
            seguidos
          </a>
        </li>
        <li>
          <a href="/followers" className="text-white hover:text-gray-300">
            seguidores 
          </a>
        </li>
        <li>
          <a href="/messages" className="text-white hover:text-gray-300">
            mensajes 
          </a>
        </li>
      </ul>
    </aside>
  );
};




