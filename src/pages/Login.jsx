import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../api/api";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) return;

    await api.post('auth/', {
      email,
      password
    }).then(() => {
      console.log('Usuario encontrado')
      navigate('/home')
    });

    setUsername("");
    setPassword("");  
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-md w-full sm:w-96">
        <h1 className="text-3xl font-semibold text-center mb-6">SocialBasic</h1>
        <form>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Correo electrónico o Usuario"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
              onClick={handleSubmit}
            >
              Iniciar Sesión
            </button>
          </div>

          <div className="flex justify-center mt-4">
            <span className="mr-2">¿No tienes una cuenta?</span>
            <Link to="/register" className="text-blue-500 hover:underline">
              Regístrate aquí
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};