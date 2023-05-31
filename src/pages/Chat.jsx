import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { chats } from './Messages';
import { IoIosArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';

export const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [username, setUsername] = useState('John Doe');
  const [filteredChats, setFilteredChats]= useState(chats);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (inputValue !== '') {
      setMessages([...messages, inputValue]);
      setInputValue('');
    }
  };

  const handleSearch =()=>{
    const filtered = chats.filter(chat=>chat.name.toLowerCase().includes)
  }

  const { id } = useParams()

  return (
    <div className="flex flex-col h-screen">
      <div className="h-16 bg-gray-200 text-black flex items-center justify-between px-8">
        <div className="flex items-center">
          <Link to="/messages" className="bg-gray-200 hover:bg-gray-300  py-2 rounded-md">
            <IoIosArrowBack className="text-3xl rounded-full bg-gray-300 left-0" />
          </Link>
          <img src={chats[id].avatar} alt={chats[id].name} className="w-10 h-10 rounded-full ml-10 mr-4" />
          <div>
            <h2 className="font-semibold">{chats[id].name}</h2>
          </div>
        </div>
      </div>
      <div className="flex-grow p-8 bg-gray-100">
        <div className="flex flex-col gap-2 h-full">
          {messages.map((message, index) => (
            <div key={index} className="bg-gray-200 p-2 rounded-md">
              {message}
            </div>
          ))}
        </div>
      </div>
      <div className="flex-grow p-8 bg-gray-100">
        <div className="flex flex-col gap-2 h-full">
          {messages.map((message, index) => (
            <div key={index} className="bg-gray-200 p-2 rounded-md">
              {message}
            </div>
          ))}
        </div>
      </div>
      <form className="flex items-center p-4" onSubmit={handleFormSubmit}>
        <input
          type="text"
          className="flex-grow px-4 py-2 rounded-full bg-gray-200 focus:outline-none"
          placeholder="Type your message..."
          value={inputValue}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="ml-4 px-6 py-2 rounded-full bg-blue-500 text-white font-bold hover:bg-blue-600 focus:outline-none"
        >
          Send
        </button>
      </form>
    </div>
  );
};


