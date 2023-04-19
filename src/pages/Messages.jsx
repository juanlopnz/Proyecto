import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { BsDot } from 'react-icons/bs';
import { MdMoreHoriz } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { NavBar } from '../components/NavBar';
import { SideBar } from '../components/SideBar';

export const chats = [
  {
    name: 'Luisa',
    message: '¡Hola! ¿Cómo estás?',
    timestamp: '10:30 am',
    unreadCount: 2,
    avatar: 'https://randomuser.me/api/portraits/women/47.jpg',
  },
  {
    name: 'Pedro',
    message: '¿Vamos al cine esta tarde?',
    timestamp: 'ayer',
    unreadCount: 0,
    avatar: 'https://randomuser.me/api/portraits/men/10.jpg',
  },
  {
    name: 'Laura',
    message: '¡Feliz cumpleaños!',
    timestamp: '20 de marzo',
    unreadCount: 1,
    avatar: 'https://randomuser.me/api/portraits/women/34.jpg',
  },
];

export const Messages = () => {
  return (
    <div className="flex flex-col w-full h-screen bg-gray-100">
      <div className="flex items-center justify-between bg-white p-4">
        <div>
          <SideBar></SideBar>
        </div>
        <h1 className="text-xl font-bold">Chats</h1>
        <div className="flex items-center">
          <div className="mr-4">
            <FiSearch size={20} />
          </div>
          <div>
            <MdMoreHoriz size={20} />
          </div>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto">
        {chats.map((chat, index) => (
          <Link to={`/chat/${index}`}
            key={index}
            className="flex items-center justify-between px-4 py-2 border-b border-gray-300 cursor-pointer hover:bg-gray-200 transition duration-300"
          >
            <div className="flex items-center">
              <img
                src={chat.avatar}
                alt={chat.name}
                className="w-10 h-10 rounded-full mr-4"
              />
              <div>
                <h2 className="font-semibold">{chat.name}</h2>
                <p className="text-sm text-gray-500">{chat.message}</p>
              </div>
            </div>
            <div className="flex items-center">
              <p className="text-sm text-gray-500 mr-2">{chat.timestamp}</p>
              {chat.unreadCount > 0 && (
                <div className="bg-blue-500 rounded-full w-6 h-6 flex items-center justify-center">
                  <p className="text-white text-xs">{chat.unreadCount}</p>
                </div>
              )}
              {chat.unreadCount === 0 && <BsDot size={18} />}
            </div>
          </Link>
        ))}
      </div>
      <NavBar></NavBar>
    </div>
  );
};