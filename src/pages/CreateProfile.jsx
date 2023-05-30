import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const CreateProfile = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    // e.preventDefault();
    // Lógica para enviar los datos del perfil a través de una API o realizar otras acciones
    if(Password !== ConfirmPassword){
      alert('Las contraseñas no coinciden')
    }

    if (!Username || !Email || !ConfirmPassword || !ConfirmPassword) return;

    //fetch local
    await fetch('http://localhost:4000/api/auth/new', {
      method: 'POST',
      body: JSON.stringify(User),
      headers: { "Content-Type": "application/json" }
    }).then(() => {
      console.log('Perfil creado:', { Username, Email, Password, ConfirmPassword});
    })

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
          value={Username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full mb-2 p-2 border border-gray-300 rounded"
        />
        <input
          type="email"
          placeholder="Gmail"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-2 p-2 border border-gray-300 rounded"
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-2 p-2 border border-gray-300 rounded"
        />
        <input
          type="password"
          placeholder="Confirmar contraseña"
          value={ConfirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full mb-4 p-2 border border-gray-300 rounded"
        />
        <Link to="/home">
          <button onClick={handleSubmit}
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


