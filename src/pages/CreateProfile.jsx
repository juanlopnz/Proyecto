import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const CreateProfile = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar los datos del perfil a través de una API o realizar otras acciones
    console.log('Perfil creado:', { username, email, password, confirmPassword});
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
    <div className="bg-white rounded-lg shadow-md p-4 max-w-xs mx-auto">
      <h2 className="text-3xl font-semibold text-center mb-6">Crear Perfil</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full mb-2 p-2 border border-gray-300 rounded"
        />
        <input
          type="email"
          placeholder="Gmail"
          value={fullName}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-2 p-2 border border-gray-300 rounded"
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={email}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-2 p-2 border border-gray-300 rounded"
        />
        <input
          type="password"
          placeholder="Confirmar contraseña"
          value={password}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full mb-4 p-2 border border-gray-300 rounded"
        />
        <Link to="/home">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded"
          >
            Crear Perfil
          </button>     
        </Link>
      </form>
    </div>
    </div>
  );
};


