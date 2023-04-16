import React from 'react';

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
          <h2 className="text-2xl font-bold">Nombre de Usuario</h2>
          <p className="text-gray-500">100 Publicaciones</p>
          <p className="text-gray-500">1.2M Seguidores</p>
          <p className="text-gray-500">300 Siguiendo</p>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-bold mb-2">Biografía</h3>
        <p className="text-gray-500">
            ejemplo de descripcion
        </p>
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
            <p className="text-gray-500 mt-2">Historia 1</p>
          </div>
          <div>
            <img
              className="w-16 h-16 rounded-full"
              src="https://via.placeholder.com/150"
              alt="Story 2"
            />
            <p className="text-gray-500 mt-2">Historia 2</p>
          </div>
          {/* Agrega más historias destacadas aquí */}
        </div>
      </div>
    </div>
  );
};
