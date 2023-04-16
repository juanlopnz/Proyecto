import React, { useState } from "react";


export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-md w-full sm:w-96">
        <h1 className="text-3xl font-semibold text-center mb-6">Iniciar sesión</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Nombre de usuario"
            value={username}
            onChange={handleUsernameChange}
          />
          <input
            type="password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Contraseña"
            value={password}
            onChange={handlePasswordChange}
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
};