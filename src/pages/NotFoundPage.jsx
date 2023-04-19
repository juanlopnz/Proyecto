import React from 'react';
import { Link } from 'react-router-dom';

export const NotFoundPage = () => {
  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <h1 className="text-4xl font-semibold mb-4">404 - Not Found</h1>
      <p className="text-lg mb-4">The page you are looking for doesn't exist.</p>
      <Link to="/home" className="px-6 py-2 bg-blue-500 text-white font-bold rounded-full hover:bg-blue-600 focus:outline-none">
        Volver a Home
      </Link>
    </div>
  );
};