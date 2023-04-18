import React from 'react';

export const Followers = ({ seguidores }) => {
  return (
    <div className="flex items-center mt-4">
      <h3 className="text-xl font-bold mr-4">{seguidores}</h3>
      <p className="text-gray-500">seguidores</p>
      <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full ml-auto">Seguir</button>
    </div>
  );
};


