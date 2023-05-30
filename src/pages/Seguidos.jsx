import React, { useState } from 'react';
import { SideBar } from '../components/SideBar';
import { NavBar } from '../components/NavBar';

export const Seguidos = () => {
  const following = [
    {
      name: 'RodrigoRafaMora',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
      name: 'Pedro_01',
      avatar: 'https://randomuser.me/api/portraits/men/10.jpg',
    },
    {
      name: 'Maria_LL',
      avatar: 'https://randomuser.me/api/portraits/women/34.jpg',
    },
    {
        name: 'Luis',
        avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
      },
      {
        name: 'Yorsh',
        avatar: 'https://randomuser.me/api/portraits/women/10 .jpg',
      },
      {
        name: 'Lopnz',
        avatar: 'https://randomuser.me/api/portraits/men/43.jpg',
      },
    
  ];

  const [searchQuery, setSearchQuery] = useState('');
  const filteredFollowers = following.filter((following) =>
    following.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="flex flex-col items-center">
      <div>
        <SideBar></SideBar>
      </div>
      <h1 className="text-2xl font-bold mb-4">SEGUIDOS</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Buscar usuarios a los que sigues"
          value={searchQuery}
          onChange={handleSearchInputChange}
          className="px-1 w-60 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredFollowers.map((following, index) => (
          <div key={index} className="flex flex-col items-center bg-white p-4 rounded-md shadow-md">
            <img
              src={following.avatar}
              alt={following.name}
              className="w-24 h-24 rounded-full mb-2"
            />
            <p className="text-center">{following.name}</p>
          </div>
        ))}
        <div>
          <NavBar></NavBar>
        </div>
      </div>
    </div>
  );
};
