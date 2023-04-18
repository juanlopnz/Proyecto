import React from 'react';
import { Link } from "react-router-dom";

export const SideBar = () => {
  return (
    <div>

      <aside className="flex flex-col items-center fixed top-0 left-0 z-40 w-64 h-screen p-4">
        <img
          className="flex items-center w-20 h-20 m-3 rounded-full"
          src="https://via.placeholder.com/150"
          alt="Profile Avatar"
        />
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
      </aside>

      <div class="p-4 sm:ml-64">
        <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <div class="grid grid-cols-3 gap-4 mb-4">
            <div class="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
              <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>
            <div class="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
              <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>
            <div class="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
              <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>
          </div>
          <div class="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
            <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
          </div>
          <div class="grid grid-cols-2 gap-4 mb-4">
            <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>
            <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>
            <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>
            <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>
          </div>
          <div class="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
            <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>
            <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>
            <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>
            <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};




