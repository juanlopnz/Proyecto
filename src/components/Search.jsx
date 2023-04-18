import React, { useState } from 'react';

export const Buscar = () => {
    const [username, setUsername] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
      };
    
  return (
    <div className="flex items-center p-4">
        <input
          type="text"
          className="flex-grow px-4 py-2 rounded-full bg-gray-200 focus:outline-none"
          placeholder="Enter username"
          value={username}
          onChange={handleUsernameChange}
        />
      </div>
    
  )
}

