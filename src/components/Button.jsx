import React from "react";

export const Button = ({ text, onClick, type }) => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg uppercase tracking-wider focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  );
};

