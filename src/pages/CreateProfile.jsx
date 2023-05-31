import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const CreateProfile = () => {
  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    if (newPassword.length < 6) {
      setPasswordError('La contraseña debe tener minimo 6 dígitos.');
    } else {
      setPasswordError('');
    }
  };

  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);

    if (newConfirmPassword !== password) {
      setConfirmPasswordError('Las contraseñas no coinciden.');
    } else {
      setConfirmPasswordError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password.length < 6 || confirmPassword !== password) {
      return;
    }

    console.log('Perfil creado:', { username, fullName, email, password });
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
            onChange={(e) => setFullName(e.target.value)}
            className="w-full mb-2 p-2 border border-gray-300 rounded"
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={handlePasswordChange}
            className="w-full mb-2 p-2 border border-gray-300 rounded"
          />
          {passwordError && (
            <div className="text-red-500 text-sm mb-2">{passwordError}</div>
          )}
          <input
            type="password"
            placeholder="Confirmar contraseña"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            className="w-full mb-4 p-2 border border-gray-300 rounded"
          />
          {confirmPasswordError && (
            <div className="text-red-500 text-sm mb-2">{confirmPasswordError}</div>
          )}
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





