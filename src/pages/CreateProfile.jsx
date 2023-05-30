import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../../api/api';

export const CreateProfile = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');

  const handleSubmit = async (e) => {
    // e.preventDefault();
    // Lógica para enviar los datos del perfil a través de una API o realizar otras acciones
    if(password !== confirmpassword){
      alert('Las contraseñas no coinciden')
    }

    if (!username || !email || !password || !confirmpassword) return;

    //fetch local
    const { data } = await api.post('auth/new', {
      username,
      email,
      password,
      confirmpassword
    }).then(() => {
      console.log('Usuario creado', data )
    });

    setUsername("")
    setEmail("")
    setPassword("")
    setConfirmPassword("")
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
    <div className="bg-white rounded-lg shadow-md p-4 max-w-xs mx-auto">
      <h2 className="text-3xl font-semibold text-center mb-6">Crear Perfil</h2>
      <form>
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-2 p-2 border border-gray-300 rounded"
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-2 p-2 border border-gray-300 rounded"
        />
        <input
          type="password"
          placeholder="Confirmar contraseña"
          value={confirmpassword}
          onChange={(e) => setConfirmpassword(e.target.value)}
          className="w-full mb-4 p-2 border border-gray-300 rounded"
        />
        <div>
          <button onClick={handleSubmit}
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded"
          >
            Crear Perfil
          </button>     
        </div>
      </form>
    </div>
    </div>
  );
};


