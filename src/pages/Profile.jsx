import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Profile = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex items-center">
        <img
          className="w-16 h-16 rounded-full mr-4"
          src="https://via.placeholder.com/150"
          alt="Profile Avatar"
        />
        <div>
  <h2 className="text-1xl ">username</h2>
  <div className="flex flex-row text-gray-500">
    <p className="mr-3">100 Publicaciones</p>
    <p className="mr-4">1.2M Seguidores</p>
    <p className="mr-4">300 Siguiendo</p>
  </div>
</div>

      </div>
      
      <div className="mt-4">
        <h3 className="text-xl font-bold mb-2">Historias destacadas</h3>
        <div className="flex">
          <div className="mr-4">
            <img
              className="w-16 h-16 rounded-full"
              src="https://via.placeholder.com/150"
              alt="Story 1"
            />
            <p className="text-gray-500 mt-2 text-center">a</p>
          </div>
          <div className='mr-4'>
            <img
              className="w-16 h-16 rounded-full"
              src="https://via.placeholder.com/150"
              alt="Story 2"
            />
            <p className="text-gray-500 mt-2  text-center">b</p>
          </div> 
          <div classname="mr-4">
            <img
              className="w-16 h-16 rounded-full"
              src="https://via.placeholder.com/150"
              alt="Story 2"
            />
            <p className="text-gray-500 mt-2  text-center">c</p>
          </div>
         
          
        </div>
      </div>
    </div>
  );
};
