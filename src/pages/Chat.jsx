import React, { useState } from 'react';

export const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

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

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-grow p-8">
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


