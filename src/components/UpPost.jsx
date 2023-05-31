import React, { useState } from 'react';

export const UpPost = ({ onSubirPost }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState();

  const handleSubmit = (e) => {

    const post = {
      title,
      description,
      image
    };

    onSubirPost(post);

    setTitle('');
    setDescription('');
    setImage();
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Subir un nuevo post</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="text-gray-600 mb-1 block">Título:</label>
            <input
              type="text"
              id="titulo"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="text-gray-600 mb-1 block">Descripción:</label>
            <textarea
              id="descripcion"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 w-full"
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="text-gray-600 mb-1 block">Imagen:</label>
            <input
              type="file"
              id="imagen"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 w-full"
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Subir</button>
        </form>
      </div>
    </div>
  );
};


